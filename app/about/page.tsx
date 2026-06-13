import AnimateIn from '@/components/shared/AnimateIn'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Our Story</p>
          <h1 className="mt-2 text-4xl font-black uppercase text-white">About Jonkstides</h1>
        </AnimateIn>

        <AnimateIn delay={0.1} className="mt-10 space-y-6 text-sm leading-loose text-muted">
          <p>
            JONKsTIDES was founded by someone who got tired of the same story: overpriced peptides,
            confusing sourcing, and vendors who made you feel like you needed a PhD just to buy something.
            We built this to be different.
          </p>
          <p>
            We source only from verified manufacturers, provide certificates of analysis for every product,
            and price things like a real human being would. No markups designed to take advantage of people
            who don&apos;t know better.
          </p>
          <p>
            Based in Chicago. Operating online. Serving researchers, athletes, and curious minds across the
            country who just want quality products without the runaround.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: 'Trusted Sources', value: '100%' },
            { label: 'Products Tested', value: 'Every Batch' },
            { label: 'Happy Customers', value: 'Growing Daily' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 p-6 text-center">
              <p className="text-2xl font-black text-yellow">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
            </div>
          ))}
        </AnimateIn>

        <AnimateIn delay={0.25} className="mt-12 rounded-lg border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow">Disclaimer</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            All products sold by JONKsTIDES LLC are strictly for research and laboratory purposes.
            They are not intended for human consumption. By purchasing from this site, you confirm
            you are 18 years or older and understand the nature and intended use of these products.
          </p>
        </AnimateIn>
      </div>
    </div>
  )
}
