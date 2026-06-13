'use client'

import { useState } from 'react'
import type { ProductVariant } from '@/lib/square/types'

interface VariantPickerProps {
  variants: ProductVariant[]
  onSelect: (variant: ProductVariant) => void
}

export default function VariantPicker({ variants, onSelect }: VariantPickerProps) {
  const [selected, setSelected] = useState(variants[0])

  function handleSelect(variant: ProductVariant) {
    setSelected(variant)
    onSelect(variant)
  }

  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">Size</p>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v.label}
            onClick={() => handleSelect(v)}
            className={`rounded border px-4 py-2 text-sm font-semibold transition-[transform,box-shadow,color,border-color] duration-150 ${
              selected.label === v.label
                ? 'border-yellow bg-yellow text-black active:scale-[0.97]'
                : 'border-white/20 text-muted hover:border-white/50 hover:text-white hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.4)] active:scale-[0.97] active:translate-y-0 active:shadow-none'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  )
}
