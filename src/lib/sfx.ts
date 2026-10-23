let ctx: AudioContext | null = null

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 0.12) {
  if (!ctx) return
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  o.type = type
  o.frequency.value = freq
  const t = ctx.currentTime + start
  g.gain.setValueAtTime(vol, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  o.connect(g).connect(ctx.destination)
  o.start(t)
  o.stop(t + dur)
}

function ready(): boolean {
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    return true
  } catch {
    return false
  }
}

// Rising pitch with combo so streaks feel good.
export function good(combo: number) {
  if (!ready()) return
  const base = 523 * Math.pow(1.06, Math.min(combo, 12))
  tone(base, 0, 0.12, 'triangle')
  tone(base * 1.5, 0.07, 0.18, 'triangle')
}

export function bad() {
  if (!ready()) return
  tone(180, 0, 0.18, 'sawtooth', 0.08)
  tone(140, 0.1, 0.22, 'sawtooth', 0.08)
}

export function levelUp() {
  if (!ready()) return
  ;[523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.2, 'square', 0.07))
}
