import Link from 'next/link'
import ClearCartOnMount from '@/components/cart/ClearCartOnMount'

export default function CheckoutSuccess() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <ClearCartOnMount />
      <div className="mb-6 text-5xl">&#x2713;</div>
      <h1 className="text-3xl font-black uppercase text-white">Order Confirmed</h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        Thank you for your order. You&apos;ll receive a confirmation email shortly.
        Your research peptides will ship within 1&ndash;3 business days.
      </p>
      <p className="mt-3 text-xs text-amber-400">
        Reminder: All products are for research purposes only.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded bg-yellow px-8 py-3 text-sm font-black uppercase tracking-widest text-black hover:opacity-90 transition-opacity"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
