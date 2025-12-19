import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { useTimer } from "./hooks/useTimer";
import { useLaps } from "./hooks/useLaps";
import { TargetTimeDisplay } from "./components/TargetTimeDisplay/TargetTimeDisplay";
import { Distance } from "./components/Distance/Distance";
import { Lap } from "./components/Lap/Lap";
import { useLapsTime } from "./hooks/useLapsTime";
import { LapsTime } from "./components/LapsTime/LapsTime";
import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer";
import { useState } from "react";
import { ResetModal } from "./components/ResetModal/ResetModal";
export const TARGET_PACE = 68; // 68s/400meters
export const TARGET_PACE_DISTANCE = 400;

function App() {
  const [time, startTimer, stopTimer, resetTimer, isRunning] = useTimer();
  const [laps, increaseLap, decreaseLap, setLaps] = useLaps(0);
  const [lapsTime, setLapsTime] = useLapsTime({ time, laps });
  const [showConfirmationReset, setShowConfirmationReset] = useState(false);

  const triggerResetModal = () => setShowConfirmationReset(true);
  const closeResetModal = () => setShowConfirmationReset(false);

  const resetAll = () => {
    stopTimer();
    resetTimer();
    setLaps(0);
    setLapsTime([]);
    localStorage.clear();
  };

  return (
    <div className="App">
      <Timer time={time} />
      <Lap laps={laps} />
      <Distance laps={laps} />
      <TargetTimeDisplay time={time} laps={laps} />
      <ButtonsContainer
        stopTimer={stopTimer}
        startTimer={startTimer}
        resetAll={triggerResetModal}
        increaseLap={increaseLap}
        isRunning={isRunning}
      />
      <hr />
      <LapsTime lapsTime={lapsTime} />
      <ResetModal
        show={showConfirmationReset}
        handleClose={closeResetModal}
        title="Resetar tempos ?"
        description="Tem certeza que deseja resetar os tempos ?"
        onConfirm={resetAll}
      />
    </div>
  );
}

export default App;
