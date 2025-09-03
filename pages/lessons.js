import Navbar from "../components/Navbar";
export default function Lessons() {
  const lessons = ["Math Basics", "English Alphabet", "Science Fun"];
  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <h1>📘 Lessons</h1>
      <ul>{lessons.map((l,i)=>(<li key={i}>{l}</li>))}</ul>
    </div>
  );
}