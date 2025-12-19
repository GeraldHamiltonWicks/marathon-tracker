import { isNotUndefined } from "type-guards-ts";
import { useLocalStorage } from "@uidotdev/usehooks";

const LAPS_KEY = "laps-key";

export const useLaps = (initialLaps) => {
  const initialData = isNotUndefined(initialLaps) ? initialLaps : 0;
  const [laps, setLaps] = useLocalStorage(LAPS_KEY, initialData);

  const increaseLap = () => setLaps((laps) => laps + 1);

  const decreaseLap = () => setLaps((laps) => laps - 1);

  return [laps, increaseLap, decreaseLap, setLaps];
};
