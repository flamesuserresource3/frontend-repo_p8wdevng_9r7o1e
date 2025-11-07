import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, CheckCircle2 } from 'lucide-react'

export default function Studio() {
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)

  const handleGenerate = () => {
    if (running) return
    setDone(false)
    setRunning(true)
    // simulate quick generation
    setTimeout(() => {
      setRunning(false)
      setDone(true)
    }, 1000)
  }

  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.4 } }),
  }

  return (
    <section id="studio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your AI Studio</h2>
          <p className="mt-3 text-gray-600">Describe what you want. Watch components, data, and flows assemble themselves.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="inline-block h-3 w-3 rounded-full bg-red-400" />
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
              <span className="inline-block h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-medium text-gray-800">Lovable Studio</span>
            </div>
            <motion.button
              onClick={handleGenerate}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-gray-900"
            >
              <Play className="h-4 w-4" /> {running ? 'Generating…' : 'Generate app'}
            </motion.button>
          </div>

          {/* Canvas */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={blockVariants}
                className="relative rounded-xl border border-black/10 bg-gray-50 p-4"
              >
                <div className="h-28 rounded-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-700 to-black" />
                <div className="mt-3 h-2 w-2/3 rounded bg-gray-300" />
                <div className="mt-2 h-2 w-1/2 rounded bg-gray-200" />
                <AnimatePresence>
                  {running && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-orange-400/60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Success status */}
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700"
              >
                <CheckCircle2 className="h-4 w-4" /> App generated. You can tweak any part.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
