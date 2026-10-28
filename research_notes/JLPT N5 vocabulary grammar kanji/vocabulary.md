# JLPT N5 Vocabulary (lists, organization, sample, Genki I alignment)

Method note: tanos.co.uk could not be reached from this environment (DNS failure on www.tanos.co.uk), so the Tanos/Waller list was examined through OpenJLPT, which keeps a verbatim snapshot of it. The Genki coverage figures below are **original computations made for these notes**. They match OpenJLPT's Waller-derived N5 list (674 entries) against the lesson-tagged Genki dictionary in the MIT-licensed "Genki Study Resources" project (`resources/javascript/jisho.js`, 2,676 entries). No published analysis that measures Genki I vs N5 *vocabulary* coverage was found. The working files are in the session scratchpad and are not part of the deliverable.

## What are the main N5 vocab lists, how big are they, and where do they come from?

### Takeaway
No official N5 word list exists. Almost every widely used list comes from Jonathan Waller's tanos.co.uk list, which is itself a reconstruction based on the pre-2010 Level 4 material. These lists hold about 640-680 words, well below the roughly 800 words usually quoted as the N5 target.

### Cited Findings
- The JLPT organisation does **not** publish official N5-N1 vocabulary, kanji or grammar lists. Waller's lists are "community-standard... unofficial approximations of the real (undisclosed) test content." — [OpenJLPT NOTICE.md](https://github.com/evanclan/OpenJLPT/blob/HEAD/NOTICE.md)
- KANJIDIC2's `jlpt` field still uses the **pre-2010 four-level system (1-4)**. OpenJLPT deliberately does not use it for level assignment and uses Waller's N-levels instead. — [OpenJLPT NOTICE.md](https://github.com/evanclan/OpenJLPT/blob/HEAD/NOTICE.md)
- **Tanos / Jonathan Waller (tanos.co.uk/jlpt):** OpenJLPT's verbatim snapshot `sources/waller/vocab-eng-n5.json` has **662** entries in front/back flashcard format, e.g. `{"front":"どうぞ","back":"please"}`. The license is given as **CC BY**. — [OpenJLPT repo](https://github.com/evanclan/OpenJLPT); [OpenJLPT on PyPI](https://pypi.org/project/openjlpt/) (states 662 N5 vocab entries and Waller as the level source)
- **OpenJLPT's cleaned N5 file** (`data/json/vocab/n5.json`, `data/csv/vocab-n5.csv`) has **674** entries. Each carries word, reading, romaji, meanings, JMdict POS tags, jmdict_id, other_forms, and Tatoeba examples. This is 12 more than the raw Waller snapshot, which presumably reflects entries split or repaired against JMdict (the inference comes from its "corrections" process, not from a stated reason). The dataset is CC BY-SA 4.0. — [OpenJLPT NOTICE.md](https://github.com/evanclan/OpenJLPT/blob/HEAD/NOTICE.md); [PyPI](https://pypi.org/project/openjlpt/)
- **JLPT Sensei:** "JLPT N5 vocab List total: (644)" over 7 pages. The site says learners need "about 800 words" to pass, gives no source for the list beyond "prior test data and comparisons with other available lists", and says it is not affiliated with the JLPT. — [JLPT Sensei N5 vocab list](https://jlptsensei.com/jlpt-n5-vocabulary-list/)
- On the size of the list, JLPT Sensei's 644 against the "about 800 words" benchmark shows that published lists fall short of the commonly quoted target. — [JLPT Sensei](https://jlptsensei.com/jlpt-n5-vocabulary-list/)
- Other GitHub derivatives of Tanos: **Bluskyo/JLPT_Vocabulary** has JSON and CSV "converted from tanos.co.uk", keyed word → reading/level. **AnchorI/jlpt-kanji-dictionary** has a `dictionary.json` covering N5-N1. **featurequest/practice-japanese** has a `vocab.json` with 7,500+ N5-N1 words. — [Bluskyo/JLPT_Vocabulary](https://github.com/Bluskyo/JLPT_Vocabulary); [AnchorI/jlpt-kanji-dictionary](https://github.com/AnchorI/jlpt-kanji-dictionary); [practice-japanese (ecosyste.ms)](https://awesome.ecosyste.ms/projects/github.com%2Ffeaturequest%2Fpractice-japanese)
- Lists differ in spelling choices, which affects matching: some write words in kana that others give in kanji (いちばん, ある), and some use different okurigana (入口 vs 入り口). One WaniKani user found that coverage of the same N5 list changed from 38.28% to 51.20% depending on whether kana-only words were counted. — [WaniKani community thread](https://community.wanikani.com/t/why-is-the-coverage-for-jplt-vocabulary-so-much-worse-than-for-jlpt-kanji/42680)
- Older pages give a rough N5 benchmark of about 100 kanji and 800 words. This was reported in a search summary, not confirmed on jlpt.jp itself. — search summary of [WaniKani/Bunpro discussion results](https://community.bunpro.jp/t/genki-comparison/21760)

### Inferences
- Waller's list is the root list. OpenJLPT, Bluskyo and many Anki decks use it directly, and JLPT Sensei's 644-word list is close in size and is probably built on similar sources. For an app, "N5 vocab" can reasonably mean the Waller list of about 662-674 entries.
- The gap between about 650 listed words and the 800-word benchmark goes back to the old Level 4 specification. Lists probably also leave out whole classes such as counters and number compounds (see the next section), which pushes the count down.
- In the OpenJLPT data, some words have a dated "Showa-era" flavor that suggests they come from the old Level 4 list: テープレコーダー, ラジカセ, レコード, フィルム, マッチ, 灰皿, 万年筆, 字引, 背広, ワイシャツ. This is consistent with lists inherited from before 2010. (This is an inference from the word content. No source documents it.)

### Gaps
- tanos.co.uk was unreachable, so Waller's own page (its word count and its download formats, which in the past included CSV, Anki and PDF) could not be checked directly.
- Jisho's `#jlpt-n5` tag count, Kanshudo's N5 list size, and the sizes of Bunpro's and the popular Anki N5 decks were not checked in this session. Jisho's JLPT tags are generally understood to come from Waller's lists, but that was not confirmed here.
- No primary jlpt.jp page was fetched to confirm the old Level 4 figures (about 800 words, about 100 kanji).
- No word-by-word diff between Tanos and JLPT Sensei was done, so the overlap between them is unknown.

## How are N5 words organized (parts of speech and topic categories)?

### Takeaway
About 55% of N5 entries are nouns. The rest are verbs (about 15%), i-adjectives (about 9%), adverbs, pronouns/demonstratives, numbers, na-adjectives, set expressions and a few particles and conjunctions. By topic, the list covers everyday survival themes: numbers and time, family, food, places, the home, clothing, weather, basic actions and descriptors.

### Cited Findings
- JLPT Sensei sorts its list alphabetically by romaji, labels each word with a type (Noun, Godan/Ichidan verb with transitivity, い-adj, な-adj, Pronoun, Adverb, Pre-noun adjectival, Katakana, Suru verb, Temporal noun), and offers sub-lists by part of speech: nouns, verbs, adverbs, い- and な-adjectives, pre-noun adjectivals, particles and katakana words. — [JLPT Sensei](https://jlptsensei.com/jlpt-n5-vocabulary-list/)
- Part-of-speech distribution of the 674 OpenJLPT N5 entries, by first JMdict POS tag (computed from [OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json)):
  - noun (n) 374
  - i-adjective 59 (+1 adj-ix, いい)
  - godan verbs 75 (v5r 27, v5k 14, v5u 9, v5s 9, v5m 5, v5b 4, v5t 3, v5g 2, v5r-i 1, v5k-s 1)
  - ichidan verbs (v1) 29
  - adverb 28
  - pronoun 23
  - numeral 22
  - na-adjective 19
  - expressions 13
  - interjections 11
  - pre-noun adjectivals (adj-pn) 7, e.g. 大きな, 小さな, こんな
  - conjunctions 4
  - particles 2
  - aux-verb 1, adj-f 1 (同じ)
- Notable absences in the Waller/OpenJLPT N5 data: there are **no counter suffixes** (no ～枚, ～冊, ～匹, ～台, ～回, ～個, ～杯, 円 as an entry). 父/母 appear only as お父さん/お母さん, ご飯 is spelled 御飯, and 面白い is written おもしろい. Native counters 一つ...十 (ひとつ...とお) and 一人/二人 are included, as are dates such as 二日, 三日 and 二十日. — computed from [OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json)

### Inferences
- Topic categories you can build from the data (the list has no topic tags, so these are my grouping):
  - numbers: 一-十, 百, 千, 万, ゼロ/零
  - native counters: ひとつ-とお, ひとり/ふたり, はたち
  - calendar and time: days of the month, weekdays, 今日, 明日, 昨日, 毎朝, 先週, 来年, 午前, 午後, 半, 時間
  - family: お父さん, お母さん, 兄, 姉, 弟, 妹, 兄弟, 両親, 伯母さん, 奥さん
  - people and roles: 先生, 学生, 生徒, 警官, おまわりさん, 大人
  - food and drink: 御飯, 肉, 魚, 卵, 野菜, 果物, 紅茶, 砂糖, 塩, しょうゆ, バター, カレー
  - tableware: 皿, ちゃわん, コップ, カップ, ナイフ, フォーク, スプーン
  - places and town: 駅, 銀行, 郵便局, 病院, 図書館, 交番, 交差点, 八百屋, 映画館, 大使館, 村, 道, 門
  - home: 部屋, 台所, 玄関, 廊下, 庭, 本棚, ベッド, テーブル, 冷蔵庫, 階段
  - clothing: 洋服, 上着, セーター, ズボン, スカート, 靴下, ネクタイ, 背広, ワイシャツ, コート, ポケット, ボタン
  - body: 頭, 手, 耳, 鼻, 体, 背
  - weather and nature: 雨, 天気, 曇る, 晴れる, 降る, 吹く, 空, 木, 鳥, 動物
  - colors: 赤, 青, 白, 黒, 黄色, 茶色, 緑
  - stationery and media: 本, 紙, 封筒, ボールペン, 万年筆, 新聞, 雑誌, テレビ, ラジオ, 写真
  - directions and positions: 上, 下, 前, 後ろ, 右, 左, 中, 外, 横, 東, 西, 南, 北
  - verbs, i-adjectives, na-adjectives, adverbs
  - question words: 何, 誰, どなた, どこ, いつ, どれ, どう, どうして, なぜ, いくら, いくつ
  - demonstratives: こ/そ/あ/ど series, plus こちら, そっち and the rest
  - greetings and set expressions
- For a game or app that needs counters, the Waller list will have to be supplemented, for example from the textbook. Genki has a counters lesson in Genki II (L14), and Genki I's numbers and time material covers 円, ～時 and ～分. That textbook mapping comes from my knowledge of the book and is not sourced here.

### Gaps
- None of the lists checked has official or community topic tags. JLPT Sensei provides POS sub-lists only.

## Representative sample of N5 words

### Takeaway
Below are 100 N5 entries from the Waller-derived OpenJLPT N5 list across all major categories, given as [japanese, reading, meaning]. The bracket notes where each first appears in Genki (G = Greetings/intro; Ln = lesson main vocab; "Ln suppl." = Genki I supplementary vocab such as useful expressions or the reading-writing kanji tables; "GII Ln" = only in Genki II; "—" = in neither).

### Cited Findings
Every word below was checked against [OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json) (Waller levels). Genki lesson tags come from [Genki Study Resources jisho.js](https://github.com/sethclydesdale/genki-study-resources/blob/master/resources/javascript/jisho.js). Meanings are condensed from the list's glosses.

**Numbers / counting**
- [一, いち, one] (L3 suppl.; also in the Numbers intro)
- [十, じゅう, ten] (L9)
- [百, ひゃく, hundred] (L3 suppl.)
- [千, せん, thousand] (L3 suppl.)
- [万, まん, ten thousand] (numbers)
- [一つ, ひとつ, one (thing)] (L9)
- [二つ, ふたつ, two (things)] (L9)
- [一人, ひとり, one person] (L7)
- [二人, ふたり, two people] (L7)
- [二十歳, はたち, 20 years old] (L1 suppl.)

**Time / days / months**
- [今日, きょう, today] (L3)
- [明日, あした, tomorrow] (L3)
- [昨日, きのう, yesterday] (L4)
- [今朝, けさ, this morning] (L8)
- [毎日, まいにち, every day] (L3)
- [月曜日, げつようび, Monday] (L4)
- [日曜日, にちようび, Sunday] (L3)
- [来年, らいねん, next year] (L6)
- [去年, きょねん, last year] (L9)
- [時間, じかん, time; hours] (L4)
- [午前, ごぜん, a.m.] (L1)
- [午後, ごご, p.m.] (L1)
- [半, はん, half] (L1)
- [二日, ふつか, 2nd of the month] (L4 suppl.)
- [夕方, ゆうがた, evening] (GII L18)

**Family / people**
- [お父さん, おとうさん, father] (L1)
- [お母さん, おかあさん, mother] (L1)
- [兄, あに, (my) older brother] (GII L14)
- [姉, あね, (my) older sister] (L7)
- [弟, おとうと, younger brother] (L1)
- [妹, いもうと, younger sister] (L1)
- [家族, かぞく, family] (L7)
- [子供, こども, child] (L4)
- [友達, ともだち, friend] (L1)
- [先生, せんせい, teacher] (L1)
- [学生, がくせい, student] (L1)
- [両親, りょうしん, parents] (GII L14)

**Food / drink**
- [御飯, ごはん, rice; meal] (L3)
- [水, みず, water] (L3)
- [お茶, おちゃ, green tea] (L3)
- [肉, にく, meat] (L2)
- [魚, さかな, fish] (L2)
- [野菜, やさい, vegetable] (L2)
- [卵, たまご, egg] (L8 suppl.)
- [果物, くだもの, fruit] (GII L23)
- [砂糖, さとう, sugar] (GII L16)
- [塩, しお, salt] (—)

**Places**
- [学校, がっこう, school] (L3)
- [駅, えき, station] (L10)
- [病院, びょういん, hospital] (L4)
- [銀行, ぎんこう, bank] (L2)
- [郵便局, ゆうびんきょく, post office] (L2)
- [図書館, としょかん, library] (L2)
- [大学, だいがく, university] (L1)
- [会社, かいしゃ, company] (L7)
- [部屋, へや, room] (L5)
- [トイレ, トイレ, toilet] (L2)
- [交番, こうばん, police box] (GII L22)
- [交差点, こうさてん, intersection] (—)

**Verbs**
- [行く, いく, to go] (L3)
- [来る, くる, to come] (L3)
- [帰る, かえる, to return] (L3)
- [食べる, たべる, to eat] (L3)
- [飲む, のむ, to drink] (L3)
- [見る, みる, to see] (L3)
- [聞く, きく, to listen; to ask] (L3)
- [話す, はなす, to speak] (L3)
- [読む, よむ, to read] (L3)
- [書く, かく, to write] (L4)
- [買う, かう, to buy] (L4)
- [待つ, まつ, to wait] (L4)
- [分かる, わかる, to understand] (L4)
- [ある, ある, to exist (things)] (L4)
- [いる, いる, to exist (people/animals)] (L4)
- [起きる, おきる, to get up] (L3)
- [寝る, ねる, to sleep] (L3)
- [並ぶ, ならぶ, to line up] (—)

**i-adjectives**
- [大きい, おおきい, big] (L5)
- [小さい, ちいさい, small] (L5)
- [新しい, あたらしい, new] (L5)
- [古い, ふるい, old (things)] (L5)
- [高い, たかい, tall; expensive] (L2)
- [安い, やすい, cheap] (L5)
- [暑い, あつい, hot (weather)] (L5)
- [寒い, さむい, cold (weather)] (L5)
- [おもしろい, おもしろい, interesting] (L5)
- [欲しい, ほしい, want] (GII L14)
- [丸い, まるい, round] (—)

**na-adjectives**
- [好き, すき, liked] (L5)
- [嫌い, きらい, disliked] (L5)
- [静か, しずか, quiet] (L5)
- [元気, げんき, healthy; energetic] (L5)
- [有名, ゆうめい, famous] (L8)
- [便利, べんり, convenient] (L7)
- [上手, じょうず, skillful] (L8)
- [下手, へた, unskillful] (L8)
- [りっぱ, りっぱ, splendid] (—)

**Adverbs**
- [とても, とても, very] (L5)
- [よく, よく, often; well] (L3)
- [もう, もう, already] (L9)
- [まだ, まだ, not yet; still] (L8)
- [ちょっと, ちょっと, a little] (L3)
- [時々, ときどき, sometimes] (L3)
- [いつも, いつも, always] (L8)
- [だんだん, だんだん, gradually] (—)

**Question words**
- [何, なに/なん, what] (L1)
- [誰, だれ, who] (L2)
- [どこ, どこ, where] (L2)
- [いつ, いつ, when] (L3)
- [どれ, どれ, which one] (L2)
- [どうして, どうして, why] (L4)
- [いくら, いくら, how much] (L2)
- [いくつ, いくつ, how many; how old] (—)

**Positions**
- [右, みぎ, right] (L4)
- [左, ひだり, left] (L4)
- [上, うえ, on; above] (L4)
- [下, した, under] (L4)
- [前, まえ, front] (L4)
- [後ろ, うしろ, back] (L4)
- [中, なか, inside] (L4)

**Things**
- [本, ほん, book] (L2)
- [電話, でんわ, telephone] (L1)
- [写真, しゃしん, photo] (L4)
- [新聞, しんぶん, newspaper] (L2)
- [ネクタイ, ネクタイ, necktie] (GII L14)
- [ズボン, ズボン, trousers] (—)
- [ボールペン, ボールペン, ballpoint pen] (—)

**Greetings / expressions**
- [こんにちは, こんにちは, hello] (G)
- [ありがとう, ありがとう, thank you] (G)
- [すみません, すみません, excuse me; sorry] (G)
- [さようなら, さようなら, goodbye] (G)
- [いただきます, いただきます, said before eating] (G)

### Inferences
- About 60% of a "core" N5 sample appears in Genki I's main lesson lists, mostly in L1-L5, which matches the overall computation below.

### Gaps
- The glosses are Waller's and JMdict's. A few are poor out of context (e.g. せっけん glossed "economy" instead of "soap", 厚い glossed "kind; deep" instead of "thick"), so the raw glosses need cleanup before use in an app. — observed in [OpenJLPT n5.json](https://github.com/evanclan/OpenJLPT/blob/HEAD/data/json/vocab/n5.json)

## How does Genki I vocabulary map onto N5? What share is covered, and which N5 words are missing?

### Takeaway
No published vocabulary-level mapping was found. The common claim that "Genki I covers N5" is anecdotal and mostly about grammar. My own computation against the 674-entry Waller N5 list:
- Genki I's **main vocab lists** (Greetings + L1-12) cover **about 58%** (389 words).
- Adding Genki I's supplementary vocabulary (useful expressions, reading-writing kanji tables, workbook) and the numbers raises this to **about 69-71%**.
- Genki II covers another **about 16%** (110 words), for about 87% combined.
- About **85 N5 words (about 12-13%)** appear in neither book's vocab lists.

### Cited Findings
- **Anecdotal claims:** a forum commenter says Genki I is "99% of N5" (unsourced), and one grammar comparison found nearly all N5 grammar is in the first book of Genki and of Minna no Nihongo. Neither measures vocabulary. — [Bunpro community "Genki comparison"](https://community.bunpro.jp/t/genki-comparison/21760); [WaniKani N5 grammar / Genki / MNN spreadsheet](https://community.wanikani.com/t/spreadsheet-jlpt-n5-grammar-genki-mnn-work-in-progress/17453)
- **Genki-side data source:** Genki Study Resources (sethclydesdale, MIT license) ships `jisho.js`, "Dictionary for Genki Volumes I & II". Each entry is tagged with its lesson: `会G` = Greetings, `会Ln` = lesson n main vocab, `会Ln(e)` = useful expressions / supplementary, `会Ln(c)` = culture notes, `読Ln-...` = reading-and-writing section and kanji-table words, `ワークブック...` = workbook. Definitions not in Genki are supplemented from jisho.org. — [genki-study-resources jisho.js](https://github.com/sethclydesdale/genki-study-resources/blob/master/resources/javascript/jisho.js); [3rd-ed exercise site](https://genki.sixfalls.me/lessons-3rd/)
- The official GENKI Vocab app for the 3rd edition covers "more than 1,200 words" across Genki I and II, sortable by lesson. — [App Store listing](https://apps.apple.com/app/id1531679862)
- **Computed results** (674 OpenJLPT N5 entries vs jisho.js; a match is the same word, or the same reading when one side is kana-only or the kanji overlap; ～, (な), (に) and する suffixes and the お/ご prefix are normalized):
  - **Core Genki I** (会G + 会L1-12 main lists): **389 / 674 = 57.7%**. New N5 words per lesson: G 9, L1 28, L2 40, L3 43, L4 47, L5 45, L6 35, L7 28, L8 26, L9 31, L10 19, L11 15, L12 23. The early lessons carry the most N5 vocabulary.
  - **Genki I supplementary only** (useful expressions, the L3 number kanji table, days of the month in L4 (e), kanji-table words, workbook): **76 words** (11.3%). Examples: 一-千 (L3 kanji table), 二日/三日/…/二十日, おととい, おととし, さらいねん (L4 (e)), 東/西/南/北, まっすぐ, 角, 渡る, 曲る (L6 (e), directions), 頭/手/耳/鼻 (L7 (e), body), 卵, 鶏肉 (L8), 白/緑/黄色い/いろいろ (L9 (e) colors), 入口/出口/階段/自動車 (L10), 男/女/台所/明るい (L11), 大人/牛肉/赤/青/など/向こう (L12).
  - **Numbers:** 3 more (ゼロ, 零, 万). Their place in Genki's Numbers intro was not verified per word.
  - Core + supplementary + numbers = **468 / 674 = 69.4%**.
  - **Present only inside a Genki I phrase or compound** (about 11, checked by hand): あびる (シャワーを浴びる L6), たばこ/吸う (たばこを吸う L6), 結構 (結構です L6), ほんとう (本当ですか L6), 背/低い (背が高い/低い L7), 晩 (今晩, 晩ご飯 L3), 黒 (黒い L9), 初め (初めて L12, はじめまして G), ごちそうさま (ごちそうさま(でした) G). Adding these gives about **71%**.
  - **Only in Genki II (L13-23):** **110 words (16.3%)**. Examples: 体, 動物, 同じ, 着く, 貸す, 辛い, 近い, 鳥 (L13); 兄, 両親, 奥さん, 欲しい, できる, ネクタイ, ラジオ, ちょうど (L14); 地図, 庭, 建物, 映画館, 外国人, 生まれる, 走る, 広い (L15); 入れる, 出す, 困る, 違う, 開く, 飛ぶ, 空, 道, 砂糖 (L16); かぎ, 紙, 強い, 危ない, 少ない, 脱ぐ (L17); 冷蔵庫, 洋服, 押す, 消える, 閉まる, 頼む, 暗い (L18); なぜ, 呼ぶ, 晴れる, 毎朝 (L19); 重い, 軽い, 渡す, 止まる (L20); 置く, 降る, 遠い, 大切 (L21); 木, 交番, うるさい (L22); 果物, 横, 靴下, まずい, 嫌 (L23).
  - **In neither Genki I nor Genki II vocab lists (about 85):**
    - katakana loanwords: カップ, コップ, カレンダー, グラム, メートル, コート, ズボン, スリッパ, ワイシャツ, ハンカチ, ボタン, ストーブ, テーブル, ベッド, テープ, テープレコーダー, ラジカセ, レコード, フィルム, マッチ, ナイフ, フォーク, バター, ボールペン, ポスト, コピーする
    - kanji/kana nouns: 万年筆, 字引, 本棚, 花瓶, 封筒, 箱, 上着, 背広, 玄関, 廊下, 門, 村, 八百屋, 交差点, 警官, おまわりさん, 生徒, 家庭, 大勢, 文章, 方(かた), 辺, 塩, 飴, 夕飯, 昨夜(ゆうべ), ちゃわん, せっけん, 茶色, 黄色 (noun forms)
    - adjectives: 丸い, 太い, 細い, 薄い, 厚い, ぬるい, 丈夫, りっぱ, 大きな, 小さな
    - verbs: 並ぶ, 並べる, 曇る, 差す, 引く, 吹く, 鳴く, 締める
    - function and question words: あっち, こっち, そっち, そちら, どなた, いくつ, だんだん, より, では, どう (standalone), どうぞよろしく (only as part of よろしくお願いします in G)

### Inferences
- Genki I by itself does **not** cover all of N5 vocabulary. It covers about 58% through its main lesson lists and about 70% with its supplementary material. Learners who finish Genki I would still need about 200 N5 words, roughly half of them taught in Genki II and about 85 taught in neither book.
- The words missing from both books are mainly (a) dated old-Level-4 items (tape recorders, film, matches, fountain pens), (b) household, clothing and tableware nouns, (c) physical-description adjectives (thick/thin/round/fat), and (d) colloquial demonstratives (こっち/そっち/あっち). These would make good "bonus" N5 content for an app built around Genki.
- Grammar-only items such as より (comparison, taught as a grammar pattern in Genki I L10, from my knowledge of the textbook rather than a source fetched here) are often taught in grammar sections rather than vocab lists, so vocabulary-list matching slightly undercounts real exposure. The same applies to こそあど words, which Genki teaches as a grammar paradigm (これ/それ/あれ L2, こちら L11).
- **Edition caveat:** jisho.js is one dictionary for Genki I & II, used by both the 2nd- and 3rd-edition sections of the site. The 3rd edition (2020) moved some vocabulary between lessons and added the separate 会L(e) supplementary lists. Lesson numbers here should match the 3rd edition the site targets, but per-word edition differences were not checked.

### Gaps
- Not checked against the official Genki 3rd-edition vocabulary index (genki3.japantimes.co.jp), so lesson tags rely on the fan-made dictionary.
- The automated matching can mis-assign homophones (厚い vs 熱い, 吹く vs 服, 飴 vs 雨 were excluded by hand), and kanji spelling variants may cause a few false misses. Treat the percentages as ±2-3 points.
- No coverage computed against JLPT Sensei's 644 list or a Jisho tag export.
- Whether numbers like 万 and ゼロ appear in the 3rd-edition Numbers intro table was not confirmed per word.

## Are downloadable N5 list files available?

### Takeaway
Yes. The best machine-readable option is OpenJLPT, with JSON, CSV and SQLite files under CC BY-SA 4.0 derived from Waller's CC BY list. Simpler Tanos conversions also exist on GitHub. Genki lesson-tagged vocab is available in the MIT-licensed genki-study-resources `jisho.js`.

### Cited Findings
- OpenJLPT: `data/json/vocab/n5.json`, `data/csv/vocab-n5.csv` (columns: id, word, reading, romaji, meanings, level, pos, jmdict_id, other_forms, example_ja, example_en), a prebuilt `openjlpt.sqlite`, and also N5 kanji and grammar files. Raw Waller snapshots are in `sources/waller/vocab-eng-n5.json` and `vocab-hira-n5.json`. The data is rebuilt monthly from upstream. License: CC BY-SA 4.0 (Waller CC BY; JMdict/KANJIDIC2 CC BY-SA 4.0; Tatoeba CC BY 2.0 FR). — [OpenJLPT GitHub](https://github.com/evanclan/OpenJLPT); [PyPI](https://pypi.org/project/openjlpt/); [NOTICE.md](https://github.com/evanclan/OpenJLPT/blob/HEAD/NOTICE.md)
- Bluskyo/JLPT_Vocabulary: JSON and CSV converted from tanos.co.uk (license not checked). — [GitHub](https://github.com/Bluskyo/JLPT_Vocabulary)
- AnchorI/jlpt-kanji-dictionary: `dictionary.json` covering N5-N1 with kanji and hiragana. — [GitHub](https://github.com/AnchorI/jlpt-kanji-dictionary)
- JLPT Sensei: PDFs, ebooks and flashcards for Patreon members only. No open data file. — [JLPT Sensei](https://jlptsensei.com/jlpt-n5-vocabulary-list/)
- Genki vocab with lesson tags: `resources/javascript/jisho.js` in genki-study-resources (MIT license per the GitHub API), covering Genki I and II. — [GitHub](https://github.com/sethclydesdale/genki-study-resources)

### Inferences
- For genki-grow, combining the OpenJLPT N5 CSV/JSON with jisho.js lesson tags reproduces the mapping above. Licensing of the Genki textbook content itself is a separate question, which another researcher covers.

### Gaps
- Waller's own downloads (CSV, Anki) and the Bunpro and Anki shared-deck downloads were not verified in this session.
