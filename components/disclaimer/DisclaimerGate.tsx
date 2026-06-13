'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const STORAGE_KEY = 'jonkstides_acknowledged'
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

function isAcknowledged(): boolean {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return false
  const ts = Number(stored)
  return Date.now() - ts < SEVEN_DAYS_MS
}

export default function DisclaimerGate() {
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!isAcknowledged()) setShow(true)
  }, [])

  function handleEnter() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
    setAnimating(true)
  }

  function handleAnimationComplete() {
    if (animating) {
      setShow(false)
      setAnimating(false)
    }
  }

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center"
      initial={false}
      animate={
        animating
          ? { clipPath: 'circle(0% at 50% 33%)' }
          : { clipPath: 'circle(150% at 50% 33%)' }
      }
      transition={
        animating
          ? { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
      onAnimationComplete={handleAnimationComplete}
    >
      <Image src="/logo.jpg" alt="Jonkstides" width={120} height={120} className="mb-8 rounded-full" />
      <h1 className="mb-4 text-2xl font-black uppercase tracking-wide text-white">
        Research Peptides
      </h1>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
        All products sold on this site are for <strong className="text-white">research purposes only</strong> and
        are not intended for human consumption. You must be 18 or older to enter.
      </p>
      <label className="mb-6 flex cursor-pointer items-start gap-3 text-left text-sm text-muted">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-0.5 accent-yellow"
        />
        <span>
          I confirm I am 18+ and understand these products are for research purposes only.
        </span>
      </label>
      <button
        onClick={handleEnter}
        disabled={!checked}
        className="rounded bg-yellow px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition disabled:cursor-not-allowed disabled:opacity-40 hover:opacity-90"
      >
        Enter Site
      </button>
    </motion.div>
  )
}
