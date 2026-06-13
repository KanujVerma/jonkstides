'use client'

import { useRef } from 'react'
import Link from 'next/link'

interface VideoCard {
  url: string
  thumbnail: string | null
  title: string | null
}

export default function TikTokCarousel({ videos }: { videos: VideoCard[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 180 : -180, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2 md:hidden">
        {/* mobile hint - swipe */}
      </div>
      <div className="mb-6 hidden justify-end gap-2 md:flex">
        <button onClick={() => scroll('left')} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white/50 hover:text-white" aria-label="Scroll left">←</button>
        <button onClick={() => scroll('right')} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white/50 hover:text-white" aria-label="Scroll right">→</button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {videos.map((v, i) => (
          <Link
            key={i}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 overflow-hidden rounded-xl bg-white/5"
            style={{ width: '140px', aspectRatio: '9/16', scrollSnapAlign: 'start' }}
          >
            {v.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={v.thumbnail} alt={v.title ?? `Video ${i + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white/20">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 bg-black/40">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-px text-white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
