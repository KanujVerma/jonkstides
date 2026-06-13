import { getCart, addToCart, updateQty, removeFromCart, clearCart } from '@/lib/cart'
import type { CartItem } from '@/lib/cart'

const mockItem: CartItem = {
  variantId: 'price_123',
  slug: 'bpc-157',
  name: 'BPC-157',
  label: '5mg',
  price: 4500,
  qty: 1,
  image: '/test.jpg',
}

beforeEach(() => {
  localStorage.clear()
})

describe('getCart', () => {
  it('returns empty array when nothing in storage', () => {
    expect(getCart()).toEqual([])
  })

  it('returns parsed items from storage', () => {
    localStorage.setItem('jonkstides_cart', JSON.stringify({ items: [mockItem] }))
    expect(getCart()).toEqual([mockItem])
  })
})

describe('addToCart', () => {
  it('adds a new item', () => {
    addToCart(mockItem)
    expect(getCart()).toHaveLength(1)
    expect(getCart()[0].name).toBe('BPC-157')
  })

  it('increments qty if same variantId already in cart', () => {
    addToCart(mockItem)
    addToCart(mockItem)
    const cart = getCart()
    expect(cart).toHaveLength(1)
    expect(cart[0].qty).toBe(2)
  })
})

describe('updateQty', () => {
  it('updates the qty of a specific variant', () => {
    addToCart(mockItem)
    updateQty('price_123', 3)
    expect(getCart()[0].qty).toBe(3)
  })

  it('removes item if qty set to 0', () => {
    addToCart(mockItem)
    updateQty('price_123', 0)
    expect(getCart()).toHaveLength(0)
  })
})

describe('removeFromCart', () => {
  it('removes item by variantId', () => {
    addToCart(mockItem)
    removeFromCart('price_123')
    expect(getCart()).toHaveLength(0)
  })
})

describe('clearCart', () => {
  it('empties the cart', () => {
    addToCart(mockItem)
    clearCart()
    expect(getCart()).toHaveLength(0)
  })
})
