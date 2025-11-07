import { Star } from 'lucide-react'

const items = [
  {
    title: 'Adaptive layouts',
    desc: 'Responsive designs that feel at home on any device.',
  },
  {
    title: 'Smooth interactions',
    desc: 'Subtle motion and micro-interactions for a polished feel.',
  },
  {
    title: 'Dark-mode friendly',
    desc: 'High-contrast, accessible components that glow with orange warmth.',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Crafted details</h2>
            <p className="mt-3 text-gray-600 max-w-xl">A curated set of delightful touches that make your app feel truly lovable.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-sm text-gray-600">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Users love the polish</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 h-40 rounded-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-700 to-black" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
