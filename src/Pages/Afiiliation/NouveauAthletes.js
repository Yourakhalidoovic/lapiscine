import React from "react";
import { useState } from "react";

function NouveauAthletes() {
  const [NouveauAtheletes, setNouveauAtheletes] = useState({
    name: "",
    email: "",
    swimmingGoals: "",
    contactInformation: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save nouveaux atheletes data to database or API
  };

  return (
    <div>
      <h1>Nouveaux Nageur</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={NouveauAtheletes.name}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                name: event.target.value,
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={NouveauAtheletes.email}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                email: event.target.value,
              })
            }
          />
        </label>
        <label>
          Swimming Goals:
          <textarea
            value={NouveauAtheletes.swimmingGoals}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                swimmingGoals: event.target.value,
              })
            }
          />
        </label>
        <label>
          Contact Information:
          <textarea
            value={NouveauAtheletes.contactInformation}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                contactInformation: event.target.value,
              })
            }
          />
        </label>
        <button type="submit">Save Nouveaux Atheletes</button>
      </form>
    </div>
  );
}

export default NouveauAthletes;
