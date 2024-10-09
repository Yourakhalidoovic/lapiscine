import React from "react";
import { useState } from "react";
import "./AncienAtheletes.css";

function AncienAtheletes() {
  const [AncienAtheletes, setAncienAtheletes] = useState({
    name: "",
    email: "",
    History: "",
    achievements: "",
    contactInformation: "",
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    // Save ancien nageur data to database or API
  };
  const [NouveauAtheletes, setNouveauAtheletes] = useState({
    name: "",
    dateOfbirth: "",
    telephone: "",
    codePostal: "",
    adresse: "",
    email: "",
    Goals: "",
    contactInformation: "",
  });
  const [document, setDocument] = useState({});

  const handleAddDocument = () => {
    // Ajout du document à la base de données
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDocument({ ...document, [name]: value });
  };

  return (
    <div className="atheletes">
      <h1 className="h">Ancien Athelete</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="input"
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
            className="input"
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
          History:
          <textarea
            className="input"
            value={AncienAtheletes.swimmingHistory}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                History: event.target.value,
              })
            }
          />
        </label>
        <label>
          Achievements:
          <textarea
            className="input"
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
            className="input"
            value={AncienAtheletes.contactInformation}
            onChange={(event) =>
              setAncienAtheletes({
                ...AncienAtheletes,
                contactInformation: event.target.value,
              })
            }
          />
        </label>
        <div className="input">
          <h2>Ajouter le nouveaux certificat medical </h2>
          <form className="AddDocumentButton">
            <label>Nom du document :</label>
            <input
              type="text"
              name="name"
              value={document.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Type de document :</label>
            <select
              name="type"
              value={document.type}
              onChange={handleInputChange}
            >
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
              <option value="xlsx">XLSX</option>
            </select>
            <br />
            <label>Fichier :</label>
            <input
              className="custom-file-input"
              type="file"
              name="file"
              onChange={handleInputChange}
            />
            <br />

            <button className="custom-file-input" onClick={handleAddDocument}>
              Ajouter le document
            </button>
          </form>
        </div>
        {errors && (
          <ul>
            {Object.keys(errors).map((key, index) => (
              <li key={index}>{errors[key]}</li>
            ))}
          </ul>
        )}
        <button className="button" type="submit">
          Save Ancien athelete
        </button>
      </form>

      <h1 className="h">Nouveaux Athelete</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="input"
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
          Date of birth:
          <input
            className="input"
            type="text"
            value={NouveauAtheletes.dateOfbirth}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                dateOfbirth: event.target.value,
              })
            }
          />
        </label>
        <label>
          Adresse:
          <input
            className="input"
            type="text"
            value={NouveauAtheletes.adresse}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                adresse: event.target.value,
              })
            }
          />
        </label>
        <label>
          Code Postal:
          <input
            className="input"
            type="text"
            value={NouveauAtheletes.codePostal}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                codePostal: event.target.value,
              })
            }
          />
        </label>
        <label>
          Telephone:
          <input
            className="input"
            type="text"
            value={NouveauAtheletes.telephone}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                telephone: event.target.value,
              })
            }
          />
        </label>

        <label>
          Email:
          <input
            className="input"
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
          Goals:
          <textarea
            className="input"
            value={NouveauAtheletes.swimmingGoals}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                Goals: event.target.value,
              })
            }
          />
        </label>
        <label>
          Contact Information:
          <textarea
            className="input"
            value={NouveauAtheletes.contactInformation}
            onChange={(event) =>
              setNouveauAtheletes({
                ...NouveauAtheletes,
                contactInformation: event.target.value,
              })
            }
          />
        </label>
        <div className="input">
          <h2>Ajouter les documents d'inscriptions</h2>
          <form className="AddDocumentButton">
            <label>Nom du document :</label>
            <input
              type="text"
              name="name"
              value={document.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Type de document :</label>
            <select
              name="type"
              value={document.type}
              onChange={handleInputChange}
            >
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
              <option value="xlsx">XLSX</option>
            </select>
            <br />
            <label>Fichier :</label>
            <input
              className="custom-file-input"
              type="file"
              name="file"
              onChange={handleInputChange}
            />
            <br />
            <button className="custom-file-input" onClick={handleAddDocument}>
              Ajouter le document
            </button>
          </form>
        </div>
        {errors && (
          <ul>
            {Object.keys(errors).map((key, index) => (
              <li key={index}>{errors[key]}</li>
            ))}
          </ul>
        )}
        <button className="button" type="submit">
          Save Nouveaux Atheletes
        </button>
      </form>
    </div>
  );
}

export default AncienAtheletes;
