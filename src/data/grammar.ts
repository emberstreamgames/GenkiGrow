import { fromLessons, withType, type ByLesson } from './build'
import type { Item } from './items'

// [sentence with ＿＿ for the gap, missing word, English translation, ...other accepted typed answers].
// Typed answers are checked against the missing word, so add romaji alternatives (e.g. 'wa') for keyboards without a Japanese IME.
type Row = [sentence: string, answer: string, translation: string, ...alts: string[]]

const grammar: ByLesson<Row> = {
  // 1: [
  //   ['わたし＿＿がくせいです。', 'は', 'I am a student.', 'wa', 'ha'],
  // ],
}

export const grammarItems = (): Item[] =>
  fromLessons(grammar, ([sentence, answer, translation, ...alts]) =>
    withType('grammar', `g-${sentence}`, sentence, answer, [answer, ...alts], translation),
  )
