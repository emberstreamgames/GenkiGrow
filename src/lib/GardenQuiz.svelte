<script lang="ts">
  import { DECK_LABEL, type Deck } from '../data/items'
  import Celebration from './Celebration.svelte'
  import { QUIZ_LENGTH } from './garden'
  import { Quiz } from './quiz.svelte'
  import QuizCard from './QuizCard.svelte'
  import * as sfx from './sfx'
  import { app, level } from './store.svelte'

  // A fixed-length quiz for watering (or grooming) a plant. Finishing all questions is the only requirement.
  let {
    deck,
    mode,
    bonus,
    onComplete,
    onClose,
  }: {
    deck: Deck
    mode: 'water' | 'groom'
    bonus: number // completion XP, shown in the summary
    onComplete: () => void // fires once, when the last question is answered
    onClose: () => void // leave the quiz (after the summary, or via Quit)
  } = $props()

  const quiz = new Quiz(() => deck)
  const verb = $derived(mode === 'groom' ? 'Grooming' : 'Watering')

  let finished = $state(false) // all questions answered and credited
  let summary = $state(false)
  let leveled = $state(false) // the completion bonus pushed the player up a level

  $effect(() => quiz.sync())

  $effect(() => {
    if (!finished && quiz.answered >= QUIZ_LENGTH) {
      finished = true
      const before = level()
      onComplete()
      leveled = level() > before
    }
  })

  function next() {
    if (finished) {
      summary = true
      if (!app.muted) {
        if (mode === 'groom') sfx.groom()
        else sfx.water()
        if (leveled) setTimeout(sfx.levelUp, 900)
      }
    } else quiz.next()
  }

  function quit() {
    if (finished || quiz.answered === 0 || confirm('Quit now? Your plant will not be ' + (mode === 'groom' ? 'groomed.' : 'watered.'))) onClose()
  }
</script>

<section class="deck">
  <div class="hud">
    <div class="lvl">{verb}</div>
    <div class="dots" role="progressbar" aria-valuemin="0" aria-valuemax={QUIZ_LENGTH} aria-valuenow={Math.min(quiz.answered, QUIZ_LENGTH)} aria-label="Quiz progress">
      {#each Array(QUIZ_LENGTH) as _, i}
        <i class:done={i < quiz.answered} class:now={i === quiz.answered && !finished}></i>
      {/each}
    </div>
    <button class="quit" onclick={quit}>{finished ? 'Close' : 'Quit'}</button>
  </div>

  {#if summary}
    <div class="empty summary fxwrap">
      <Celebration kind={mode === 'groom' ? 'groom' : 'water'} />
      <h2>{mode === 'groom' ? 'Groomed!' : 'Watered!'}</h2>
      <p>{quiz.session.right} of {QUIZ_LENGTH} correct</p>
      <p class="good">+{bonus} XP bonus</p>
      {#if leveled}<p class="lvl">Level up! Lv {level()}</p>{/if}
      <button class="primary" onclick={onClose}>Done</button>
    </div>
  {:else if !quiz.current}
    <div class="empty">
      <h2>No {DECK_LABEL[deck]} to study</h2>
      <p>Turn on a chapter that includes {DECK_LABEL[deck]}, or wait until its content is added.</p>
      <button onclick={onClose}>Back</button>
    </div>
  {:else}
    <QuizCard {quiz} onNext={next} nextLabel={finished ? 'Finish ✓' : 'Next ▶'} />
  {/if}
</section>
