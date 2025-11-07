import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <footer id="get-started" className="border-t border-black/5 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <h3 className="text-2xl font-semibold">Ready to build something lovable?</h3>
              <p className="text-gray-600">Start free and create your next product with AI today.</p>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900">Launch Studio</a>
              <p className="text-xs text-gray-500">Black & white mini robot greeting with subtle orange glow—interactive and friendly.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
