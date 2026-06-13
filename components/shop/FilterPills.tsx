'use client'

interface FilterPillsProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

const LABELS: Record<string, string> = {
  all: 'All',
  'weight-loss': 'Weight Loss',
  recovery: 'Recovery',
  performance: 'Performance',
  other: 'Other',
}

export default function FilterPills({ categories, active, onChange }: FilterPillsProps) {
  const all = ['all', ...categories]
  return (
    <div className="flex flex-wrap gap-2">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            active === cat
              ? 'border-yellow bg-yellow text-black'
              : 'border-white/20 text-muted hover:border-white/50 hover:text-white'
          }`}
        >
          {LABELS[cat] ?? cat}
        </button>
      ))}
    </div>
  )
}
