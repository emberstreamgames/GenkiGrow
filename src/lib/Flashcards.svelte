<script lang="ts">
  import { DECK_LABEL, ITEMS, type Deck, type Item } from '../data/items'
  import { app, level, poolFor, record, save } from './store.svelte'
  import * as sfx from './sfx'

  let { deck }: { deck: Deck } = $props()

  type Kind = 'flip' | 'choice' | 'type'

  const pool = $derived(poolFor(deck))

  let current = $state<Item | null>(null)
  let kind = $state<Kind>('flip')
  let options = $state<string[]>([])
  let flipped = $state(false)
  let typed = $state('')
  let result = $state<null | 'right' | 'wrong'>(null)
  let picked = $state('')
  let combo = $state(0)
  let session = $state({ right: 0, wrong: 0 })
  let burst = $state<{ id: number; parts: { dx: number; dy: number; hue: number }[] } | null>(null)
  let gain = $state<{ id: number; amount: number } | null>(null)
  let shake = $state(0)
  let lastId = ''
  let n = 0

  // Items that are new or often missed come up more often.
  function weight(it: Item) {
    const s = app.stats[it.id]
    if (!s || s.c + s.w === 0) return 3
    const missRate = (s.w + 0.5) / (s.c + s.w + 1)
    return 1 + missRate * 4 + (s.streak === 0 ? 1 : 0)
  }

  function next() {
    const items = pool.length > 1 ? pool.filter((i) => i.id !== lastId) : pool
    if (!items.length) {
      current = null
      return
    }
    const total = items.reduce((a, i) => a + weight(i), 0)
    let r = Math.random() * total
    let pick = items[items.length - 1]
    for (const it of items) {
      r -= weight(it)
      if (r <= 0) {
        pick = it
        break
      }
    }
    current = pick
    lastId = pick.id
    flipped = false
    typed = ''
    result = null
    picked = ''
    const kinds: Kind[] = app.mode === 'mix' ? ['flip', 'choice', 'type'] : [app.mode]
    kind = kinds[Math.floor(Math.random() * kinds.length)]
    if (kind === 'choice') makeOptions(pick)
  }

  function makeOptions(it: Item) {
    const others = [...new Set(ITEMS.filter((i) => i.type === deck && i.back !== it.back).map((i) => i.back))]
    // prefer distractors from the enabled pool so choices stay in scope
    const inScope = [...new Set(pool.filter((i) => i.back !== it.back).map((i) => i.back))]
    const source = inScope.length >= 3 ? inScope : others
    const picks = source.sort(() => Math.random() - 0.5).slice(0, 3)
    options = [...picks, it.back].sort(() => Math.random() - 0.5)
  }

  function answer(ok: boolean) {
    if (!current || result) return
    result = ok ? 'right' : 'wrong'
    const prevLevel = level()
    record(current.id, ok)
    if (ok) {
      combo++
      session.right++
      if (combo > app.best) app.best = combo
      const amount = 10 + Math.min(combo, 10) * 2
      app.xp += amount
      gain = { id: ++n, amount }
      burst = {
        id: ++n,
        parts: Array.from({ length: 14 }, (_, i) => {
          const a = (i / 14) * Math.PI * 2 + Math.random() * 0.4
          const d = 70 + Math.random() * 70
          return { dx: Math.cos(a) * d, dy: Math.sin(a) * d, hue: (200 + i * 25 + combo * 12) % 360 }
        }),
      }
      if (level() > prevLevel) sfx.levelUp()
      else if (!app.muted) sfx.good(combo)
    } else {
      combo = 0
      session.wrong++
      shake = ++n
      if (!app.muted) sfx.bad()
    }
    save()
  }

  function submitTyped(e: Event) {
    e.preventDefault()
    if (!current || result) return
    const t = typed.trim().toLowerCase()
    if (!t) return
    answer(current.answers.includes(t))
  }

  function choose(o: string) {
    if (!current || result) return
    picked = o
    answer(o === current.back)
  }

  function reveal() {
    if (kind === 'flip' && !result) flipped = true
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Enter' && result) {
      e.preventDefault()
      next()
    }
  }

  // (Re)start whenever the deck or the enabled chapters change the pool.
  $effect(() => {
    void pool.length
    void deck
    if (!current || !pool.some((i) => i.id === current!.id)) next()
  })

  const pct = $derived(app.xp % 100)
</script>

<svelte:window onkeydown={onKey} />

<section class="deck">
  <div class="hud">
    <div class="lvl">Lv {level()}</div>
    <div class="xpbar" aria-label="XP progress"><div style="width:{pct}%"></div></div>
    <div class="combo" class:hot={combo >= 3}>
      {#if combo >= 2}🔥 {combo}{:else}combo {combo}{/if}
    </div>
  </div>

  {#if !current}
    <div class="empty">
      <h2>No {DECK_LABEL[deck]} in your pool</h2>
      <p>
        {#if deck === 'kanji' || deck === 'vocab'}
          {DECK_LABEL[deck]} content isn't loaded yet. It's coming once the textbook pages are added.
        {:else}
          Turn on a chapter above to add its {DECK_LABEL[deck]} to your pool.
        {/if}
      </p>
    </div>
  {:else}
    {#key current.id}
      <div class="stage">
        {#key shake}
          <div class="card" class:shake={result === 'wrong'} class:right={result === 'right'}>
            <div class="tagline">{DECK_LABEL[deck]} · {current.tag}</div>
            <div class="big" lang="ja">{current.front}</div>

            {#if kind === 'flip'}
              {#if !flipped && !result}
                <button class="primary" onclick={reveal}>Show answer</button>
              {:else}
                <div class="answer">{current.back}</div>
              {/if}
            {:else if kind === 'type'}
              {#if !result}
                <form onsubmit={submitTyped}>
                  <!-- svelte-ignore a11y_autofocus -->
                  <input bind:value={typed} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="type the romaji" autofocus />
                  <button class="primary" type="submit">Check</button>
                </form>
              {:else}
                <div class="answer">{current.back}</div>
              {/if}
            {:else}
              <div class="choices">
                {#each options as o (o)}
                  <button
                    class="choice"
                    class:ok={result && o === current.back}
                    class:no={result && o === picked && o !== current.back}
                    disabled={!!result}
                    onclick={() => choose(o)}>{o}</button
                  >
                {/each}
              </div>
            {/if}
          </div>
        {/key}

        {#if burst}
          {#key burst.id}
            <div class="burst" aria-hidden="true">
              {#each burst.parts as p}
                <i style="--dx:{p.dx}px;--dy:{p.dy}px;--h:{p.hue}"></i>
              {/each}
            </div>
          {/key}
        {/if}
        {#if gain && result === 'right'}
          {#key gain.id}<div class="gain" aria-hidden="true">+{gain.amount} XP</div>{/key}
        {/if}
      </div>

      {#if kind === 'flip' && flipped && !result}
        <div class="row">
          <button class="miss" onclick={() => answer(false)}>✗ Missed it</button>
          <button class="hit" onclick={() => answer(true)}>✓ Got it</button>
        </div>
      {/if}

      {#if result}
        <div class="row">
          <div class="verdict {result}">{result === 'right' ? 'Correct!' : 'Not quite'}</div>
          <button class="primary" onclick={next}>Next ▶</button>
        </div>
      {/if}
    {/key}
  {/if}

  <div class="foot">
    <span>{pool.length} cards in pool</span>
    <span>Session: {session.right} ✓ / {session.wrong} ✗</span>
    <span>Best combo {app.best}</span>
  </div>
</section>
