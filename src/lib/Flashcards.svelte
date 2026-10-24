<script lang="ts">
  import { DECK_LABEL, type Deck } from '../data/items'
  import { app, level } from './store.svelte'
  import { Quiz } from './quiz.svelte'
  import QuizCard from './QuizCard.svelte'

  let { deck }: { deck: Deck } = $props()

  const quiz = new Quiz(() => deck)

  $effect(() => quiz.sync())

  const pct = $derived(app.xp % 100)
</script>

<section class="deck">
  <div class="hud">
    <div class="lvl">Lv {level()}</div>
    <div class="xpbar" aria-label="XP progress"><div style="width:{pct}%"></div></div>
    <div class="combo" class:hot={quiz.combo >= 3}>
      {#if quiz.combo >= 2}🔥 {quiz.combo}{:else}combo {quiz.combo}{/if}
    </div>
  </div>

  {#if !quiz.current}
    <div class="empty">
      <h2>No {DECK_LABEL[deck]} in your pool</h2>
      <p>
        {#if deck === 'kanji' || deck === 'vocab' || deck === 'grammar'}
          {DECK_LABEL[deck]} content isn't loaded yet. It's coming once the textbook pages are added.
        {:else}
          Turn on a chapter above to add its {DECK_LABEL[deck]} to your pool.
        {/if}
      </p>
    </div>
  {:else}
    <QuizCard {quiz} onNext={() => quiz.next()} />
  {/if}

  <div class="foot">
    <span>{quiz.pool.length} cards in pool</span>
    <span>Session: {quiz.session.right} ✓ / {quiz.session.wrong} ✗</span>
    <span>Best combo {app.best}</span>
  </div>
</section>
