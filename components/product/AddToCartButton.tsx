'use client'

import { useState } from 'react'
import { useCart } from '@/components/cart/CartContext'
import type { Product, ProductVariant } from '@/lib/square/types'

interface AddToCartButtonProps {
  product: Product
  selectedVariant: ProductVariant
  qty: number
}

export default function AddToCartButton({ product, selectedVariant, qty }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      variantId: selectedVariant.id,
      slug: product.slug,
      name: product.name,
      label: selectedVariant.label,
      price: selectedVariant.price,
      qty,
      image: product.imageUrl ?? '',
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAdd}
      className="w-full rounded bg-yellow py-4 text-sm font-black uppercase tracking-widest text-black hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(245,197,24,0.18)] active:scale-[0.97] active:translate-y-0 active:shadow-none transition-[transform,box-shadow] duration-150"
    >
      {added
        ? '\u2713 Added to Cart'
        : `Add to Cart \u2014 $${((selectedVariant.price * qty) / 100).toFixed(2)}`}
    </button>
  )
}
