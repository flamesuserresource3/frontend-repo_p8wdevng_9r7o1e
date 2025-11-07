import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Lovable-Inspired</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-black px-4 py-2 text-white hover:bg-gray-900 transition-colors"
            >
              Get started
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-3 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
