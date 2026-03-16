'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Walk up the DOM to find the nearest scrollable ancestor
    let scrollable: Element | null = ref.current?.parentElement ?? null
    while (scrollable) {
      const overflow = getComputedStyle(scrollable).overflowY
      if (overflow === 'auto' || overflow === 'scroll') break
      scrollable = scrollable.parentElement
    }
    if (!scrollable) return

    const onScroll = () => setHidden(scrollable!.scrollTop > 20)
    scrollable.addEventListener('scroll', onScroll, { passive: true })
    return () => scrollable!.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed bottom-0 right-3 flex flex-col items-center gap-3 z-50 pb-0 transition-opacity duration-700"
      style={{ opacity: hidden ? 0 : 1, pointerEvents: 'none' }}
    >
      <span className="text-[9px] tracking-[0.3em] uppercase flex flex-col items-center"
            style={{ color: 'rgba(240,237,232,0.6)' }}>
        {'SCROLL'.split('').map((letter, i) => (
          <span
            key={i}
            style={{
              animation: hidden ? 'none' : `letterPop 3.5s cubic-bezier(0.34,1.56,0.64,1) infinite both`,
              animationDelay: `${i * 0.08}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
      <div
        className="scroll-pulse w-px h-28"
        style={{ background: 'linear-gradient(to bottom, #c8a97e, transparent)' }}
      />
    </div>
  )
}
