import Navbar from "../components/Navbar";
export default function Quiz() {
  const q = {question:"2+2=?", options:["3","4","5"], answer:"4"};
  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <h1>📝 Quiz</h1>
      <p>{q.question}</p>
      <ul>{q.options.map((o,i)=>(<li key={i}>{o}</li>))}</ul>
    </div>
  );
}