import { getProductBySlug, getAllProducts } from '@/lib/square/catalog'
import { notFound } from 'next/navigation'
import ProductDetailView from '@/components/product/ProductDetailView'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/shop" className="group mb-8 inline-flex items-center gap-0.5 text-xs text-muted hover:text-white transition-colors duration-150">
          <span className="inline-block transition-transform duration-150 group-hover:-translate-x-1">←</span> Back to Shop
        </Link>
        <ProductDetailView product={product} />
        {product.description && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-yellow">About This Peptide</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{product.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
