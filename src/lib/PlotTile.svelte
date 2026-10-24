<script lang="ts">
  import { SPECIES, STAGE_NAMES, msUntilReady, formatWait, phaseOf, type Plot } from './garden'
  import PlantSprite from './PlantSprite.svelte'

  let { plot, index, now, onclick }: { plot: Plot | null; index: number; now: number; onclick: () => void } = $props()

  const phase = $derived(plot ? phaseOf(plot, now) : null)
  const bloomed = $derived(plot?.stage === STAGE_NAMES.length - 1)
  const badge = $derived(phase === 'thirsty' ? (bloomed ? '✂️' : '💧') : phase === 'resting' ? '⏳' : phase === 'ready' ? '✨' : '')
  const status = $derived(
    !plot
      ? 'empty, tap to plant'
      : phase === 'thirsty'
        ? bloomed
          ? 'needs grooming'
          : 'needs water'
        : phase === 'ready'
          ? 'ready to grow'
          : `resting, ready in ${formatWait(msUntilReady(plot, now))}`,
  )
  const label = $derived(
    plot ? `Plot ${index + 1}: ${SPECIES[plot.species].label}, ${STAGE_NAMES[plot.stage]}, ${status}` : `Plot ${index + 1}: ${status}`,
  )
</script>

<button class="plot {phase ?? 'empty'}" aria-label={label} {onclick}>
  {#if plot}
    <PlantSprite species={plot.species} stage={plot.stage} />
    {#if badge}<span class="badge" aria-hidden="true">{badge}</span>{/if}
  {:else}
    <span class="plus" aria-hidden="true">+</span>
  {/if}
</button>
