import Link from 'next/link'

const ION_URL = 'https://ionpeptide.com/?apply-promo=jonk&ref=jonk'

export default function PartnerBanner() {
  return (
    <section className="px-6 py-20 bg-black">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-white/30">
          Trusted Partner
        </p>
        <Link
          href={ION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] px-8 py-12 text-center transition-all duration-300 hover:border-[#4a7cc9]/50 md:flex-row md:text-left"
        >
          {/* Hex accent — purely decorative */}
          <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-300 hidden md:block">
            <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
              <polygon points="35,5 65,5 80,30 65,55 35,55 20,30" stroke="#4a7cc9" strokeWidth="2" fill="none"/>
              <polygon points="65,35 95,35 110,60 95,85 65,85 50,60" stroke="#4a7cc9" strokeWidth="2" fill="none"/>
              <polygon points="5,35 35,35 50,60 35,85 5,85 -10,60" stroke="#4a7cc9" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Logo wordmark */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" stroke="#4a7cc9" strokeWidth="2" fill="none"/>
                <polygon points="18,8 28,14 28,26 18,32 8,26 8,14" stroke="#6b9fd4" strokeWidth="1.5" fill="none"/>
              </svg>
              <div>
                <span className="block text-2xl font-black leading-none text-white tracking-tight">ION</span>
                <span className="block text-lg font-semibold leading-none text-[#6b9fd4]">Peptide</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="text-sm text-white/50 mb-1">Exclusive discount for JONKsTIDES customers</p>
            <p className="text-xl font-black uppercase tracking-wide text-white">
              Use code{' '}
              <span className="text-[#c9963e]">JONK</span>
              {' '}for{' '}
              <span className="text-[#c9963e]">15% off</span>
            </p>
            <p className="mt-1 text-xs text-white/30">Limited time offer · Apply at checkout · ionpeptide.com</p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <span className="inline-block rounded-lg border border-[#4a7cc9] bg-[#4a7cc9]/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#6b9fd4] transition-all duration-200 group-hover:bg-[#4a7cc9] group-hover:text-white">
              Shop Now <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
