import { fromLessons, withType, type ByLesson } from './build'
import type { Item } from './items'

// [kanji, meaning, readings, ...other accepted meanings]. Use '' for readings to hide them.
type Row = [kanji: string, meaning: string, readings: string, ...alts: string[]]

const kanji: ByLesson<Row> = {
  // 3: [
  //   ['水', 'water', 'スイ / みず'],
  // ],
}

export const kanjiItems = (): Item[] =>
  fromLessons(kanji, ([k, meaning, readings, ...alts]) =>
    withType('kanji', `j-${k}`, k, meaning, [meaning, ...alts], readings),
  )
