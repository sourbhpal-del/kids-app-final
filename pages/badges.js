import Navbar from "../components/Navbar";
export default function Badges() {
  const badges = ["Math Star", "Quiz Master", "Science Hero"];
  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <h1>🏅 Badges</h1>
      <ul>{badges.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
    </div>
  );
}