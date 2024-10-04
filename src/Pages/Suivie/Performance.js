import React from "react";
import { useState, useEffect, axios } from "react";

function Performance() {
  const [performanceData, setPerformanceData] = useState({
    times: [],
    distances: [],
    strokes: [],
  });

  useEffect(() => {
    axios
      .get("/api/performance")
      .then((response) => {
        setPerformanceData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddTime = (event) => {
    event.preventDefault();
    const newTime = {
      time: event.target.time.value,
      distance: event.target.distance.value,
      stroke: event.target.stroke.value,
    };
    axios
      .post("/api/performance", newTime)
      .then((response) => {
        setPerformanceData([...performanceData, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Performance</h1>
      <form onSubmit={handleAddTime}>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <label>
          Distance:
          <input type="number" name="distance" />
        </label>
        <label>
          Stroke:
          <select name="stroke">
            <option value="Freestyle">Freestyle</option>
            <option value="Backstroke">Backstroke</option>
            <option value="Breaststroke">Breaststroke</option>
            <option value="Butterfly">Butterfly</option>
          </select>
        </label>
        <button type="submit">Add Time</button>
      </form>
      <h2>Times:</h2>
      <ul>
        {performanceData.times.map((time, index) => (
          <li key={index}>
            {time.time} - {time.distance}m - {time.stroke}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Performance;
