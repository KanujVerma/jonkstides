import { render, screen, act } from '@testing-library/react'
import { CartProvider, useCart } from '@/components/cart/CartContext'
import type { CartItem } from '@/lib/cart'

beforeEach(() => localStorage.clear())

const mockItem: CartItem = {
  variantId: 'price_abc',
  slug: 'test',
  name: 'Test',
  label: '5mg',
  price: 5000,
  qty: 1,
  image: '/test.jpg',
}

function TestConsumer() {
  const { items, addItem, itemCount } = useCart()
  return (
    <div>
      <span data-testid="count">{itemCount}</span>
      <button onClick={() => addItem(mockItem)}>Add</button>
      <ul>{items.map((i) => <li key={i.variantId}>{i.name}</li>)}</ul>
    </div>
  )
}

it('starts with empty cart', () => {
  render(<CartProvider><TestConsumer /></CartProvider>)
  expect(screen.getByTestId('count').textContent).toBe('0')
})

it('adds item and updates count', () => {
  render(<CartProvider><TestConsumer /></CartProvider>)
  act(() => screen.getByText('Add').click())
  expect(screen.getByTestId('count').textContent).toBe('1')
  expect(screen.getByText('Test')).toBeInTheDocument()
})
