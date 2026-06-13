import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/square/types'

export default function ProductCard({ product }: { product: Product }) {
  const minPrice = Math.min(...product.variants.map((v) => v.price))
  const firstImage = product.imageUrl

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-yellow/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/50 transition-[transform,box-shadow,border-color] duration-200"
    >
      <div className="relative aspect-square overflow-hidden bg-white/5">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-3xl text-white/10">⬡</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-tight text-white">{product.name}</p>
        <p className="text-xs text-yellow">From ${(minPrice / 100).toFixed(2)}</p>
        <div className="flex flex-wrap gap-1">
          {product.variants.slice(0, 3).map((v) => (
            <span key={v.label} className="rounded border border-white/20 px-2 py-0.5 text-[10px] text-muted">
              {v.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
