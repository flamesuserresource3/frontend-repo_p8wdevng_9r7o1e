import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [launched, setLaunched] = useState(false)

  const handleLaunch = () => {
    setLaunched(true)
    const el = document.getElementById('studio')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // reset launch pulse after a moment
    setTimeout(() => setLaunched(false), 1200)
  }

  return (
    <section className="relative isolate min-h-[80vh] sm:min-h-[90vh] flex items-center" id="hero">
      {/* Full-width cover Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient to improve text contrast; does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span>Loveable AI that makes apps</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Launch a studio that builds for you
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Compose interfaces, data, and flows with an AI partner. A minimalist black & white look with playful, vibrant motion.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <motion.button
              onClick={handleLaunch}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900"
            >
              <Rocket className="mr-2 h-4 w-4" /> Launch Studio
            </motion.button>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50"
            >
              View showcase
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">No credit card required • Free tier included</p>
        </div>
      </div>

      {/* Launch pulse feedback */}
      <AnimatePresence>
        {launched && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20"
              initial={{ scale: 0.6, opacity: 0.4 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
