'use client'

import { useState } from 'react'
import AnimateIn from '@/components/shared/AnimateIn'

interface Testimonial {
  _id: string
  name: string
  quote: string
  rating: number
}

const SLOT_WIDTH = 312 // w-72 (288px) + pr-6 gap (24px)

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [paused, setPaused] = useState(false)
  if (!testimonials.length) return null

  // Repeat enough copies to always fill any viewport width throughout the animation.
  // One "set" = N * SLOT_WIDTH px. We need at least ceil(2560 / setWidth) + 1 copies
  // so cards are never exhausted before the seamless loop reset.
  const setWidth = testimonials.length * SLOT_WIDTH
  const copies = Math.max(4, Math.ceil(2560 / setWidth) + 1)
  const repeated = Array.from({ length: copies }, () => testimonials).flat()

  return (
    <section className="overflow-hidden bg-black py-20">
      <AnimateIn className="mb-10 px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Reviews</p>
        <h2 className="mt-1 text-3xl font-black uppercase text-white">What Customers Say</h2>
      </AnimateIn>
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${testimonials.length * 5}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
          '--marquee-translate': `-${setWidth}px`,
        } as React.CSSProperties}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {repeated.map((t, i) => (
          <div key={`${t._id}-${i}`} className="flex-shrink-0 pr-6">
            <div className="w-72 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-white/25">
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow text-sm">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold text-white">— {t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
