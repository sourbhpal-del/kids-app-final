export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li><a href="/">🏠 Home</a></li>
        <li><a href="/lessons">📘 Lessons</a></li>
        <li><a href="/quiz">📝 Quiz</a></li>
        <li><a href="/badges">🏅 Badges</a></li>
        <li><a href="/progress">📊 Progress</a></li>
        <li><a href="/leaderboard">🏆 Leaderboard</a></li>
      </ul>
    </nav>
  );
}
