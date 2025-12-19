import { useEffect, useState, useRef } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const TIMER_TICK = 1000;

const STARTED_AT_KEY = "timer-started-at";
const ACCUMULATED_KEY = "timer-accumulated";
const IS_RUNNING_KEY = "timer-is-running";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useLocalStorage(IS_RUNNING_KEY, false);

  const [startedAt, setStartedAt] = useLocalStorage(STARTED_AT_KEY, null);

  const [accumulated, setAccumulated] = useLocalStorage(ACCUMULATED_KEY, 0);

  const [elapsed, setElapsed] = useState(accumulated);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setStartedAt(Date.now());
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning && startedAt) {
      const now = Date.now();
      const seconds = Math.floor((now - startedAt) / 1000);
      setAccumulated((prev) => prev + seconds);
    }

    setStartedAt(null);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setStartedAt(null);
    setAccumulated(0);
    setElapsed(0);
  };

  useEffect(() => {
    if (!isRunning || !startedAt) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setElapsed(accumulated);
      return;
    }

    const update = () => {
      const seconds = accumulated + Math.floor((Date.now() - startedAt) / 1000);
      setElapsed(seconds);
    };

    update();
    intervalRef.current = window.setInterval(update, TIMER_TICK);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, startedAt, accumulated]);

  return [elapsed, startTimer, stopTimer, resetTimer, isRunning];
};
