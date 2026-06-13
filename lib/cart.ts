const STORAGE_KEY = 'jonkstides_cart'

export interface CartItem {
  variantId: string
  slug: string
  name: string
  label: string
  price: number    // in cents
  qty: number
  image: string
}

interface CartStorage {
  items: CartItem[]
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: CartStorage = JSON.parse(raw)
    return parsed.items ?? []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ items }))
}

export function addToCart(item: CartItem): void {
  const items = getCart()
  const existing = items.find((i) => i.variantId === item.variantId)
  if (existing) {
    existing.qty += item.qty
    saveCart(items)
  } else {
    saveCart([...items, item])
  }
}

export function updateQty(variantId: string, qty: number): void {
  const items = getCart()
  if (qty <= 0) {
    saveCart(items.filter((i) => i.variantId !== variantId))
  } else {
    saveCart(items.map((i) => (i.variantId === variantId ? { ...i, qty } : i)))
  }
}

export function removeFromCart(variantId: string): void {
  saveCart(getCart().filter((i) => i.variantId !== variantId))
}

export function clearCart(): void {
  saveCart([])
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0)
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.qty, 0)
}
