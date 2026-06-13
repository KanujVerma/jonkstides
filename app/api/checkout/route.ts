import { NextRequest, NextResponse } from 'next/server'
import { squareFetch } from '@/lib/square/client'
import type { CartItem } from '@/lib/cart'
import { randomUUID } from 'crypto'

interface PaymentLinkResponse {
  payment_link?: { url?: string }
  errors?: { detail: string }[]
}

export async function POST(request: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await request.json()

    if (!items?.length) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const lineItems = items.map((item) => ({
      catalog_object_id: item.variantId,
      quantity: String(item.qty),
    }))

    const data = await squareFetch<PaymentLinkResponse>(
      '/online-checkout/payment-links',
      {
        method: 'POST',
        body: JSON.stringify({
          idempotency_key: randomUUID(),
          order: {
            location_id: process.env.SQUARE_LOCATION_ID,
            line_items: lineItems,
          },
          checkout_options: {
            redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
            ask_for_shipping_address: true,
          },
        }),
      }
    )

    if (data.errors?.length) {
      console.error('Square checkout error:', data.errors)
      return NextResponse.json({ error: data.errors[0].detail }, { status: 500 })
    }

    return NextResponse.json({ url: data.payment_link?.url })
  } catch (err) {
    console.error('Square checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
