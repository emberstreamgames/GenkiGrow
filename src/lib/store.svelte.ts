import { ITEMS, type Deck, type Item } from '../data/items'

export type Mode = 'mix' | 'flip' | 'choice' | 'type'

export interface Stat {
  c: number // times correct
  w: number // times wrong
  streak: number // current correct-in-a-row
  last: number // timestamp of last review
}

interface Saved {
  lessons: number[]
  stats: Record<string, Stat>
  xp: number
  best: number // best combo ever
  muted: boolean
  mode: Mode
}

const KEY = 'genki-study-v1'

const defaults = (): Saved => ({ lessons: [1, 2], stats: {}, xp: 0, best: 0, muted: false, mode: 'mix' })

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...defaults(), ...JSON.parse(raw) }
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
