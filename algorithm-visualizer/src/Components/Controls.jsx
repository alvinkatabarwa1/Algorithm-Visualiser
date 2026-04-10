export default function Controls({
  onGenerate,
  onStart,
  onStop,
  isSorting,
  speed,
  setSpeed,
  selectedAlgorithm,
  setSelectedAlgorithm,
  algorithmOptions,
}) {
  return (
    <section className="controls card">
      <div className="controls-row">
        <div className="controls-buttons">
          <button
            className="btn btn-secondary"
            onClick={onGenerate}
            disabled={isSorting}
          >
            Generate New Array
          </button>

          <button
            className="btn btn-primary"
            onClick={onStart}
            disabled={isSorting}
          >
            Start
          </button>

          <button
            className="btn btn-danger"
            onClick={onStop}
            disabled={!isSorting}
          >
            Stop
          </button>
        </div>

        <div className="controls-meta">
          <div className="algorithm-select-wrap">
            <label htmlFor="algorithm">Algorithm</label>
            <select
              id="algorithm"
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
              disabled={isSorting}
            >
              {algorithmOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="speed-wrap">
            <label htmlFor="speed">Playback Speed: {speed}</label>
            <input
              id="speed"
              type="range"
              min="1"
              max="100"
              step="1"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}