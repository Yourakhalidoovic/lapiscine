import React from "react";
import { useState } from "react";

function Performance() {
  const [performanceData, setPerformanceData] = useState({
    times: [],
    distances: [],
    strokes: [],
  });

  const handleAddTime = (event) => {
    event.preventDefault();
    const newTime = {
      time: event.target.time.value,
      distance: event.target.distance.value,
      stroke: event.target.stroke.value,
    };
  };
  const [presence, setPresence] = useState({
    date: "",
    time: "",
    location: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save presence data to database or API
  };

  return (
    <div>
      <h1 className="h">Performance</h1>
      <form onSubmit={handleAddTime}>
        <label>
          Time:
          <input className="input" type="time" name="time" />
        </label>
        <label>
          Distance:
          <input className="input" type="number" name="distance" />
        </label>
        <label>
          Stroke:
          <select className="input" name="stroke">
            <option value="Freestyle">Freestyle</option>
            <option value="Backstroke">Backstroke</option>
            <option value="Breaststroke">Breaststroke</option>
            <option value="Butterfly">Butterfly</option>
          </select>
        </label>
        <button className="button" type="submit">
          Add Time
        </button>
      </form>
      <h2 className="h">Times:</h2>
      <ul>
        {performanceData.times.map((time, index) => (
          <li key={index}>
            {time.time} - {time.distance}m - {time.stroke}
          </li>
        ))}
      </ul>
      <h1 className="h">Presence</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            className="input"
            type="date"
            value={presence.date}
            onChange={(event) =>
              setPresence({ ...presence, date: event.target.value })
            }
          />
        </label>
        <label>
          Time:
          <input
            className="input"
            type="time"
            value={presence.time}
            onChange={(event) =>
              setPresence({ ...presence, time: event.target.value })
            }
          />
        </label>
        <label>
          Location:
          <input
            className="input"
            type="text"
            value={presence.location}
            onChange={(event) =>
              setPresence({ ...presence, location: event.target.value })
            }
          />
        </label>
        <button className="button" type="submit">
          Save Presence
        </button>
      </form>
    </div>
  );
}

export default Performance;
