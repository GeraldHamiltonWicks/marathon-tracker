import { useEffect, useState, useRef } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const TIMER_TICK = 1000;

const STARTED_AT_KEY = "timer-started-at";
const IS_RUNNING_KEY = "timer-is-running";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useLocalStorage(IS_RUNNING_KEY, false);

  const [startedAt, setStartedAt] = useLocalStorage(STARTED_AT_KEY, null);

  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!startedAt) {
      setStartedAt(Date.now());
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setStartedAt(null);
    setElapsed(0);
  };

  useEffect(() => {
    if (!isRunning || !startedAt) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const update = () => {
      const seconds = Math.floor((Date.now() - startedAt) / 1000);
      setElapsed(seconds);
    };

    update(); // run immediately
    intervalRef.current = window.setInterval(update, TIMER_TICK);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, startedAt]);

  return [elapsed, startTimer, stopTimer, resetTimer, isRunning];
};
