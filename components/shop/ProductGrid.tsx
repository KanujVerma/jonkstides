'use client'

import { useState, useMemo } from 'react'
import FilterPills from './FilterPills'
import FeaturedProductCard from './FeaturedProductCard'
import ProductCard from './ProductCard'
import AnimateIn from '@/components/shared/AnimateIn'
import type { Product } from '@/lib/square/types'

export default function ProductGrid({ products }: { products: Product[] }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category).filter(Boolean))],
    [products]
  )

  const filtered = useMemo(
    () => (activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter)),
    [products, activeFilter]
  )

  const featured = filtered.find((p) => p.featured) ?? filtered[0]
  const rest = filtered.filter((p) => p.id !== featured?.id)

  return (
    <div>
      <AnimateIn className="mb-8">
        <FilterPills categories={categories} active={activeFilter} onChange={setActiveFilter} />
      </AnimateIn>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {featured && (
          <AnimateIn className="col-span-2 md:col-span-4">
            <FeaturedProductCard product={featured} />
          </AnimateIn>
        )}
        {rest.map((product, i) => (
          <AnimateIn key={product.id} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
