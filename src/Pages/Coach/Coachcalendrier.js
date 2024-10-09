import React from "react";
import { useState } from "react";
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
    </div>
  );
}

export default Coachcalendrier;
