<script lang="ts">
  // One-shot particle effect. Mount it fresh (e.g. inside {#key}) to replay.
  let { kind, color = '#ff9ec0' }: { kind: 'water' | 'groom' | 'grow' | 'bloom'; color?: string } = $props()

  const rand = (a: number, b: number) => a + Math.random() * (b - a)

  const count = () => (kind === 'bloom' ? 20 : 14)

  const parts = Array.from({ length: count() }, (_, i) => {
    const a = (i / count()) * Math.PI * 2 + Math.random() * 0.4
    const d = rand(50, 110)
    return {
      x: rand(-70, 70),
      y: rand(-50, 50),
      dx: Math.cos(a) * d,
      dy: Math.sin(a) * d - 20,
      delay: rand(0, 0.6),
      size: rand(0.7, 1.3),
    }
  })
</script>

<div class="fx {kind}" aria-hidden="true" style="--c:{color}">
  {#each parts as p}
    {#if kind === 'water'}
      <i class="drop" style="--x:{p.x}px;--delay:{p.delay}s;--sz:{p.size}"></i>
    {:else if kind === 'groom'}
      <i class="star" style="--x:{p.x}px;--y:{p.y}px;--delay:{p.delay}s;--sz:{p.size}"></i>
    {:else if kind === 'grow'}
      <i class="leafy" style="--x:{p.x * 0.6}px;--delay:{p.delay * 0.5}s;--sz:{p.size}"></i>
    {:else}
      <i class="petal" style="--dx:{p.dx}px;--dy:{p.dy}px;--delay:{p.delay * 0.15}s;--sz:{p.size}"></i>
    {/if}
  {/each}
  {#if kind === 'water' || kind === 'grow'}<b class="ring"></b>{/if}
</div>
