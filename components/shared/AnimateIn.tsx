'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** 'fade-up' | 'clip-left' — default 'fade-up' */
  variant?: 'fade-up' | 'clip-left'
}

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'clip-left': {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)' },
  },
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
