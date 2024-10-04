import React from "react";
import { useState } from "react";

function AncienAtheletes() {
  const [AncienAtheletes, setAncienAtheletes] = useState({
    name: "",
    email: "",
    swimmingHistory: "",
    achievements: "",
    contactInformation: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save ancien nageur data to database or API
  };

  return (
    <div>
      <h1>Ancien Nageur</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={AncienAtheletes.name}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                name: event.target.value,
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={AncienAtheletes.email}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                email: event.target.value,
              })
            }
          />
        </label>
        <label>
          Swimming History:
          <textarea
            value={AncienAtheletes.swimmingHistory}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                swimmingHistory: event.target.value,
              })
            }
          />
        </label>
        <label>
          Achievements:
          <textarea
            value={AncienAtheletes.achievements}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                achievements: event.target.value,
              })
            }
          />
        </label>
        <label>
          Contact Information:
          <textarea
            value={AncienAtheletes.contactInformation}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                contactInformation: event.target.value,
              })
            }
          />
        </label>
        <button type="submit">Save Ancien athelete</button>
      </form>
    </div>
  );
}

export default AncienAtheletes;
