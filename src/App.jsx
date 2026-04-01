import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const duration = 2500
    const start = performance.now()
    let rafId = 0

    const tick = (now) => {
      const elapsed = now - start
      const ratio = Math.min(1, elapsed / duration)
      const nextProgress = Math.max(1, Math.round(ratio * 100))
      setProgress(nextProgress)

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setIsLoading(false)
      }
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-screen fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] px-6" role="status" aria-live="polite" aria-label="Loading website">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_56%,rgba(255,140,40,0.2),transparent_42%),radial-gradient(circle_at_15%_0%,rgba(255,140,40,0.09),transparent_36%)]" />
        <div className="loader-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative z-10 flex flex-col items-center gap-4 text-white">
          <div className="loader-core relative h-44 w-44">
            <div className="loader-ring loader-ring-lg absolute inset-0 rounded-full border border-orange-300/40" />
            <div className="loader-ring loader-ring-md absolute inset-[14px] rounded-full border border-orange-300/55" />
            <div className="loader-ring loader-ring-sm absolute inset-[30px] rounded-full border border-orange-200/70" />
            <div className="loader-ring loader-ring-dash absolute inset-[5px] rounded-full border border-dashed border-orange-200/40" />

            <div className="absolute inset-[46px] rounded-full bg-gradient-to-br from-[#ffc47d] via-[#ff8a1f] to-[#cc5a00] shadow-[0_0_42px_rgba(255,138,31,0.78)]" />
            <span className="loader-orbiter absolute inset-[38px] rounded-full border border-orange-200/35" />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              <span className="text-[10px] tracking-[0.26em] text-orange-200/70">LOADING</span>
              <span className="font-['Jersey_10'] text-4xl leading-none text-white drop-shadow-[0_0_8px_rgba(255,177,90,0.65)]">
                {progress}
              </span>
              <span className="text-[10px] text-orange-100/80">%</span>
            </div>
          </div>

          <div className="loader-scanline h-px w-[min(360px,76vw)] bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" />
          <h1 className="loader-brand m-0 font-['Jersey_10'] text-[clamp(1.7rem,5vw,2.6rem)] tracking-[0.05em]">Lex Cove Creative</h1>
          <p className="loader-subtitle m-0 text-[clamp(.9rem,2.2vw,1.05rem)] text-white/80">Crafting cinematic visual experiences...</p>

          <div className="h-[7px] w-[min(280px,70vw)] overflow-hidden rounded-full bg-white/10">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-[#ff8d2b] via-[#ffbd73] to-[#ff8d2b] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-shell min-h-screen w-full max-w-full overflow-x-clip">
      <Home />
    </div>
  )
}

export default App