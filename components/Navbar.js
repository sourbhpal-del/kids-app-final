// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <a href="/" className="font-bold tracking-wide">
            🚀 Kids Learning App
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded hover:bg-blue-500"
            aria-label="Open Menu"
            onClick={() => {
              const m = document.getElementById("mobile-nav");
              if (m) m.classList.toggle("hidden");
            }}
          >
            ☰
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/lessons" className="hover:underline">Lessons</a></li>
            <li><a href="/quiz" className="hover:underline">Quiz</a></li>
            <li><a href="/badges" className="hover:underline">Badges</a></li>
            <li><a href="/progress" className="hover:underline">Progress</a></li>
            <li><a href="/leaderboard" className="hover:underline">Leaderboard</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-nav" className="md:hidden hidden border-t border-blue-500">
        <ul className="px-4 py-2 space-y-2">
          <li><a href="/" className="block py-1">Home</a></li>
          <li><a href="/lessons" className="block py-1">Lessons</a></li>
          <li><a href="/quiz" className="block py-1">Quiz</a></li>
          <li><a href="/badges" className="block py-1">Badges</a></li>
          <li><a href="/progress" className="block py-1">Progress</a></li>
          <li><a href="/leaderboard" className="block py-1">Leaderboard</a></li>
        </ul>
      </div>
    </nav>
  );
}
