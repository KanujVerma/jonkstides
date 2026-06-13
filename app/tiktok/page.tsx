'use client'

import Link from 'next/link'

const VIDEOS = [
  { id: '1', url: 'https://www.tiktok.com/@jonkstides/video/7572709440277859614', thumb: '/tiktok/1.png' },
  { id: '2', url: 'https://www.tiktok.com/@jonkstides/video/7584598785280462110', thumb: '/tiktok/2.png' },
  { id: '3', url: 'https://www.tiktok.com/@jonkstides/video/7594570963467980062', thumb: '/tiktok/3.png' },
  { id: '4', url: 'https://www.tiktok.com/@jonkstides/video/7596451939420835102', thumb: '/tiktok/4.png' },
  { id: '5', url: 'https://www.tiktok.com/@jonkstides/video/7597196999162711326', thumb: '/tiktok/5.png' },
  { id: '6', url: 'https://www.tiktok.com/@jonkstides/video/7599094588321565983', thumb: '/tiktok/6.png' },
  { id: '7', url: 'https://www.tiktok.com/@jonkstides/video/7600921308871904542', thumb: '/tiktok/7.png' },
  { id: '8', url: 'https://www.tiktok.com/@jonkstides/video/7605399978533588254', thumb: '/tiktok/8.png' },
  { id: '9', url: 'https://www.tiktok.com/@jonkstides/video/7617195289367039262', thumb: '/tiktok/9.png' },
  { id: '10', url: 'https://www.tiktok.com/@jonkstides/photo/7619000499307564318', thumb: '/tiktok/10.png' },
]

export default function TikTokPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">@jonkstides</p>
          <h1 className="mt-2 text-4xl font-black uppercase text-white">TikTok Videos</h1>
          <p className="mt-3 text-sm text-muted">
            Follow us on{' '}
            <Link
              href="https://www.tiktok.com/@jonkstides"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow hover:underline"
            >
              TikTok
            </Link>{' '}
            for the latest research updates and content.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {VIDEOS.map((v) => (
            <Link
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-white/5"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                src={v.thumb}
                alt={`TikTok video ${v.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              {/* Fallback */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white/15">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-black/40">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-px text-white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Watch</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
