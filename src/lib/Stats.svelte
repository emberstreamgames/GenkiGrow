<script lang="ts">
  import { ITEMS, type Item } from '../data/items'
  import { app, exportData, importData, level, resetStats, save } from './store.svelte'

  const rows = $derived(
    ITEMS.map((it) => ({ it, s: app.stats[it.id] })).filter((r): r is { it: Item; s: NonNullable<typeof r.s> } => !!r.s),
  )
  const missed = $derived([...rows].filter((r) => r.s.w > 0).sort((a, b) => b.s.w - a.s.w || a.s.c - b.s.c).slice(0, 10))
  const best = $derived(
    [...rows].filter((r) => r.s.c > 0).sort((a, b) => b.s.streak - a.s.streak || b.s.c - a.s.c).slice(0, 10),
  )
  const totalC = $derived(rows.reduce((a, r) => a + r.s.c, 0))
  const totalW = $derived(rows.reduce((a, r) => a + r.s.w, 0))
  const acc = $derived(totalC + totalW ? Math.round((totalC / (totalC + totalW)) * 100) : 0)

  let msg = $state('')

  function download() {
    const url = URL.createObjectURL(new Blob([exportData()], { type: 'application/json' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `genki-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function upload(e: Event) {
    const f = (e.currentTarget as HTMLInputElement).files?.[0]
    if (!f) return
    msg = importData(await f.text()) ? 'Progress imported.' : 'That file could not be read.'
  }

  function reset() {
    if (confirm('Reset all review stats, XP and best combo?')) {
      resetStats()
      msg = 'Stats reset.'
    }
  }
</script>

<section class="stats">
  <div class="tiles">
    <div><b>Lv {level()}</b><span>{app.xp} XP</span></div>
    <div><b>{totalC + totalW}</b><span>reviews</span></div>
    <div><b>{acc}%</b><span>accuracy</span></div>
    <div><b>{app.best}</b><span>best combo</span></div>
  </div>

  <div class="lists">
    <div>
      <h3>Most missed</h3>
      {#each missed as r (r.it.id)}
        <div class="line"><span class="jp" lang="ja">{r.it.front}</span><em>{r.it.back}</em><span class="bad">{r.s.w} ✗</span><span class="good">{r.s.c} ✓</span></div>
      {:else}
        <p class="dim">Nothing missed yet.</p>
      {/each}
    </div>
    <div>
      <h3>Strongest</h3>
      {#each best as r (r.it.id)}
        <div class="line"><span class="jp" lang="ja">{r.it.front}</span><em>{r.it.back}</em><span class="good">{r.s.c} ✓</span><span class="dim">streak {r.s.streak}</span></div>
      {:else}
        <p class="dim">Review some cards first.</p>
      {/each}
    </div>
  </div>

  <h3>Settings &amp; backup</h3>
  <div class="settings">
    <label>Answer style
      <select bind:value={app.mode} onchange={save}>
        <option value="mix">Mix</option>
        <option value="flip">Flip cards</option>
        <option value="choice">Multiple choice</option>
        <option value="type">Typed</option>
      </select>
    </label>
    <label><input type="checkbox" bind:checked={app.muted} onchange={save} /> Mute sounds</label>
    <button onclick={download}>Export progress</button>
    <label class="file">Import progress<input type="file" accept="application/json" onchange={upload} /></label>
    <button class="danger" onclick={reset}>Reset stats</button>
  </div>
  {#if msg}<p class="dim">{msg}</p>{/if}
</section>
