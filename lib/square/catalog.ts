import { squareFetch } from './client'
import type { Product, ProductVariant } from './types'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[™️®©|]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function inferCategory(name: string): string {
  const n = name.toLowerCase()
  if (n.includes('glp') || n.includes('tirz') || n.includes('sema') || n.includes('aod') || n.includes('nad')) return 'weight-loss'
  if (n.includes('bpc') || n.includes('tb-5') || n.includes('thymo') || n.includes('ghk') || n.includes('ahk') || n.includes('klow')) return 'recovery'
  if (n.includes('water') || n.includes('bac')) return 'other'
  return 'performance'
}

interface SquareImageObject {
  id: string
  type: string
  image_data?: { url?: string }
}

interface SquareCatalogResponse {
  objects?: SquareItem[]
  related_objects?: SquareImageObject[]
  cursor?: string
}

interface SquareItem {
  id: string
  type: string
  item_data: {
    name: string
    description?: string
    image_ids?: string[]
    variations?: SquareVariation[]
  }
}

interface SquareVariation {
  id: string
  item_variation_data: {
    name: string
    price_money?: { amount: number; currency: string }
    image_ids?: string[]
  }
}

interface SquareImageResponse {
  object?: { image_data?: { url?: string } }
}

async function fetchImageUrl(imageId: string): Promise<string | null> {
  try {
    const data = await squareFetch<SquareImageResponse>(`/catalog/object/${imageId}`)
    return data.object?.image_data?.url ?? null
  } catch {
    return null
  }
}

interface FetchResult {
  items: SquareItem[]
  imageMap: Map<string, string>
}

async function fetchRawItems(): Promise<FetchResult> {
  const items: SquareItem[] = []
  const imageMap = new Map<string, string>()
  let cursor: string | undefined

  do {
    const params = new URLSearchParams({ types: 'ITEM', include_related_objects: 'true' })
    if (cursor) params.set('cursor', cursor)
    const data = await squareFetch<SquareCatalogResponse>(`/catalog/list?${params}`, {
      next: { revalidate: 60 },
    } as RequestInit)
    items.push(...(data.objects ?? []))
    for (const obj of data.related_objects ?? []) {
      if (obj.type === 'IMAGE' && obj.image_data?.url) {
        imageMap.set(obj.id, obj.image_data.url)
      }
    }
    cursor = data.cursor
  } while (cursor)

  return { items, imageMap }
}

async function toProduct(item: SquareItem, index: number, imageMap: Map<string, string>): Promise<Product> {
  const { name, description, image_ids, variations = [] } = item.item_data
  // Collect all unique image IDs: item-level + variation-level
  const allImageIds = [
    ...(image_ids ?? []),
    ...variations.flatMap((v) => v.item_variation_data.image_ids ?? []),
  ]
  const uniqueImageIds = [...new Set(allImageIds)]
  // Fetch all images once and build a local id→url map
  const idToUrl = new Map<string, string>()
  await Promise.all(
    uniqueImageIds.map(async (id) => {
      const url = imageMap.get(id) ?? await fetchImageUrl(id)
      if (url) idToUrl.set(id, url)
    })
  )
  const imageUrls = uniqueImageIds.map((id) => idToUrl.get(id)).filter(Boolean) as string[]
  const variants: ProductVariant[] = variations.map((v) => {
    const varImgId = v.item_variation_data.image_ids?.[0]
    return {
      id: v.id,
      label: v.item_variation_data.name,
      price: v.item_variation_data.price_money?.amount ?? 0,
      imageUrl: varImgId ? (idToUrl.get(varImgId) ?? null) : null,
    }
  })
  return {
    id: item.id,
    slug: slugify(name),
    name,
    description: description ?? '',
    category: inferCategory(name),
    featured: index < 4,
    variants,
    imageUrl: imageUrls[0] ?? null,
    imageUrls,
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const { items, imageMap } = await fetchRawItems()
  return Promise.all(items.map((item, i) => toProduct(item, i, imageMap)))
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find((p) => p.slug === slug) ?? null
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts()
  return products.filter((p) => p.featured)
}
