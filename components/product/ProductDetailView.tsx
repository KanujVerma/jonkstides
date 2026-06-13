'use client'

import { useState } from 'react'
import type { Product, ProductVariant } from '@/lib/square/types'
import ImageGallery from './ImageGallery'
import VariantPicker from './VariantPicker'
import AddToCartButton from './AddToCartButton'

const QTY_OPTIONS = [1, 2, 5]

export default function ProductDetailView({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0])
  const [qty, setQty] = useState(1)

  // Active image: variant's own image, or fall back to first product image
  const activeImage = selectedVariant.imageUrl ?? product.imageUrl
  const activeImages = activeImage
    ? [activeImage, ...product.imageUrls.filter((u) => u !== activeImage)]
    : product.imageUrls

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <ImageGallery images={activeImages} name={product.name} />

      <div>
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-yellow">{product.category}</p>
        <h1 className="mb-4 text-3xl font-black uppercase text-white">{product.name}</h1>

        <div className="flex flex-col gap-4">
          <VariantPicker
            variants={product.variants}
            onSelect={(v) => setSelectedVariant(v)}
          />

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">Quantity</p>
            <div className="flex gap-2">
              {QTY_OPTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => setQty(q)}
                  className={`rounded border px-4 py-2 text-sm font-semibold transition-[transform,box-shadow,color,border-color] duration-150 ${
                    qty === q
                      ? 'border-yellow bg-yellow text-black active:scale-[0.97]'
                      : 'border-white/20 text-muted hover:border-white/50 hover:text-white hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.4)] active:scale-[0.97] active:translate-y-0 active:shadow-none'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <AddToCartButton product={product} selectedVariant={selectedVariant} qty={qty} />
        </div>
      </div>
    </div>
  )
}
