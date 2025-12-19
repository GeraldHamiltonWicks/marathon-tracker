import { useEffect, useRef } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { isNumber } from "type-guards-ts";

const LAPS_TIME_KEY = "laps-time-key";

export const useLapsTime = ({ time, laps }) => {
  const [lapsTime, setLapsTime] = useLocalStorage(LAPS_TIME_KEY, []);
  const previousLapsRef = useRef(laps);

  useEffect(() => {
    const hasNotStartLap = laps === 0;
    const isEmpty = lapsTime.length === 0;
    const hasIncreasedByOne = laps === previousLapsRef.current + 1;

    // update ref for next render
    previousLapsRef.current = laps;

    if (hasNotStartLap || !hasIncreasedByOne) {
      return;
    }
    if (isEmpty) {
      return setLapsTime([time]);
    }

    return setLapsTime((lapsTime) => {
      const sum = lapsTime.reduce((acc, current) => acc + current, 0);
      return [...lapsTime, time - sum];
    });
  }, [laps]);

  return [lapsTime, setLapsTime];
};
