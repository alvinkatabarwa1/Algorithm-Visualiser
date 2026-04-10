export default function StatusPanel({ isSorting, progressPercent }) {
  return (
    <div className="status-panel card">
      <h2>Algorithm Status</h2>

      <div className="status-box">
        <div className="status-content">
          <h3 className="progress-number">{progressPercent}%</h3>
        </div>

        <div className="status-footer">
          <div className={`status-pill ${isSorting ? "running" : "idle"}`}>
            {isSorting ? "Sorting in progress" : "Idle"}
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}