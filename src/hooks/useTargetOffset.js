import { useEffect, useRef } from "react";
import { TARGET_PACE, TARGET_PACE_DISTANCE } from "../App";
import { getDistance } from "../helpers/lapsUtils";
import { useLocalStorage } from "@uidotdev/usehooks";

const TARGET_OFFSET_KEY = "target-offset-key";

export const useTargetOffset = ({ time, laps }) => {
  const [targetTimeOffset, setTargetOffset] = useLocalStorage(
    TARGET_OFFSET_KEY,
    0
  );
  const previousLapsRef = useRef(laps);

  useEffect(() => {
    const hasIncreasedByOne = laps === previousLapsRef.current + 1;
    previousLapsRef.current = laps; // update ref for next render

    if (!hasIncreasedByOne) {
      return;
    }

    const targetTime = (getDistance(laps) * TARGET_PACE) / TARGET_PACE_DISTANCE;
    const newTargetTimeOffset = targetTime - time;
    setTargetOffset(newTargetTimeOffset);
  }, [laps]);

  return [Math.round(targetTimeOffset)];
};
