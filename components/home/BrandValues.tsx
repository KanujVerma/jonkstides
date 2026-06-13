import AnimateIn from '@/components/shared/AnimateIn'

const values = [
  {
    icon: '✓',
    title: 'Trusted Sources',
    desc: 'Every product is sourced from verified, reputable manufacturers with documented supply chains.',
  },
  {
    icon: '⬡',
    title: 'Tested Products',
    desc: 'Third-party certificates of analysis available for all products. No guessing.',
  },
  {
    icon: '$',
    title: 'Affordable Pricing',
    desc: "Quality research peptides don't have to cost a fortune. We keep prices fair.",
  },
]

export default function BrandValues() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <AnimateIn key={v.title} delay={i * 0.1}>
              <div className="rounded-lg border border-white/10 p-8 transition-colors duration-200 hover:border-white/25">
                <div className="mb-4 text-2xl font-black text-yellow">{v.icon}</div>
                <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
