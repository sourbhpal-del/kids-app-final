import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>
      <Navbar />
      <h1>🎉 Kids Learning App</h1>
      <p>Welcome! Choose what you want to do 👇</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
        <Link href="/lessons"><button>📘 Lessons</button></Link>
        <Link href="/quiz"><button>📝 Quiz</button></Link>
        <Link href="/badges"><button>🏅 Badges</button></Link>
        <Link href="/games"><button>🎮 Games</button></Link>
        <Link href="/progress"><button>📊 Progress</button></Link>
        <Link href="/ai-lecture"><button>🤖 AI Lecture</button></Link>
        <Link href="/personality"><button>💡 Personality Test</button></Link>
      </div>
    </div>
  );
}