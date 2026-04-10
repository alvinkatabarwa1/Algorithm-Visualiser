export default function InfoPanel({ algorithm }) {
  return (
    <div className="info-panel card">
      <h2>Advanced Explanation</h2>
      <p>{algorithm.advancedDescription}</p>

      <div className="info-grid">
        <div>
          <span className="label">Best Case</span>
          <span>{algorithm.bestCase}</span>
        </div>

        <div>
          <span className="label">Average Case</span>
          <span>{algorithm.averageCase}</span>
        </div>

        <div>
          <span className="label">Worst Case</span>
          <span>{algorithm.worstCase}</span>
        </div>

        <div>
          <span className="label">Stable</span>
          <span>{algorithm.stable}</span>
        </div>
      </div>
    </div>
  );
}