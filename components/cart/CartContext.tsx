'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import {
  getCart,
  addToCart,
  updateQty,
  removeFromCart,
  clearCart,
  getCartTotal,
  getCartCount,
  type CartItem,
} from '@/lib/cart'

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  total: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: CartItem) => void
  updateItem: (variantId: string, qty: number) => void
  removeItem: (variantId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(getCart())
  }, [])

  const refresh = useCallback(() => setItems(getCart()), [])

  const addItem = useCallback((item: CartItem) => {
    addToCart(item)
    refresh()
    setIsOpen(true)
  }, [refresh])

  const updateItem = useCallback((variantId: string, qty: number) => {
    updateQty(variantId, qty)
    refresh()
  }, [refresh])

  const removeItem = useCallback((variantId: string) => {
    removeFromCart(variantId)
    refresh()
  }, [refresh])

  const clear = useCallback(() => {
    clearCart()
    refresh()
  }, [refresh])

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount: getCartCount(items),
        total: getCartTotal(items),
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
