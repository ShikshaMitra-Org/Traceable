import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-inter font-semibold text-black">
          Welcome to TRACEABLE
        </h1>
        <p className="mt-4 text-text-secondary font-inter">
          Curated by Experts. Traced to Source.
        </p>
      </main>
    </div>
  )
}

export default App
