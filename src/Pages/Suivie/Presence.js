import React from "react";
import { useState } from "react";

function Presence() {
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
      <h1>Presence</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
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
            type="text"
            value={presence.location}
            onChange={(event) =>
              setPresence({ ...presence, location: event.target.value })
            }
          />
        </label>
        <button type="submit">Save Presence</button>
      </form>
    </div>
  );
}

export default Presence;
