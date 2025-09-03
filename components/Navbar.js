export default function Navbar() {
  return (
    <div style={{ background: "#eee", padding: "1rem", marginBottom: "1rem" }}>
      <a href="/">🏠 Home</a> | 
      <a href="/lessons">📘 Lessons</a> | 
      <a href="/quiz">📝 Quiz</a> | 
      <a href="/badges">🏅 Badges</a> | 
      <a href="/games">🎮 Games</a> | 
      <a href="/progress">📊 Progress</a> | 
      <a href="/ai-lecture">🤖 AI</a> | 
      <a href="/personality">💡 Personality</a>
    </div>
  );
}