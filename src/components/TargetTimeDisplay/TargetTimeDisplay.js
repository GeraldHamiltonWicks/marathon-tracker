import "./TargetTimeDisplay.css";
import { useTargetOffset } from "../../hooks/useTargetOffset";
import { formatTime } from "../../helpers/formatTime";

export const TargetTimeDisplay = ({ time, laps }) => {
  const [targetTimeOffset] = useTargetOffset({ time, laps });
  const isFasterThanTarget = targetTimeOffset > 0;

  if (targetTimeOffset === 0) {
    return (
      <div className="target-time-display">
        Diferença p/ tempo alvo:
        <span className="description">
          {" "}
          {formatTime(Math.abs(targetTimeOffset))}
        </span>
      </div>
    );
  }

  return (
    <div className="target-time-display">
      <div className="target-time-text-container">
        Diferença p/ tempo alvo:
        <p
          className={`description ${
            isFasterThanTarget ? "description-positive" : "description-negative"
          }`}
        >
          <span>{isFasterThanTarget ? "+" : "-"}</span>
          <span>{formatTime(Math.abs(targetTimeOffset))}</span>
        </p>
      </div>
    </div>
  );
};
