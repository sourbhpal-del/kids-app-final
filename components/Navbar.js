// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link href="/" className="font-bold text-lg tracking-wide">
            🚀 Kids Learning App
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/lessons" className="hover:underline">
              📘 Lessons
            </Link>
            <Link href="/quiz" className="hover:underline">
              📝 Quiz
            </Link>
            <Link href="/badges" className="hover:underline">
              🏅 Badges
            </Link>
            <Link href="/games" className="hover:underline">
              🎮 Games
            </Link>
            <Link href="/progress" className="hover:underline">
              📊 Progress
            </Link>
            <Link href="/personality" className="hover:underline">
              🧠 Personality Test
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pt-2 pb-4 space-y-2">
          <Link href="/lessons" className="block hover:underline">
            📘 Lessons
          </Link>
          <Link href="/quiz" className="block hover:underline">
            📝 Quiz
          </Link>
          <Link href="/badges" className="block hover:underline">
            🏅 Badges
          </Link>
          <Link href="/games" className="block hover:underline">
            🎮 Games
          </Link>
          <Link href="/progress" className="block hover:underline">
            📊 Progress
          </Link>
          <Link href="/personality" className="block hover:underline">
            🧠 Personality Test
          </Link>
        </div>
      )}
    </nav>
  );
}
