import { fromLessons, withType, type ByLesson } from './build'
import type { Item } from './items'

// [japanese, reading, meaning, ...other accepted meanings]. Use '' for the reading when the word is all kana.
type Row = [japanese: string, reading: string, meaning: string, ...alts: string[]]

const vocab: ByLesson<Row> = {
  // 0: [
  //   ['先生', 'せんせい', 'teacher', 'professor'],
  // ],
}

export const vocabItems = (): Item[] =>
  fromLessons(vocab, ([jp, reading, meaning, ...alts]) =>
    withType('vocab', `v-${jp}-${meaning.trim().toLowerCase()}`, jp, meaning, [meaning, ...alts], reading),
  )
