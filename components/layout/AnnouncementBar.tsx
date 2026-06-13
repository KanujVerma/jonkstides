'use client'

import { motion } from 'framer-motion'

export default function AnnouncementBar({ text }: { text: string }) {
  if (!text) return null
  const repeated = `${text}  •  ${text}  •  `

  return (
    <div className="overflow-hidden bg-yellow py-2">
      <motion.p
        className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-black"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        {repeated}
      </motion.p>
    </div>
  )
}
