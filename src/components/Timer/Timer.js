import "./Timer.css";
import { formatTime } from "../../helpers/formatTime";

export const Timer = ({ time }) => {
  return (
    <div className="timer">
      <h1>Tempo</h1>
      <h1 className="time-title">{formatTime(time)}</h1>
    </div>
  );
};
