import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-32" id="hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              <span>AI-native site builder</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Build delightful products with AI
            </h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Design, prototype, and ship modern web apps in minutes. A crisp black & white aesthetic with playful robotics vibe, inspired by loveable AI experiences.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900">
                Get started free
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50">
                View showcase
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">No credit card required • Free tier included</p>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(255,153,0,0.08),transparent_60%)]" />
    </section>
  )
}
