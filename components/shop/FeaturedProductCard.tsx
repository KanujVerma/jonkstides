import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/square/types'

export default function FeaturedProductCard({ product }: { product: Product }) {
  const minPrice = Math.min(...product.variants.map((v) => v.price))
  const firstImage = product.imageUrl

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group col-span-2 flex gap-6 rounded-lg border border-white/10 bg-white/5 p-6 hover:border-yellow/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/50 transition-[transform,box-shadow,border-color] duration-200"
    >
      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded bg-white/5">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl text-white/10">&#x2B21;</div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-yellow">Featured</span>
        <h3 className="mt-1 text-xl font-black uppercase text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">From ${(minPrice / 100).toFixed(2)}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {product.variants.map((v) => (
            <span key={v.label} className="rounded border border-white/20 px-2 py-0.5 text-[10px] text-muted">
              {v.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <span className="rounded bg-yellow px-5 py-2 text-xs font-black uppercase tracking-widest text-black transition-[transform,box-shadow] duration-150 group-hover:-translate-y-px group-hover:shadow-[0_4px_16px_rgba(245,197,24,0.18)]">
          Shop Now
        </span>
      </div>
    </Link>
  )
}
