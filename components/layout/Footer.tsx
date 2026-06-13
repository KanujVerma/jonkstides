import Link from 'next/link'

interface FooterProps {
  instagramUrl?: string
  tiktokUrl?: string
}

export default function Footer(_props: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-yellow">Jonkstides</p>
            <p className="mt-1 text-xs text-muted">Trusted. Tested. Affordable.</p>
          </div>
          <nav className="flex gap-6 text-xs text-muted">
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-xs text-muted">
            All products sold on this site are for research purposes only and are not intended for
            human consumption. By purchasing, you confirm you are 18+.
          </p>
          <p className="mt-2 text-center text-xs text-muted">© {new Date().getFullYear()} JONKsTIDES LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
