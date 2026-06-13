'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from './CartContext'
import CartItemComponent from './CartItem'

export default function CartDrawer() {
  const { items, total, isOpen, closeCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      if (!res.ok) throw new Error('Checkout failed')
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[#141414] shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <h2 className="text-base font-bold uppercase tracking-widest text-white">Cart</h2>
              <button onClick={closeCart} className="text-2xl text-muted hover:text-white transition-[color,transform] duration-150 active:scale-[0.97]">×</button>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
              {items.length === 0 ? (
                <p className="mt-12 text-center text-sm text-muted">Your cart is empty.</p>
              ) : (
                items.map((item) => <CartItemComponent key={item.variantId} item={item} />)
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/10 p-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-bold text-white">${(total / 100).toFixed(2)}</span>
                </div>
                {error && <p className="text-xs text-red-400">{error}</p>}
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full rounded bg-yellow py-3 text-sm font-black uppercase tracking-widest text-black hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(245,197,24,0.18)] active:scale-[0.97] active:translate-y-0 active:shadow-none transition-[transform,box-shadow] duration-150 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {loading ? 'Loading…' : 'Checkout'}
                </button>
                <p className="text-center text-xs text-muted">
                  For research purposes only — not for human consumption.
                </p>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
