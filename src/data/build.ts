import type { Deck, Item } from './items'

// Helpers that turn compact hand-written rows into Items. See docs/CONTENT.md.

export const norm = (s: string) => s.trim().toLowerCase()
export const lessonTag = (n: number) => (n === 0 ? 'Intro' : `Lesson ${n}`)

// Rows are grouped by Genki lesson (0 = Greetings/Numbers, 1-12).
export type ByLesson<R> = Record<number, R[]>

export function fromLessons<R>(byLesson: ByLesson<R>, make: (row: R, lesson: number) => Omit<Item, 'lesson' | 'tag'>): Item[] {
  return Object.entries(byLesson).flatMap(([n, rows]) =>
    rows.map((row) => ({ ...make(row, +n), lesson: +n, tag: lessonTag(+n) })),
  )
}

export const withType = (type: Deck, id: string, front: string, back: string, answers: string[], hint?: string) => ({
  id,
  type,
  front,
  back,
  answers: [...new Set(answers.map(norm).filter(Boolean))],
  ...(hint ? { hint } : {}),
})
