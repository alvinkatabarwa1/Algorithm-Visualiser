export default function BarContainer({ array, activeBars = [], sortedBars = [] }) {
  return (
    <div className="bar-container">
      {array.map((value, index) => {
        const isActive = activeBars.includes(index);
        const isSorted = sortedBars.includes(index);

        let className = "bar";
        if (isSorted) className += " sorted";
        else if (isActive) className += " active";

        return (
          <div
            key={index}
            className={className}
            style={{ height: `${value}px` }}
            title={value}
          />
        );
      })}
    </div>
  );
}