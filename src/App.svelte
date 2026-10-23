<script lang="ts">
  import Flashcards from './lib/Flashcards.svelte'
  import Stats from './lib/Stats.svelte'
  import { app, toggleLesson } from './lib/store.svelte'

  type Tab = 'hiragana' | 'katakana' | 'kanji' | 'vocab' | 'stats'
  const tabs: { id: Tab; label: string }[] = [
    { id: 'hiragana', label: 'ひらがな' },
    { id: 'katakana', label: 'カタカナ' },
    { id: 'kanji', label: '漢字' },
    { id: 'vocab', label: 'Vocab' },
    { id: 'stats', label: 'Stats' },
  ]
  let tab = $state<Tab>('hiragana')
  const lessons = Array.from({ length: 13 }, (_, i) => i)
</script>

<main>
  <header>
    <h1>元気 Study</h1>
  </header>

  <nav class="tabs">
    {#each tabs as t (t.id)}
      <button class:active={tab === t.id} onclick={() => (tab = t.id)}>{t.label}</button>
    {/each}
  </nav>

  <div class="chapters" role="group" aria-label="Chapters in your review pool">
    <span class="lbl">Chapters</span>
    {#each lessons as n (n)}
      <button class="chip" class:on={app.lessons.includes(n)} aria-pressed={app.lessons.includes(n)} onclick={() => toggleLesson(n)}>
        {n === 0 ? 'Intro' : n}
      </button>
    {/each}
  </div>

  {#if tab === 'stats'}
    <Stats />
  {:else}
    <Flashcards deck={tab} />
  {/if}
</main>
