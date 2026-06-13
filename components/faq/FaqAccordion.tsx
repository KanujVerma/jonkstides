'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '@/components/shared/AnimateIn'

interface FaqItem {
  _id: string
  question: string
  answer: string
  order: number
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="mt-12 space-y-2">
      {items.map((item, i) => (
        <AnimateIn key={item._id} delay={i * 0.04}>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <button
              onClick={() => setOpen(open === item._id ? null : item._id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-white hover:text-yellow transition-colors"
            >
              {item.question}
              <span
                className={`ml-4 flex-shrink-0 text-yellow transition-transform ${
                  open === item._id ? 'rotate-180' : ''
                }`}
              >
                &#x2193;
              </span>
            </button>
            <AnimatePresence>
              {open === item._id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimateIn>
      ))}
    </div>
  )
}
