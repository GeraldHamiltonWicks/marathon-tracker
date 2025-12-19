import "./ButtonsContainer.css";
import Button from "react-bootstrap/Button";

export const ButtonsContainer = ({
  stopTimer,
  startTimer,
  resetAll,
  increaseLap,
  isRunning,
}) => {
  return (
    <div className="buttons-container">
      <div className="bottom-buttons">
        <Button variant="dark" onClick={stopTimer} disabled={!isRunning}>
          <i className="fa-solid fa-pause"></i>
          Pausar
        </Button>
        <Button variant="success" onClick={startTimer} disabled={isRunning}>
          <i className="fa-solid fa-play"></i>
          Iniciar
        </Button>
      </div>
      <div className="bottom-buttons">
        <Button variant="dark" onClick={resetAll}>
          <i className="fa-solid fa-arrow-rotate-left"></i>Resetar
        </Button>
        <Button variant="dark" onClick={increaseLap}>
          <i className="fa-solid fa-plus"></i>1 volta
        </Button>
      </div>
    </div>
  );
};
