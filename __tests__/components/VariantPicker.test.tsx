import { render, screen, fireEvent } from '@testing-library/react'
import VariantPicker from '@/components/product/VariantPicker'
import type { ProductVariant } from '@/lib/sanity/types'

const variants: ProductVariant[] = [
  { label: '2mg', price: 4500, stripePriceId: 'price_2mg' },
  { label: '5mg', price: 7500, stripePriceId: 'price_5mg' },
  { label: '10mg', price: 12000, stripePriceId: 'price_10mg' },
]

it('renders all variant chips', () => {
  render(<VariantPicker variants={variants} onSelect={jest.fn()} />)
  expect(screen.getByText('2mg')).toBeInTheDocument()
  expect(screen.getByText('5mg')).toBeInTheDocument()
  expect(screen.getByText('10mg')).toBeInTheDocument()
})

it('calls onSelect with the selected variant', () => {
  const onSelect = jest.fn()
  render(<VariantPicker variants={variants} onSelect={onSelect} />)
  fireEvent.click(screen.getByText('5mg'))
  expect(onSelect).toHaveBeenCalledWith(variants[1])
})

it('marks first variant as selected by default', () => {
  render(<VariantPicker variants={variants} onSelect={jest.fn()} />)
  const chip = screen.getByText('2mg').closest('button')
  expect(chip).toHaveClass('bg-yellow')
})
