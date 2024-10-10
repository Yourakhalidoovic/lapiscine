import React from "react";
import { useState, useMemo } from "react";

function Performance() {
  const [performanceData, setPerformanceData] = useState({
    times: [],
    distances: [],
    strokes: [],
  });
  const [isSaving, setIsSaving] = useState(false);
  const [presenceSaved, setPresenceSaved] = useState(false);

  const handleSavePresence = () => {
    setIsSaving(true);
    // Call API or perform action to save presence
    setTimeout(() => {
      setIsSaving(false);
      setPresenceSaved(true);
    }, 2000); // Simulate API call delay
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
  const [time, setTime] = useState(0);
  const [addingTime, setAddingTime] = useState(false);

  const handleAddTime = () => {
    setAddingTime(true);
    // Simulate time-consuming operation (e.g. API call or complex calculation)
    setTimeout(() => {
      setTime(time + 1);
      setAddingTime(false);
    }, 500); // Simulate delay
  };

  const buttonText = useMemo(() => {
    if (addingTime) {
      return "Adding time...";
    } else {
      return `Add Time `;
    }
  }, [addingTime, time]);

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
        <button
          onClick={handleAddTime}
          disabled={addingTime}
          className="button"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      <h2 className="h">Times:({time} seconds)</h2>
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
        <button
          onClick={handleSavePresence}
          disabled={isSaving}
          className="button"
          type="submit"
        >
          {isSaving ? "Saving..." : "Save Presence"}
          {presenceSaved && <span style={{ color: "green" }}> Saved!</span>}
        </button>
      </form>
    </div>
  );
}

export default Performance;
