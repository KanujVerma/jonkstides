'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/components/cart/CartContext'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/tiktok', label: 'Videos' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const { itemCount, openCart } = useCart()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Jonkstides" width={36} height={36} className="rounded-full" />
          <span className="text-sm font-black uppercase tracking-widest text-yellow">Jonkstides</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 text-sm font-medium text-muted md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors duration-150 after:absolute after:content-[''] after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:transition-colors after:duration-150 ${
                  isActive
                    ? 'text-white after:bg-yellow'
                    : 'hover:text-white after:bg-transparent hover:after:bg-white/30'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-1 text-sm font-medium text-muted hover:text-white transition-[color,transform] duration-150 active:scale-[0.97]"
            aria-label="Open cart"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow text-[10px] font-black text-black">
                {itemCount}
              </span>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="flex flex-col gap-1.5 p-1 text-muted hover:text-white transition-colors md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block h-0.5 w-5 bg-current"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 bg-current"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-5 bg-current"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[35] bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute left-0 right-0 z-[45] border-b border-white/10 bg-[#0f0f0f] md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex min-h-[48px] items-center px-6 text-base font-medium transition-colors duration-150 ${
                      isActive ? 'text-yellow' : 'text-muted hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
