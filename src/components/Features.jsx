import { Wand2, Puzzle, Layout, Shield } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'Generative UI',
    desc: 'Compose entire interfaces from natural language. Edit with precision as you go.',
  },
  {
    icon: Puzzle,
    title: 'Composables',
    desc: 'Reusable blocks that snap together—sane defaults with room to customize.',
  },
  {
    icon: Layout,
    title: 'Pixel-perfect',
    desc: 'Minimalist black & white look with subtle orange accents for delightful focus.',
  },
  {
    icon: Shield,
    title: 'Production-ready',
    desc: 'Type-safe APIs, tested components, and best practices baked in.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">Ship fast without sacrificing quality. Thoughtful primitives and powerful automation.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
