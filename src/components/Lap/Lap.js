import "./Lap.css";

export const Lap = ({ laps }) => {
  return (
    <div className="lap">
      <p className="lap-text">Volta atual: {laps + 1}</p>
    </div>
  );
};
