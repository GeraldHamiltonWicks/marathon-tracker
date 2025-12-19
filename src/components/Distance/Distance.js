import "./Distance.css";
import { getDistance } from "../../helpers/lapsUtils";

export const Distance = ({ laps }) => {
  const distance = getDistance(laps);

  return (
    <div className="distance">
      <p className="distance-text">Distância percorrida: {distance}m</p>
    </div>
  );
};
