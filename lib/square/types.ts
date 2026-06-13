export interface ProductVariant {
  id: string
  label: string
  price: number // in cents
  imageUrl: string | null
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  category: string
  featured: boolean
  variants: ProductVariant[]
  imageUrl: string | null
  imageUrls: string[]
}
