# JLPT N5 Kanji: Lists, Consensus Set, and Genki I Alignment

Method note: list contents were checked against the live pages (JLPT Sensei, Kanshudo, Jisho) and computed directly from the machine-readable `kanji.json` in davidluzgouveia/kanji-data (downloaded 2026-10-27). The Genki per-lesson list comes from the official Japan Times PDF. tanos.co.uk did not resolve (DNS failure) and the Wayback Machine was blocked, so the Tanos/Waller list was checked indirectly through Jisho and kanji-data, which both say they take their JLPT data from Jonathan Waller's (Tanos) page.

## Q1. What are the main N5 kanji lists, and how big is each?

### Takeaway
There are two sizes of N5 list. Lists built from the current post-2010 data have 79-80 kanji: Tanos/Waller, Jisho and kanji-data have 79, and JLPT Sensei and Kanshudo have 80 (the same 79 plus 分). The "103" figure comes from the old pre-2010 Level 4 list (KANJIDIC2's `jlpt` field / kanji-data `jlpt_old`=4). The JLPT has published no official kanji list since 2010.

### Cited Findings
- **JLPT Sensei**: "JLPT N5 Kanji List total: (80)", on a single page. It contains 分. — [JLPT Sensei N5 kanji](https://jlptsensei.com/jlpt-n5-kanji-list/)
- **Kanshudo**: 80 N5 kanji, including 分. Kanshudo says its lists were "developed based on our own assessment of past tests, and comparison with other available lists" and notes the JLPT publishes no official kanji lists. Kanji within a level are ordered by daily-use frequency. — [Kanshudo JLPT kanji](https://www.kanshudo.com/collections/jlpt_kanji)
- **Jisho** (`#kanji #jlpt-n5`): "Kanji — 79 found". Footer: "JLPT data comes from Jonathan Waller's JLPT Resources page." — [Jisho search](https://jisho.org/search/%23kanji%20%23jlpt-n5)
- **davidluzgouveia/kanji-data** (`kanji.json`): `jlpt_new == 5` gives 79 kanji and `jlpt_old == 4` gives 103. The README says the data is mostly KANJIDIC converted to JSON, "extended with updated JLPT levels" from Jonathan Waller's JLPT Resources page, plus WaniKani API data (`wk_level`). The repo is MIT-licensed. — [kanji-data repo](https://github.com/davidluzgouveia/kanji-data)
- **Tanos (Jonathan Waller)**: this is the upstream source for Jisho and kanji-data. It could not be fetched directly (site unreachable on 2026-10-27). Because Jisho and kanji-data both report 79 and say they derive from Waller, the Tanos N5 list is almost certainly the same 79 kanji, without 分. This is an inference, not checked against tanos.co.uk itself. — [Jisho](https://jisho.org/search/%23kanji%20%23jlpt-n5); [kanji-data](https://github.com/davidluzgouveia/kanji-data)
- **KANJIDIC2 (EDRDG)**: the JLPT field is "The pre-2010 level of the Japanese Language Proficiency Test (JLPT) in which the kanji occurs (1-4)". It is old-system data, so the old Level 4 roughly maps to N5 plus part of N4. The 103 Level-4 kanji in kanji-data's `jlpt_old` come from this field. — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- **WaniKani**: kanji-data includes `wk_level`. The 80 N5 kanji are spread over WaniKani levels 1-10, with one outlier: 書 is at WK level 16 (computed from kanji-data `wk_level`). WaniKani does not organise its content by JLPT level. — [kanji-data](https://github.com/davidluzgouveia/kanji-data)

| Source | N5 count | Basis |
|---|---|---|
| Tanos / Jonathan Waller | 79 (inferred via derivatives) | Waller's post-2010 estimate |
| Jisho `#jlpt-n5` | 79 | Waller data |
| kanji-data `jlpt_new=5` | 79 | Waller data |
| JLPT Sensei | 80 | 79 + 分 |
| Kanshudo | 80 | 79 + 分 (own assessment) |
| KANJIDIC2 `jlpt=4` / kanji-data `jlpt_old=4` | 103 | Old Level 4 (pre-2010) |

### Inferences
- When a site cites "about 100 N5 kanji" or 103, it is almost always reusing the old Level 4 list. When it cites 79-80, it is using the post-2010 Waller-derived list.
- For an app, the 80-kanji set (Waller 79 + 分) is a defensible "consensus N5". 分 is basic (時/分 for telling time) and is taught in Genki L6.

### Gaps
- tanos.co.uk was not reachable, so the 79 count and the absence of 分 on Tanos are inferred from Jisho and kanji-data, not seen directly.
- I did not check Jisho's list kanji by kanji past the first 20 shown, but its count (79) matches kanji-data, which uses the same upstream source.
- The JLPT has no official post-2010 kanji list (stated by Kanshudo and KANJIDIC docs). Licensing is out of scope here and covered by the other researcher.

## Q2. Which kanji are disputed (on some lists but not others)?

### Takeaway
The post-2010 lists differ by only one kanji: 分 is on JLPT Sensei and Kanshudo but not on Waller/Jisho/kanji-data, where kanji-data leaves its `jlpt_new` as null. The bigger difference is between new and old lists: 23 kanji from the old Level 4 are not N5 on any modern list (mostly N4 now, plus 耳 at N3).

### Cited Findings
- 分 appears in JLPT Sensei's 80 and Kanshudo's 80. — [JLPT Sensei](https://jlptsensei.com/jlpt-n5-kanji-list/); [Kanshudo](https://www.kanshudo.com/collections/jlpt_kanji)
- In kanji-data, 分 has `jlpt_old: 4` but `jlpt_new: null`, so it has no new-system level in the Waller data. Without it the set is 79, matching Jisho. — [kanji-data kanji.json](https://github.com/davidluzgouveia/kanji-data)
- Kanji in old Level 4 (103) but not modern N5 (computed from kanji-data `jlpt_old` vs `jlpt_new`):
  - 口 手 目 立 少 古 多 足 会 社 言 空 安 店 魚 買 道 新 花 駅 週 飲 → `jlpt_new` = 4 (N4)
  - 耳 → `jlpt_new` = 3 (N3)
  - 分 → `jlpt_new` = null (see above)
  - Every modern N5 kanji is also in old Level 4, so the 79 is a strict subset of the 103. — [kanji-data](https://github.com/davidluzgouveia/kanji-data)

### Inferences
- In practice the "disputed" kanji are the 23 above: some apps and decks that still use KANJIDIC's old field will label them N5. An app that wants an "N5 superset" can use the 103 and mark these 23 as "old Level 4 / borderline".
- Readings and meanings of the disputed kanji, from kanji-data/KANJIDIC: 口 mouth (こう、く / くち); 手 hand (しゅ、ず / て); 目 eye (もく、ぼく / め); 立 stand (りつ、りゅう / た.つ、た.てる); 少 few (しょう / すく.ない、すこ.し); 古 old (こ / ふる.い); 多 many (た / おお.い); 足 foot, suffice (そく / あし、た.りる); 会 meet (かい、え / あ.う); 社 company (しゃ / やしろ); 言 say (げん、ごん / い.う、こと); 空 sky, empty (くう / そら、あ.く、から); 安 cheap (あん / やす.い); 店 shop (てん / みせ); 魚 fish (ぎょ / さかな、うお); 買 buy (ばい / か.う); 道 road (どう / みち); 新 new (しん / あたら.しい); 耳 ear (じ / みみ); 花 flower (か / はな); 駅 station (えき); 週 week (しゅう); 飲 drink (いん / の.む). — [kanji-data](https://github.com/davidluzgouveia/kanji-data)

### Gaps
- I did not check whether other popular sources (Anki decks, Bunpro, Migaku) use 79, 80 or 103.

## Q3. The full consensus N5 kanji set (80 = Waller 79 + 分), with meanings and readings

### Takeaway
Below are all 80 kanji, grouped by theme. Meanings, readings, stroke counts and school grade come from KANJIDIC via kanji-data's `kanji.json`. Readings are KANJIDIC-style: "." marks okurigana, "-" marks a prefix or suffix, and on'yomi are shown in hiragana as kanji-data stores them (KANJIDIC2 itself uses katakana). The last column gives the Genki I lesson where each kanji is introduced. All 80 are elementary-school kyōiku kanji, grades 1-2.

### Cited Findings
- Source of all readings, meanings, strokes and grades below: [kanji-data kanji.json](https://github.com/davidluzgouveia/kanji-data) (derived from [KANJIDIC2, EDRDG](https://www.edrdg.org/wiki/KANJIDIC_Project.html)). Lesson numbers come from the [official Genki 3rd ed. kanji list PDF](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_kanji_E.pdf).
- Membership: the 79 kanji with kanji-data `jlpt_new`=5 (same count as Jisho), plus 分 from [JLPT Sensei](https://jlptsensei.com/jlpt-n5-kanji-list/) / [Kanshudo](https://www.kanshudo.com/collections/jlpt_kanji). Kanshudo's 80 and JLPT Sensei's 80 contain exactly the same characters as this set (checked against both pages).

#### Numbers & money (14)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 一 | One | いち、いつ | ひと-、ひと.つ | 1 | 1 | L3 |
| 二 | Two | に、じ | ふた、ふた.つ、ふたたび | 2 | 1 | L3 |
| 三 | Three | さん、ぞう | み、み.つ、みっ.つ | 3 | 1 | L3 |
| 四 | Four | し | よ、よ.つ、よっ.つ、よん | 5 | 1 | L3 |
| 五 | Five | ご | いつ、いつ.つ | 4 | 1 | L3 |
| 六 | Six | ろく、りく | む、む.つ、むっ.つ、むい | 4 | 1 | L3 |
| 七 | Seven | しち | なな、なな.つ、なの | 2 | 1 | L3 |
| 八 | Eight | はち | や、や.つ、やっ.つ、よう | 2 | 1 | L3 |
| 九 | Nine | きゅう、く | ここの、ここの.つ | 2 | 1 | L3 |
| 十 | Ten | じゅう、じっ、じゅっ | とお、と | 2 | 1 | L3 |
| 百 | Hundred | ひゃく、びゃく | もも | 6 | 1 | L3 |
| 千 | Thousand | せん | ち | 3 | 1 | L3 |
| 万 | Ten thousand | まん、ばん | よろず | 3 | 2 | L3 |
| 円 | Circle, yen, round | えん | まる.い、まる、まど、まど.か | 4 | 1 | L3 |

#### Time & calendar (18)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 日 | Day, sun, Japan | にち、じつ | ひ、-び、-か | 4 | 1 | L4 |
| 月 | Month, moon | げつ、がつ | つき | 4 | 1 | L4 |
| 火 | Fire | か | ひ、-び、ほ- | 4 | 1 | L4 |
| 水 | Water | すい | みず、みず- | 4 | 1 | L4 |
| 木 | Tree, wood | ぼく、もく | き、こ- | 4 | 1 | L4 |
| 金 | Gold, money | きん、こん、ごん | かね、かな-、-がね | 8 | 1 | L4 |
| 土 | Soil, earth | ど、と | つち | 3 | 1 | L4 |
| 年 | Year | ねん | とし | 6 | 1 | L10 |
| 時 | Time, hour | じ | とき、-どき | 10 | 2 | L3 |
| 分 | Part, minute | ぶん、ふん、ぶ | わ.ける、わ.かれる、わ.かる | 4 | 2 | L6 |
| 午 | Noon | ご | うま | 4 | 2 | L9 |
| 半 | Half | はん | なか.ば | 5 | 2 | L4 |
| 今 | Now | こん、きん | いま | 4 | 2 | L5 |
| 毎 | Every | まい | ごと、-ごと.に | 6 | 2 | L7 |
| 前 | In front, before | ぜん | まえ、-まえ | 9 | 2 | L9 |
| 後 | Behind, after, later | ご、こう | のち、うし.ろ、あと、おく.れる | 9 | 2 | L9 |
| 間 | Interval, space, between | かん、けん | あいだ、ま、あい | 12 | 2 | L9 |
| 先 | Before, ahead, previous | せん | さき、ま.ず | 6 | 1 | L6 |

#### People & family (8)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 人 | Person | じん、にん | ひと、-り、-と | 2 | 1 | L4 |
| 男 | Male, man | だん、なん | おとこ、お | 7 | 1 | L5 |
| 女 | Woman, female | じょ、にょ、にょう | おんな、め | 3 | 1 | L5 |
| 子 | Child | し、す、つ | こ、-こ、ね | 3 | 1 | L7 |
| 父 | Father | ふ | ちち | 4 | 2 | L7 |
| 母 | Mother | ぼ | はは、も | 5 | 2 | L7 |
| 友 | Friend | ゆう | とも | 4 | 2 | L9 |
| 名 | Name | めい、みょう | な、-な | 6 | 1 | L9 |

#### Directions & position (10)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 上 | Above, up | じょう、しょう、しゃん | うえ、うわ-、かみ、あ.げる、あ.がる | 3 | 1 | L4 |
| 下 | Below, down | か、げ | した、しも、もと、さ.げる、さ.がる、くだ.る | 3 | 1 | L4 |
| 中 | Inside, middle | ちゅう | なか、うち、あた.る | 4 | 1 | L4 |
| 外 | Outside | がい、げ | そと、ほか、はず.す、はず.れる | 5 | 2 | L6 |
| 右 | Right | う、ゆう | みぎ | 5 | 1 | L6 |
| 左 | Left | さ、しゃ | ひだり | 5 | 1 | L6 |
| 東 | East | とう | ひがし | 8 | 2 | L6 |
| 西 | West | せい、さい、す | にし | 6 | 2 | L6 |
| 南 | South | なん、な | みなみ | 9 | 2 | L6 |
| 北 | North | ほく | きた | 5 | 2 | L6 |

#### Nature & weather (5)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 山 | Mountain | さん、せん | やま | 3 | 1 | L5 |
| 川 | River | せん | かわ | 3 | 1 | L5 |
| 天 | Heavens, sky | てん | あまつ、あめ、あま- | 4 | 1 | L5 |
| 雨 | Rain | う | あめ、あま-、-さめ | 8 | 1 | L9 |
| 気 | Spirit, mind, air | き、け | いき | 6 | 1 | L5 |

#### Places, school, things (7)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 国 | Country | こく | くに | 8 | 2 | L6 |
| 学 | Study, learning | がく | まな.ぶ | 8 | 1 | L6 |
| 校 | School | こう、きょう | (none) | 10 | 1 | L7 |
| 本 | Book, origin, main | ほん | もと | 5 | 1 | L4 |
| 車 | Car, vehicle | しゃ | くるま | 7 | 1 | L8 |
| 電 | Electricity | でん | (none) | 13 | 2 | L8 |
| 語 | Word, language | ご | かた.る、かた.らう | 14 | 2 | L7 |

#### Verbs (12)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 行 | Go | こう、ぎょう、あん | い.く、ゆ.く、おこな.う | 6 | 2 | L5 |
| 来 | Come, next | らい、たい | く.る、きた.る、きた.す | 7 | 2 | L9 |
| 見 | See | けん | み.る、み.える、み.せる | 7 | 1 | L5 |
| 聞 | Hear, ask, listen | ぶん、もん | き.く、き.こえる | 14 | 2 | L8 |
| 食 | Eat, food | しょく、じき | た.べる、く.う、く.らう | 9 | 2 | L5 |
| 読 | Read | どく、とく、とう | よ.む | 14 | 2 | L8 |
| 書 | Write | しょ | か.く、-がき | 10 | 2 | L9 |
| 話 | Talk, story | わ | はな.す、はなし | 13 | 2 | L9 |
| 休 | Rest, day off | きゅう | やす.む、やす.まる、やす.める | 6 | 1 | L8 |
| 出 | Exit, go out | しゅつ、すい | で.る、だ.す | 5 | 1 | L6 |
| 入 | Enter, insert | にゅう、じゅ | い.る、い.れる、はい.る | 2 | 1 | L7 |
| 生 | Life, birth | せい、しょう | い.きる、う.まれる、なま、は.える | 5 | 1 | L6 |

#### Adjectives / descriptors / question word (6)

| Kanji | Meaning | On'yomi | Kun'yomi | Strokes | Grade | Genki I lesson |
|---|---|---|---|---|---|---|
| 大 | Big, large | だい、たい | おお-、おお.きい | 3 | 1 | L6 |
| 小 | Small, little | しょう | ちい.さい、こ-、お- | 3 | 1 | L7 |
| 長 | Long, leader | ちょう | なが.い、おさ | 8 | 2 | L10 |
| 高 | Tall, high, expensive | こう | たか.い、たか | 10 | 2 | L7 |
| 白 | White | はく、びゃく | しろ、しら-、しろ.い | 5 | 1 | L9 |
| 何 | What | か | なに、なん | 7 | 2 | L8 |

Total: 14+18+8+10+5+7+12+6 = 80.

### Inferences
- KANJIDIC kun lists are exhaustive and include rare or archaic readings (e.g. 千 ち, 百 もも, 午 うま). For N5 study, an app should show a curated subset, such as the readings used in N5 vocabulary (ひとつ, いま, みず, はなす…), rather than the full KANJIDIC string. kanji-data's `wk_readings_*` fields (WaniKani-curated, with "!" marking non-primary) could serve as a lighter alternative.
- Some cells above were lightly trimmed (rare suffix forms dropped) and a few common readings were added where they belong to the same KANJIDIC entry, e.g. 行 おこな.う, 入 はい.る, 生 なま. Check against raw KANJIDIC2 before shipping.

### Gaps
- I did not cross-check the readings against a second dictionary (e.g. Jisho's per-kanji pages); they rely on KANJIDIC via kanji-data.

## Q4. How does N5 line up with Genki I (3rd ed., lessons 3-12)?

### Takeaway
Genki I's 145 Reading & Writing kanji include all 80 N5 kanji (79 Waller + 分), so Genki I fully covers N5 kanji. The other 65 Genki I kanji are beyond N5: 55 are N4, 9 are N3, and 々 is an iteration mark with no level. Of the old 103 Level-4 kanji, Genki I covers 92. The other 11 (目 耳 花 足 多 空 安 店 週 魚 駅) arrive in Genki II, except 耳, which is in neither volume.

### Cited Findings
- Official per-lesson list, Genki 3rd ed., Genki I (145 kanji, numbered 1-145) — [Japan Times PDF "Kanji Introduced in the Reading and Writing Section"](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_kanji_E.pdf):
  - L3 (15): 一 二 三 四 五 六 七 八 九 十 百 千 万 円 時
  - L4 (14): 日 本 人 月 火 水 木 金 土 曜 上 下 中 半
  - L5 (14): 山 川 元 気 天 私 今 田 女 男 見 行 食 飲
  - L6 (15): 東 西 南 北 口 出 右 左 分 先 生 大 学 外 国
  - L7 (14): 京 子 小 会 社 父 母 高 校 毎 語 文 帰 入
  - L8 (14): 員 新 聞 作 仕 事 電 車 休 言 読 思 次 何
  - L9 (15): 午 後 前 名 白 雨 書 友 間 家 話 少 古 知 来
  - L10 (14): 住 正 年 売 買 町 長 道 雪 立 自 夜 朝 持
  - L11 (16): 手 紙 好 近 明 病 院 映 画 歌 市 所 勉 強 有 旅
  - L12 (14): 昔 々 神 早 起 牛 使 働 連 別 度 赤 青 色
- The publisher's site: "A total of 317 kanji are studied in the Reading and Writing sections: 145 in GENKI 1 and 172 in GENKI 2". The kanji include "kanji for N4 and N5 levels", and completing Vol. 1 targets a level "on par with JLPT N5 or CEFR A1". — [Genki 3rd ed. intro](https://genki3.japantimes.co.jp/en/intro/)
- Per-lesson N5 coverage, computed from the official PDF and the 80-kanji set (kanji-data `jlpt_new` levels in brackets):

| Lesson | Kanji | N5 | Beyond N5 (level) |
|---|---|---|---|
| L3 | 15 | 15 | none |
| L4 | 14 | 13 | 曜(N4) |
| L5 | 14 | 10 | 元 私 田 飲 (all N4) |
| L6 | 15 | 14 | 口(N4) |
| L7 | 14 | 9 | 京 会 社 文 帰 (N4) |
| L8 | 14 | 6 | 員 新 作 仕 事 言 思 (N4), 次(N3) |
| L9 | 15 | 11 | 家 少 古 知 (N4) |
| L10 | 14 | 2 (年, 長) | 住 正 売 買 町 道 立 自 夜 朝 持 (N4), 雪(N3) |
| L11 | 16 | 0 | 手 紙 近 明 病 院 映 画 歌 勉 強 有 旅 (N4); 好 市 所 (N3) |
| L12 | 14 | 0 | 早 起 牛 使 別 度 赤 青 色 (N4); 昔 神 働 連 (N3); 々 (no level) |
| **Total** | **145** | **80** | **65** (55 N4, 9 N3, 1 none) |

  — [Genki PDF](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_kanji_E.pdf) + [kanji-data](https://github.com/davidluzgouveia/kanji-data)
- **N5 kanji that Genki I does not teach: none.** All 80 appear in L3-L10, and the last ones (年, 長) come in L10. — same sources
- Against the old Level 4 (103): Genki I covers 92. 目 花 足 多 空 安 店 週 魚 駅 are taught in Genki II (L13-L22), and 耳 is in neither Genki volume's R&W list. — same sources
- **2nd vs 3rd edition**: the lesson structure of Genki I's 3rd edition is the same as the 2nd's ("same chapters", grammar explanations revised, some vocabulary modernised). — [WaniKani forum, "Genki 1, 3rd Edition released"](https://community.wanikani.com/t/genki-1-3rd-edition-released/42151). A search snippet of the old official Genki FAQ said the kanji in each lesson are "exactly the same as those appearing in the first edition" (145/172 split). The FAQ URL now redirects to the 3rd-ed intro page, so I could not verify the quote directly. — [genki.japantimes.co.jp/faq_en (redirects)](https://genki.japantimes.co.jp/faq_en)

### Inferences
- An app built on Genki I can treat "N5 kanji complete" as reached at the end of **Lesson 10**. L11-L12 kanji are all N4/N3 and work as bonus or preview content.
- Genki front-loads N5 kanji (L3-L9 contain 78 of the 80), while L10-L12 shift mostly to N4. A "garden" or progress mechanic could show N5 kanji mastery per lesson using the table above.
- The per-lesson kanji table appears to be stable across the 1st, 2nd and 3rd editions (based on the FAQ snippet and the unchanged lesson structure), so 2nd-edition users should see the same mapping. This is not fully verified.

### Gaps
- I could not get an authoritative side-by-side of the 2nd vs 3rd edition kanji lists. The "unchanged" claim rests on a search snippet of a now-redirected FAQ and forum reports.
- The table covers only the R&W "new kanji" lists. It does not cover which kanji appear in Genki I vocabulary or dialogues (Genki uses some kanji in the main text before they are formally taught).

## Q5. What does KANJIDIC2 (EDRDG) provide as a machine-readable source?

### Takeaway
KANJIDIC2 is an XML file covering 13,108 kanji, with grade, stroke count, frequency rank, the old 1-4 JLPT level, on/kun/nanori readings, and multilingual meanings, licensed CC BY-SA 4.0. Its JLPT field is pre-2010 only, so N5 tagging needs a separate overlay such as Waller-derived kanji-data `jlpt_new`.

### Cited Findings
- Coverage: 13,108 kanji from JIS X 0208, JIS X 0212 and JIS X 0213. — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- Fields: JIS and Unicode code points; classical and Nelson radicals; grade (G1-G10, including jōyō and jinmeiyō); stroke count (the first value is the accepted one); frequency rank for the most-used kanji; JLPT level; readings (pinyin, Korean, Vietnamese, on'yomi in katakana, kun'yomi in hiragana); nanori; meanings tagged by ISO 639-1 language (English default); variants, dictionary indices, SKIP/De Roo/Four Corner codes. — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- JLPT field: "The pre-2010 level of the Japanese Language Proficiency Test (JLPT) in which the kanji occurs (1-4)". The doc notes the test moved to N1-N5 with no official kanji lists. — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- Format: UTF-8 XML with a DTD. The legacy KANJIDIC/KANJD212 files are EUC-JP text. Licence: CC BY-SA 4.0 (some embedded codes have their own terms). — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- The EDRDG documentation wiki has been closed and archived, and static copies remain at edrdg.org/wiki/*.html. — [EDRDG KANJIDIC Project](https://www.edrdg.org/wiki/KANJIDIC_Project.html)
- Convenient JSON derivative: davidluzgouveia/kanji-data `kanji.json` (about 5.5 MB). Per-kanji keys are `strokes, grade, freq, jlpt_old, jlpt_new, meanings, readings_on, readings_kun, wk_level, wk_meanings, wk_readings_on, wk_readings_kun, wk_radicals` (seen in the downloaded file). The repo is MIT-licensed, but the KANJIDIC-derived content stays subject to EDRDG's CC BY-SA terms (licensing details are covered by the other researcher). — [kanji-data](https://github.com/davidluzgouveia/kanji-data)

### Inferences
- The simplest pipeline for genki-grow: use kanji-data `kanji.json`, filter to `jlpt_new == 5`, add 分, and join with the Genki lesson table above. That produces the full N5 kanji dataset with readings, meanings, strokes and lesson mapping. Stroke-order SVGs would come from KanjiVG (not researched here).
- Kanji-data's `jlpt_new: null` for 分 is a data-quality quirk to handle explicitly.

### Gaps
- I did not download KANJIDIC2 XML directly, so the field details come from EDRDG documentation and kanji-data, not my own parse of the XML.
- KanjiVG does not carry a JLPT field as far as I know, and I did not verify this. The "KanjiVG jlpt field" in the brief most likely refers to KANJIDIC2.
