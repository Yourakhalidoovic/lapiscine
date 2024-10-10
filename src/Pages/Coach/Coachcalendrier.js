import React from "react";
import { useState, useEffect } from "react";
import Presence from "../Suivie/Presence";

function Coachcalendrier() {
  const [coachData, setCoachData] = useState({
    name: "",
    email: "",
    experience: "",
    certifications: "",
    Presence: "",
    Absence: "",
  });

  const handleUpdateCoach = (event) => {
    event.preventDefault();
    const updatedCoach = {
      name: event.target.name.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      certifications: event.target.certifications.value,
    };
  };
  const [presence, setPresence] = useState({
    online: false,
    lastSeen: null,
  });

  const [absence, setAbsence] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    // Simulate API call to fetch coach presence data
    const fetchPresenceData = async () => {
      const response = await fetch("/api/coach-presence");
      const data = await response.json();
      setPresence(data);
    };
    fetchPresenceData();
  }, []);

  const handleTogglePresence = () => {
    setPresence({ online: !presence.online, lastSeen: new Date() });
  };

  const handleSetAbsence = () => {
    // Simulate API call to set coach absence data
    const setAbsenceData = async () => {
      const response = await fetch("/api/coach-absence", {
        method: "POST",
        body: JSON.stringify({
          startDate: absence.startDate,
          endDate: absence.endDate,
        }),
      });
      const data = await response.json();
      setAbsence(data);
    };
    setAbsenceData();
  };

  return (
    <div className="Coach">
      <h1 className="h">Coach</h1>
      <form onSubmit={handleUpdateCoach}>
        <label>
          Name:
          <input
            className="input"
            type="text"
            name="name"
            value={coachData.name}
          />
        </label>
        <label>
          Email:
          <input
            className="input"
            type="email"
            name="email"
            value={coachData.email}
          />
        </label>
        <label>
          Experience:
          <textarea
            className="input"
            name="experience"
            value={coachData.experience}
          />
        </label>
        <label>
          Presence:
          <textarea
            className="input"
            name="presence"
            value={coachData.Presence}
          />
        </label>
        <label>
          Absence:
          <textarea
            className="input"
            name="Absence"
            value={coachData.Absence}
          />
        </label>
        <label>
          Certifications:
          <textarea
            className="input"
            name="certifications"
            value={coachData.certifications}
          />
        </label>
        <button className="button" type="submit">
          Update Coach
        </button>
      </form>
      <div>
        <h2>Coach Presence and Absence</h2>
        <p>
          Current Presence: {presence.online ? "Online" : "Offline"} (
          {presence.lastSeen ? `Last seen: ${presence.lastSeen}` : "Never"})
        </p>
        <button className="button" onClick={handleTogglePresence}>
          {presence.online ? "Go Offline" : "Go Online"}
        </button>
        <h3>Absence</h3>
        <p>
          Start Date:{" "}
          {absence.startDate
            ? absence.startDate.toLocaleDateString()
            : "Not set"}
          End Date:{" "}
          {absence.endDate ? absence.endDate.toLocaleDateString() : "Not set"}
        </p>
        <button className="button" onClick={handleSetAbsence}>
          Set Absence
        </button>
        <input
          className="input"
          type="date"
          value={absence.startDate}
          onChange={(e) =>
            setAbsence({ ...absence, startDate: new Date(e.target.value) })
          }
        />
        <input
          className="input"
          type="date"
          value={absence.endDate}
          onChange={(e) =>
            setAbsence({ ...absence, endDate: new Date(e.target.value) })
          }
        />
      </div>
    </div>
  );
}

export default Coachcalendrier;
