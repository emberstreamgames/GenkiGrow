# Genki I covers N5 kanji fully, but not its vocabulary

There is no official JLPT N5 syllabus. Since the 2010 revision, the test's organizers have published no vocabulary, kanji or grammar lists, so every "N5 list" is a community estimate ([JLPT FAQ](https://www.jlpt.jp/e/faq/)). Most of those estimates come from one source: Jonathan Waller's tanos.co.uk lists, which rebuild the pre-2010 Level 4 content. The usual targets are **about 660-675 words** ([OpenJLPT](https://pypi.org/project/openjlpt/)), **79-80 kanji** ([Jisho](https://jisho.org/search/%23kanji%20%23jlpt-n5); [JLPT Sensei](https://jlptsensei.com/jlpt-n5-kanji-list/)) and **about 40-130 grammar points**, depending on how finely a list splits them. Genki I fits these targets unevenly. Its Reading & Writing lessons teach **all 80 N5 kanji by Lesson 10** ([Japan Times kanji PDF](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_kanji_E.pdf)), and its grammar lessons cover nearly all common N5 grammar. Its main vocabulary lists cover only **about 58% of the N5 word list**, or about 70% if you count its supplementary lists. For Genki Grow, the safe sources to bundle are the open datasets (Waller CC BY, JMdict/KANJIDIC2 CC BY-SA 4.0, Tatoeba CC BY 2.0 FR, KanjiVG CC BY-SA 3.0, and OpenJLPT, which combines them). There is no open N5 grammar dataset, so the grammar fill-in-the-blank content has to be written in-house. Genki's own lesson lists carry more legal risk than any of these.

## The JLPT stopped publishing lists in 2010 and points learners to descriptors

The official N5 descriptor is short: "The ability to understand some basic Japanese." For reading, it describes typical expressions written in **hiragana, katakana and basic kanji** ([JLPT Level Summary](https://www.jlpt.jp/e/about/levelsummary.html)). The test has three timed sections: **Vocabulary 20 min, Grammar·Reading 40 min, and Listening 30 min**. These times have applied since the December 2020 test ([JLPT Test Sections](https://www.jlpt.jp/e/guideline/testsections.html)). Scores are scaled, not raw. Language Knowledge+Reading is scored 0-120 with a sectional minimum of 38, Listening is scored 0-60 with a minimum of 19, and the overall pass mark is **80/180** ([JLPT Scoring](https://www.jlpt.jp/e/guideline/results.html)). Falling below either sectional minimum is a fail, whatever the total ([JLPT FAQ](https://www.jlpt.jp/e/faq/)). So an app that covers only vocabulary, kanji and grammar prepares a learner for about two-thirds of the test.

The FAQ says the old Test Content Specifications were dropped because "a list of vocabulary, kanji and grammar items was not necessarily appropriate." It points learners instead to the level summaries, the test composition and the sample questions ([JLPT FAQ](https://www.jlpt.jp/e/faq/)). The pre-2010 **Level 4** that N5 replaced was defined as about **100 kanji, about 800 words and about 150 study hours** ([jlpt.jp comparison PDF](https://www.jlpt.jp/about/pdf/comparison01.pdf?mode=pc)). (This figure comes from a search snippet of the PDF, not a full fetch.) That old definition is still why "800 words, 100 kanji" circulates even though modern lists come in smaller. Because no official list exists, Genki Grow should label its N5 tags as estimates, for example: "JLPT publishes no official lists; levels follow community lists."

## About 660-675 words, nearly all descended from Waller's list

| List | N5 words | Basis / licence |
|---|---|---|
| Tanos / Waller (raw snapshot in OpenJLPT) | 662 | Reconstruction of old Level 4; CC BY ([OpenJLPT](https://github.com/evanclan/OpenJLPT)) |
| OpenJLPT cleaned `n5.json` | 674 | Waller levels joined to JMdict; CC BY-SA 4.0 ([NOTICE.md](https://github.com/evanclan/OpenJLPT/blob/HEAD/NOTICE.md)) |
| JLPT Sensei | 644 | Unsourced "prior test data"; proprietary ([JLPT Sensei](https://jlptsensei.com/jlpt-n5-vocabulary-list/)) |
| Old Level 4 benchmark | ~800 | Pre-2010 official definition |

The 162-word gap between the Waller list (662) and the old ~800-word benchmark is partly a matter of what counts as an entry. The Waller-derived data has **no counter suffixes** (no 〜枚, 〜冊, 〜匹, 〜台, and no 円 as a separate entry), although it includes native counters (ひとつ…とお, ひとり/ふたり) and calendar dates (二日, 二十日) ([OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json)). Spelling choices also affect matching. One WaniKani user saw coverage of the same list move from 38% to 51% depending on whether kana-only words were counted ([WaniKani forum](https://community.wanikani.com/t/why-is-the-coverage-for-jplt-vocabulary-so-much-worse-than-for-jlpt-kanji/42680)). Genki Grow will hit the same problem with OpenJLPT, which writes 御飯 rather than ご飯 and おもしろい rather than 面白い. Its import step therefore needs an alternate-spelling column, and the vocab row format `[japanese, reading, meaning, ...alts]` already provides one.

By part of speech, the 674 OpenJLPT entries are **374 nouns (55%)**, 104 verbs (75 godan, 29 ichidan), 60 i-adjectives, 28 adverbs, 23 pronouns, 22 numerals and 19 na-adjectives. The remainder is expressions, interjections, pre-noun adjectivals (大きな, こんな), conjunctions and particles ([OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json)). The topics are survival vocabulary: numbers and dates, family (お父さん, 兄, 妹), food (御飯, 肉, 魚, 野菜), town places (駅, 銀行, 郵便局, 図書館), core verbs (行く, 来る, 食べる, 飲む, 分かる, ある/いる), adjectives (大きい, 新しい, 高い, 静か, 好き), adverbs (とても, もう, まだ, 時々), question words, positions (上, 下, 右, 左, 中) and greetings. Several entries are dated holdovers from the old Level 4 list: テープレコーダー, ラジカセ, レコード, マッチ, 万年筆, 字引. Some raw glosses are also wrong, for example せっけん glossed as "economy" and 厚い as "kind; deep". Check the glosses by hand before shipping them.

## Genki I's main lists teach only 58% of N5 vocabulary

No published study measures how much of the N5 vocabulary Genki covers. The figures below were computed for this research by matching the 674 OpenJLPT N5 entries against the lesson-tagged Genki dictionary in the MIT-licensed Genki Study Resources project ([jisho.js](https://github.com/sethclydesdale/genki-study-resources/blob/master/resources/javascript/jisho.js)). Treat them as accurate to within 2-3 percentage points.

| Scope | N5 words covered | Share |
|---|---|---|
| Genki I main lists (Greetings + L1-12) | 389 | 57.7% |
| + Genki I supplementary lists, workbook, numbers | 468 | 69.4% |
| + words that appear only inside Genki I phrases (シャワーを浴びる, 背が高い) | ~479 | ~71% |
| Taught only in Genki II (L13-23) | 110 | 16.3% |
| In neither book's vocab lists | ~85 | ~12.6% |

N5 vocabulary is concentrated in the early lessons. The main lists introduce, in order: Greetings 9, L1 28, L2 40, L3 43, L4 47, L5 45, L6 35, L7 28, L8 26, L9 31, L10 19, L11 15, L12 23 N5 words. The supplementary lists add the number kanji (L3), days of the month (L4), compass directions (L6), body parts (L7), colors (L9) and words such as 入口/出口 (L10). Common N5 words that Genki leaves until Genki II include 兄, 両親, 欲しい, 地図, 砂糖, 果物, 交番, 晴れる and 置く. The roughly 85 words in neither book fall into four groups: dated katakana objects (ラジカセ, フィルム), household and clothing nouns (本棚, 玄関, 靴下, 背広), physical adjectives (丸い, 太い, 細い, 厚い) and colloquial demonstratives (こっち, そっち, あっち). These make a natural "bonus N5" set for a Genki-based app. The figures carry one caveat about editions. The dictionary serves both the 2nd- and 3rd-edition pages of the site, and per-word changes between editions were not checked against the official 3rd-edition index.

## N5 kanji are a settled 80, and Genki I finishes them in Lesson 10

Unlike the vocabulary and grammar lists, the kanji lists nearly agree. Waller's data, Jisho and the kanji-data JSON all have **79**. JLPT Sensei and Kanshudo have **80**, the same 79 plus 分 ([Jisho](https://jisho.org/search/%23kanji%20%23jlpt-n5); [kanji-data](https://github.com/davidluzgouveia/kanji-data); [Kanshudo](https://www.kanshudo.com/collections/jlpt_kanji)). The "103" figure that also circulates comes from KANJIDIC2's `jlpt` field. That field still records the **pre-2010 four-level scale** ([EDRDG KANJIDIC](https://www.edrdg.org/wiki/KANJIDIC_Project.html)), so it includes 23 kanji that modern lists put at N4 or above: 口 手 目 立 少 古 多 足 会 社 言 空 安 店 魚 買 道 新 花 駅 週 飲, plus 耳 (N3). The 80-kanji set is the sensible choice for the app. It means handling one data quirk explicitly: kanji-data stores 分 with `jlpt_new: null`.

The 80 kanji fall into a few themes. **Numbers and money** (14): 一-十, 百, 千, 万, 円. **Time** (18): 日 月 火 水 木 金 土 年 時 分 午 半 今 毎 前 後 間 先. **People** (8): 人 男 女 子 父 母 友 名. **Directions** (10): 上 下 中 外 右 左 東 西 南 北. **Nature** (5): 山 川 天 雨 気. **Places and things** (7): 国 学 校 本 車 電 語. **Verbs** (12): 行 来 見 聞 食 読 書 話 休 出 入 生. **Descriptors** (6): 大 小 長 高 白 何. All 80 are grade 1-2 kyōiku kanji ([kanji-data](https://github.com/davidluzgouveia/kanji-data)).

Genki I's 145 Reading & Writing kanji include **all 80** ([Japan Times kanji PDF](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_kanji_E.pdf)), and the publisher states that Volume 1 targets "JLPT N5 or CEFR A1" ([Genki 3rd ed.](https://genki3.japantimes.co.jp/en/intro/)). The N5 kanji are concentrated in the early lessons:

| Lesson | Kanji | N5 | Beyond N5 |
|---|---|---|---|
| L3 | 15 | 15 | — |
| L4 | 14 | 13 | 曜 |
| L5 | 14 | 10 | 元 私 田 飲 |
| L6 | 15 | 14 | 口 |
| L7 | 14 | 9 | 京 会 社 文 帰 |
| L8 | 14 | 6 | 員 新 作 仕 事 言 思 次 |
| L9 | 15 | 11 | 家 少 古 知 |
| L10 | 14 | 2 (年, 長) | 11 N4 + 雪 |
| L11 | 16 | 0 | all N4/N3 |
| L12 | 14 | 0 | all N4/N3, plus 々 |

Of the 65 Genki I kanji beyond N5, 55 are N4, 9 are N3, and 々 has no level. In Genki Grow's kanji rows, KANJIDIC's reading lists are too long for beginners: 千 has the reading ち and 午 has うま. The readings field should show the readings used in N5 vocabulary, not the raw KANJIDIC string.

## Grammar lists range from 40 to 130 points, and Genki I covers almost all

Grammar lists vary the most, mainly because they split points at different granularity. The Tanos/Waller list on Wikibooks has **40 points**, "based on several years' old official test specifications" ([Wikibooks](https://en.wikibooks.org/wiki/JLPT_Guide/JLPT_N5_Grammar)). JLPT Sensei has **84** ([JLPT Sensei](https://jlptsensei.com/jlpt-n5-grammar-list/)). Bunpro has **about 132**, because it gives separate entries to items such as この/その/あの and to each adjective tense ([Bunpro](https://bunpro.jp/grammar_points)); this count was tallied by hand and is approximate. Combining the Sensei and Tanos lists with the conjugation that every list assumes gives about 95 items in these groups:

- **Particles:** は が を に へ で と や の も か から まで より だけ ね よ
- **Copula and existence:** です/だ, じゃない, でした, でしょう, ある/いる
- **Demonstratives and question words**
- **Verb forms:** ます forms, plain forms, て-form, ている, てある, たい, ましょう/ませんか, に行く, たことがある, たり〜たり, つもり, なる, すぎる
- **Requests and permissions:** てください, ないでください, てもいい, てはいけない, なければいけない, なくてもいい, ほうがいい
- **Adjective conjugation:** both い- and な-adjectives
- **Comparison:** より, のほうが, の中で〜いちばん
- **Connectives:** から, ので, が/けど, てから, まえに, とき, ないで
- **Explanation:** んです

Genki I's 3rd-edition syllabus places these points by lesson as follows ([Genki syllabus PDF](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_syllabus_E.pdf)):

- **L1:** XはYです, か, の
- **L2:** demonstratives, も, じゃない, ね/よ
- **L3:** ます-forms, the particles で/に/へ/を, ませんか
- **L4:** ある/いる, past tense, と
- **L5:** adjective conjugation, 好き/きらい, ましょう
- **L6:** て-form, てください, てもいい, てはいけない, から
- **L7:** ている, くて/で, stem+に行く
- **L8:** short forms, と思う, ないでください, のが好き, が, なにか/なにも
- **L9:** past short forms, relative clauses, もう/まだ
- **L10:** より/のほうが, いちばん, つもり, なる, で (means)
- **L11:** たい, たり, ことがある, や
- **L12:** んです, すぎる, ほうがいい, ので, なければいけない, でしょう

The Japanese labels in this outline were reconstructed from the PDF's English headings because the Japanese glyphs did not decode. They need checking against the book.

A WaniKani spreadsheet mapped the Tanos list to Genki and concluded that Genki I "cover[s] more than is needed for the N5 level" ([WaniKani](https://community.wanikani.com/t/spreadsheet-jlpt-n5-grammar-genki-mnn-work-in-progress/17453)). That claim is mostly but not completely true. Some N5 points from the Sensei list are not taught as grammar in Genki I: **てから, まえに, とき, ないで (without doing), なくてもいい, てある, がほしい, だけ/まで, and 方 (〜かた)**. Most of these appear in Genki II. Their exact Genki II lesson numbers came from memory and were not verified. Going the other way, Genki I teaches と思う, と言っていました, and adjective+の as a pronoun ("the cheap one"). Most lists rate these N4 or borderline. A Genki-aligned app can keep them but should tag them "Genki-only" if it reports N5 readiness.

The notes include about 45 original fill-in-the-blank items keyed to these lessons. They already match Genki Grow's grammar row format `[sentence with ＿＿, missingWord, translation, ...alts]`. Examples are 「わたし＿＿がくせいです。」→ は (L1), 「まどをあけ＿＿ください。」→ て (L6) and 「すしをたべた＿＿があります。」→ こと (L11). Some items accept more than one answer, such as に/へ and から/ので, and the alts field should list both. Particle answers should accept romaji variants (o/wo, wa, e). These items still need a native speaker's review.

## Open datasets are safe to bundle; Genki's lists and commercial sites are not

| Source | Licence | What it gives Genki Grow | Obligations |
|---|---|---|---|
| Tanos / Waller lists | CC BY ([repos citing it](https://github.com/Bluskyo/JLPT_Vocabulary)) | N5 membership | Credit Waller |
| JMdict / KANJIDIC2 | CC BY-SA 4.0 + EDRDG terms ([EDRDG](https://www.edrdg.org/edrdg/licence.html)) | Glosses, readings, kanji data | "About/Sources" screen; keep data reasonably current; derived data stays SA |
| Tatoeba | CC BY 2.0 FR ([terms](https://tatoeba.org/en/terms_of_use)) | Example sentences | Credit each sentence author |
| KanjiVG | CC BY-SA 3.0 ([KanjiVG](https://kanjivg.tagaini.net/)) | Stroke-order SVGs | Credit Ulrich Apel; SA |
| OpenJLPT 0.1.0 | CC BY-SA 4.0 ([PyPI](https://pypi.org/project/openjlpt/)) | Ready-made N5 vocab + kanji JSON/CSV/SQLite | Combined attribution (NOTICE.md) |
| kanji-data | MIT repo, KANJIDIC content under EDRDG ([GitHub](https://github.com/davidluzgouveia/kanji-data)) | `jlpt_new` levels + readings JSON | EDRDG terms on the data |
| jmdict-simplified | CC BY-SA 4.0 data ([GitHub](https://github.com/scriptin/jmdict-simplified)) | Weekly JMdict JSON | EDRDG terms |
| JLPT Sensei, Bunpro, Kanshudo | No open licence found | Reference only | Do not scrape or bundle |

The EDRDG licence has two requirements that are easy to miss. First, the acknowledgement must appear on a separate "About" or "Sources" screen, because "a mention on the startup page is not sufficient." Second, failing to keep the data reasonably up to date "is a violation of the licence" ([EDRDG Licence](https://www.edrdg.org/edrdg/licence.html)). EDRDG also states that software using the files need not be open source. Share-alike therefore applies to Genki Grow's derived data files, not to its Svelte code, provided the data stays in separate files with a NOTICE. Combining Waller levels (BY) with JMdict glosses (BY-SA) makes the result BY-SA as a whole, which is why OpenJLPT is licensed BY-SA. The notes disagree on one point: one notes file describes OpenJLPT as having no grammar, and another mentions grammar files. Either way, **no open, structured N5 grammar dataset was confirmed**. Grammar point names such as 〜てください are uncopyrightable facts, but Bunpro's and JLPT Sensei's explanations and sentences are protected expression ([Bunpro community](https://community.bunpro.jp/t/how-are-the-materials-on-bunpro-licensed/166870)). The grammar content must therefore be original writing or Tatoeba sentences. jlpt.jp's own permission covers only "personal use such as individual study" ([jlpt.jp policy](https://jlpt.jp/e/policy.html)), so the app should link to the official sample questions rather than bundle them.

Genki is the harder case. Under US compilation doctrine, individual words and their meanings are facts. What copyright protects is the creative "selection and arrangement" ([Feist v. Rural](https://en.wikipedia.org/wiki/Feist_Publications,_Inc._v._Rural_Telephone_Service_Co.)). A textbook's per-lesson word selection is arguably exactly that kind of selection, and the Japan Times sells it as the official GENKI Vocab app ([App Store](https://apps.apple.com/app/id1531679862)). Fan-made decks split by lesson are widespread ([genki.sixfalls.me](https://genki.sixfalls.me/help/anki-decks/)), and no takedowns of them were found. That shows the publisher tolerates them, not that they are legal. Genki Grow's lesson 0-12 grouping therefore carries the most licensing risk of anything in its content. The lowest-risk option is to fill each row from JMdict/KANJIDIC glosses and the app's own sentences, never from Genki's translations, notes or audio, and to hold the lesson mapping as a thin index. The kanji-per-lesson table is the same kind of selection. If the repo is public, keep that mapping out of it or behind a user import, and avoid any wording that implies Japan Times endorsement, since "Genki" is its trademark.

## Conclusion

On the three categories, the main finding is that **Genki I fully covers N5 kanji (all 80 by Lesson 10) and nearly all N5 grammar, but only 58-71% of N5 vocabulary.** A Genki-shaped app therefore under-trains vocabulary, which is the weakest of the three categories, even though vocabulary has its own timed test section. The highest-value addition to Genki Grow is a supplementary N5 track of about 200 words: the roughly 110 that Genki II teaches early, plus the roughly 85 that neither book teaches. The app should also add a short set of grammar supplements (てから, まえに, とき, ないで, なくてもいい, てある, がほしい) and "Genki-only" flags on と思う and と言っていました. Listening carries its own pass threshold and none of the content files train it, so the app's N5 readiness claims should acknowledge that gap.

For the data pipeline, the evidence points to one approach. Take N5 membership from OpenJLPT or Waller, take glosses and readings from a regularly refreshed jmdict-simplified/KANJIDIC2 pull (which also satisfies EDRDG's update clause), add KanjiVG for stroke order, and write grammar items in-house. Ship all of it as CC BY-SA data files with an About/Sources screen. Treat Genki lesson grouping as an organizing index rather than as copied content. Several points remain unverified: the Tanos licence text could not be checked at its now-unreachable source, the Genki II lesson placements of the gap grammar points came from memory, and the Japanese grammar labels reconstructed from the 3rd-edition syllabus need checking against a physical copy before they ship.
