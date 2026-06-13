'use client'

import { useState } from 'react'
import type { Product } from '@/lib/square/types'

const TABS = ['Description', 'Shipping'] as const
type Tab = typeof TABS[number]

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<Tab>('Description')

  return (
    <div className="mt-10 border-t border-white/10 pt-6">
      <div className="flex gap-0 border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === tab
                ? 'border-b-2 border-yellow text-yellow'
                : 'text-muted hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-6 text-sm leading-relaxed text-muted">
        {active === 'Description' && (
          product.description ? (
            <p>{product.description}</p>
          ) : (
            <p>No description available.</p>
          )
        )}
        {active === 'Shipping' && (
          <div className="space-y-2">
            <p>All orders ship within 1&ndash;3 business days.</p>
            <p>Free shipping on orders over $75.</p>
            <p>Orders are shipped discreetly with no identifying markings.</p>
          </div>
        )}
      </div>
    </div>
  )
}
