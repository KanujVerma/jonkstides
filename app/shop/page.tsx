import { getAllProducts } from '@/lib/square/catalog'
import ProductGrid from '@/components/shop/ProductGrid'

export const revalidate = 60

export default async function ShopPage() {
  const products = await getAllProducts()
  return <ProductGrid products={products} />
}
