import { ITEMS, deckReady, type Deck, type Item } from '../data/items'
import { BLOOMED, COOLDOWN_MS, PLOT_COUNT, SEEDED, SPECIES, advance, completeQuiz, completionBonus, normalizeGarden, plantSeed, type Plot, type Species } from './garden'

export type Mode = 'mix' | 'flip' | 'choice' | 'type'

export interface Stat {
  c: number // times correct
  w: number // times wrong
  streak: number // current correct-in-a-row
  last: number // timestamp of last review
}

interface Saved {
  version: number // save format version, for future migrations
  garden: (Plot | null)[] // PLOT_COUNT slots; null is an empty plot
  debug: boolean // hidden debug tools unlocked in Settings
  lessons: number[]
  stats: Record<string, Stat>
  xp: number
  best: number // best combo ever
  muted: boolean
  mode: Mode
}

const KEY = 'genki-study-v1'

const SAVE_VERSION = 2

const defaults = (): Saved => ({
  version: SAVE_VERSION,
  garden: normalizeGarden(null),
  debug: false,
  lessons: [1, 2],
  stats: {},
  xp: 0,
  best: 0,
  muted: false,
  mode: 'mix',
})

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const data = { ...defaults(), ...JSON.parse(raw) }
      data.garden = normalizeGarden(data.garden)
      data.version = SAVE_VERSION
      return data
    }
  } catch {
    // storage unavailable or corrupt: start fresh
  }
  return defaults()
}

export const app = $state<Saved>(load())

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify($state.snapshot(app)))
  } catch {
    // ignore: app still works for this session
  }
}

export function toggleLesson(n: number) {
  const i = app.lessons.indexOf(n)
  if (i >= 0) app.lessons.splice(i, 1)
  else app.lessons.push(n)
  save()
}

export const poolFor = (deck: Deck): Item[] =>
  ITEMS.filter((i) => i.type === deck && app.lessons.includes(i.lesson))

export function record(id: string, correct: boolean) {
  const s = (app.stats[id] ??= { c: 0, w: 0, streak: 0, last: 0 })
  if (correct) {
    s.c++
    s.streak++
  } else {
    s.w++
    s.streak = 0
  }
  s.last = Date.now()
  save()
}

export const level = () => Math.floor(app.xp / 100) + 1

export function exportData(): string {
  return JSON.stringify($state.snapshot(app), null, 2)
}

export function importData(text: string): boolean {
  try {
    const data = JSON.parse(text)
    if (typeof data !== 'object' || !data || typeof data.stats !== 'object') return false
    Object.assign(app, defaults(), data)
    app.garden = normalizeGarden(data.garden)
    app.version = SAVE_VERSION
    save()
    return true
  } catch {
    return false
  }
}

export function resetStats() {
  app.stats = {}
  app.xp = 0
  app.best = 0
  save()
}

// Garden actions. Each one checks the rules in garden.ts and reports whether it changed anything.

const validSlot = (i: number) => Number.isInteger(i) && i >= 0 && i < PLOT_COUNT

export function plantAt(i: number, species: Species): boolean {
  if (!validSlot(i) || app.garden[i]) return false
  app.garden[i] = plantSeed(species)
  save()
  return true
}

// Call once a 10-question watering/grooming quiz is finished.
export function finishQuiz(i: number, now = Date.now()): boolean {
  const plot = validSlot(i) ? app.garden[i] : null
  const next = plot && completeQuiz(plot, now)
  if (!next) return false
  app.garden[i] = next
  app.xp += completionBonus(next)
  save()
  return true
}

export function growPlot(i: number, now = Date.now()): boolean {
  const plot = validSlot(i) ? app.garden[i] : null
  const next = plot && advance(plot, now)
  if (!next) return false
  app.garden[i] = next
  save()
  return true
}

export function removePlant(i: number): boolean {
  if (!validSlot(i) || !app.garden[i]) return false
  app.garden[i] = null
  save()
  return true
}

// Debug tools, unlocked from Settings. They bypass the normal rules on purpose.

// Pretend time has passed by moving every finished quiz back.
export function debugSkipTime(ms = COOLDOWN_MS) {
  app.garden.forEach((p) => {
    if (p?.doneAt != null) p.doneAt -= ms
  })
  save()
}

export function debugSetStage(i: number, stage: number) {
  const p = validSlot(i) ? app.garden[i] : null
  if (!p) return
  p.stage = Math.min(BLOOMED, Math.max(SEEDED, stage))
  p.doneAt = null
  save()
}

// Plant every empty plot with a random plantable species at a random stage.
export function debugFill() {
  const species = (Object.keys(SPECIES) as Species[]).filter((s) => deckReady(SPECIES[s].deck))
  if (!species.length) return
  app.garden = app.garden.map((p) => {
    if (p) return p
    const sp = species[Math.floor(Math.random() * species.length)]
    const stage = SEEDED + Math.floor(Math.random() * BLOOMED)
    return { ...plantSeed(sp), stage, waters: stage - SEEDED }
  })
  save()
}

export function resetGarden() {
  app.garden = normalizeGarden(null)
  save()
}
