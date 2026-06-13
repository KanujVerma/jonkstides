'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={ref} className="grid min-h-[calc(100vh-60px)] grid-cols-1 md:grid-cols-2">
      {/* Left: copy */}
      <div className="flex flex-col justify-center bg-black px-8 py-16 md:px-16">
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-yellow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Research Peptides
        </motion.p>
        <motion.h1
          className="mb-6 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Your trusted<br />source for<br />
          <span className="text-yellow">peptides.</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-sm text-base text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Trusted. Tested. Affordable. We make it easy to source quality research peptides without the confusion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/shop"
            className="inline-block rounded bg-yellow px-8 py-3 text-sm font-black uppercase tracking-widest text-black hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(245,197,24,0.18)] active:scale-[0.97] active:translate-y-0 active:shadow-none transition-[transform,box-shadow] duration-150"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {[
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@jonkstides?_r=1&_t=ZP-92k8bksARH4',
              bg: '#010101',
              text: '#ffffff',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              ),
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/cGN9fYrDWs',
              bg: '#5865F2',
              text: '#ffffff',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.129 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              ),
            },
            {
              label: 'Rumble',
              href: 'https://rumble.com/user/jonkstides',
              bg: '#85C742',
              text: '#ffffff',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2 2h10.27c3.29 0 5.668.571 7.137 1.713C20.873 4.855 21.6 6.553 21.6 8.8c0 1.587-.36 2.928-1.08 4.022-.528.823-1.284 1.497-2.267 2.022l4.147 7.156H18L14.4 15.4H6v6.6H2V2zm4 3.6V12h6.12c1.573 0 2.7-.308 3.38-.924.68-.627 1.02-1.56 1.02-2.798 0-1.205-.352-2.1-1.056-2.684C14.752 5.198 13.616 4.9 12 4.9H6V5.6z" />
                </svg>
              ),
            },
            {
              label: 'WhatsApp',
              href: 'https://chat.whatsapp.com/BdS1IKTpEbnCcXqWQ7B4bz',
              bg: '#25D366',
              text: '#ffffff',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              ),
            },
          ].map(({ label, href, icon, bg, text }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded px-4 py-2.5 text-sm font-semibold transition-[transform,filter] duration-150 hover:-translate-y-px hover:brightness-110 active:scale-[0.97] active:translate-y-0"
              style={{ backgroundColor: bg, color: text }}
            >
              {icon}
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right: mascot on yellow */}
      <div className="relative flex items-center justify-center bg-yellow">
        {/* Entry + scroll parallax */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: mascotY }}
        >
          {/* Continuous float + hover reactivity */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06, rotate: 2 }}
          >
            <Image
              src="/logo.jpg"
              alt="Jonkstides mascot"
              width={320}
              height={320}
              className="rounded-3xl drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
