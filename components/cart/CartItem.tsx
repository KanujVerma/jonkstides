'use client'

import Image from 'next/image'
import { useCart } from './CartContext'
import type { CartItem as CartItemType } from '@/lib/cart'

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateItem, removeItem } = useCart()

  return (
    <div className="flex gap-3 py-4 border-b border-white/10">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-white/5">
        {item.image && (
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-xs text-muted">{item.label}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateItem(item.variantId, item.qty - 1)}
            className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-xs text-white hover:bg-white/20"
          >−</button>
          <span className="w-6 text-center text-sm text-white">{item.qty}</span>
          <button
            onClick={() => updateItem(item.variantId, item.qty + 1)}
            className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-xs text-white hover:bg-white/20"
          >+</button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.variantId)}
          className="text-xs text-muted hover:text-white"
          aria-label="Remove item"
        >×</button>
        <p className="text-sm font-bold text-yellow">
          ${((item.price * item.qty) / 100).toFixed(2)}
        </p>
      </div>
    </div>
  )
}
