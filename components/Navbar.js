import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex space-x-6 text-white font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/lessons">Lessons</Link>
        </li>
        <li>
          <Link href="/quiz">Quiz</Link>
        </li>
        <li>
          <Link href="/badges">Badges</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
        <li>
          <Link href="/progress">Progress</Link>
        </li>
        <li>
          <Link href="/ai-lecture">AI Lecture</Link>
        </li>
        <li>
          <Link href="/personality">Personality Test</Link>
        </li>
      </ul>
    </nav>
  );
}
