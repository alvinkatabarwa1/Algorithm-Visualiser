export default function BeginnerPanel({ algorithm }) {
  return (
    <div className="beginner-panel card">
      <h2>Simple Explanation</h2>

      <div className="beginner-box">
        <p>{algorithm.simpleExplanation}</p>
      </div>
    </div>
  );
}