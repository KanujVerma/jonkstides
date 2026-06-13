import AnimateIn from '@/components/shared/AnimateIn'
import ProductCard from '@/components/shop/ProductCard'
import type { Product } from '@/lib/square/types'
import Link from 'next/link'

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimateIn className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Products</p>
            <h2 className="mt-1 text-3xl font-black uppercase text-white">Popular Peptides</h2>
          </div>
          <Link href="/shop" className="group flex items-center gap-0.5 text-sm text-muted hover:text-white transition-colors">
            View all <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
          </Link>
        </AnimateIn>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product, i) => (
            <AnimateIn key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
