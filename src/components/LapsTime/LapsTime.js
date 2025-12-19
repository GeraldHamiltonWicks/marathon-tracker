import "./LapsTime.css";
import { formatTime } from "../../helpers/formatTime";
import { Table } from "react-bootstrap";

export const ATHLETS = [
  "João",
  "Rafael",
  "Gerald",
  "Nilo",
  "Fabiano",
  "Pedro",
  "Vidal",
  "Puma",
];

export const LapsTime = ({ lapsTime }) => {
  const getAthleteByIndex = (index) => {
    return ATHLETS[index % ATHLETS.length];
  };

  if (lapsTime.length === 0) {
    return null;
  }

  return (
    <div className="laps-time-container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Volta</th>
            <th>Tempo</th>
            <th>Atleta</th>
          </tr>
        </thead>
        <tbody>
          {lapsTime.map((lapTime, index) => {
            return (
              <tr key={`lap-time-${index}`}>
                <td>{index + 1}</td>
                <td>{formatTime(lapTime)}</td>
                <th>{getAthleteByIndex(index)}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
