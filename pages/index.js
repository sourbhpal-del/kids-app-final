import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 Kids App with Tailwind is Working!
        </h1>
      </main>
    </div>
  )
}
