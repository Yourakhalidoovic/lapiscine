import React, { useState, useEffect } from "react";
import "./App.css";
import { getAthletes, addAthlete } from "./api";

function App() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [showAffiliationDropdown, setShowAffiliationDropdown] =
    React.useState(false);
  const [showFollowUpDropdown, setShowFollowUpDropdown] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [athletes, setAthletes] = React.useState([
    { id: 1, name: "Nom Athlète 1", sport: "Football", presence: "Présent" },
    { id: 2, name: "Nom Athlète 2", sport: "Natation", presence: "Absent" },
  ]);
  const [performances, setPerformances] = React.useState([
    { id: 1, athleteId: 1, performance: "2 buts marqués", date: "2024-03-15" },
    {
      id: 2,
      athleteId: 2,
      performance: "100m en 58.2 secondes",
      date: "2024-03-10",
    },
  ]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [performanceSearchTerm, setPerformanceSearchTerm] = React.useState("");
  const [newAthlete, setNewAthlete] = React.useState({
    name: "",
    sport: "",
    presence: "Présent",
  });
  const [newPerformance, setNewPerformance] = React.useState({
    athleteId: "",
    performance: "",
    date: "",
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleAddAthlete = (e) => {
    e.preventDefault();
    if (newAthlete.name && newAthlete.sport) {
      setAthletes([...athletes, { ...newAthlete, id: athletes.length + 1 }]);
      setNewAthlete({ name: "", sport: "", presence: "Présent" });
    }
  };
  const filteredAthletes = athletes.filter(
    (athlete) =>
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const renderBadges = () => (
    <div className="flex justify-center space-x-4 mb-4">
      <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
        <i className="fas fa-futbol mr-1"></i> Football
      </span>
      <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
        <i className="fas fa-swimmer mr-1"></i> Natation
      </span>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "settings":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            } shadow-md rounded-lg p-6`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4">Paramètres</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Préférences d'affichage
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-blue-500"
                    } text-white px-4 py-2 rounded-md hover:opacity-80 transition duration-300`}
                  >
                    {darkMode ? "Mode Clair" : "Mode Sombre"}
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="notif_presence"
                    />
                    <span>Notifications de présence</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="notif_performance"
                    />
                    <span>Notifications de performance</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Langue</h3>
                <select
                  className={`w-full p-2 border rounded ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white"
                  }`}
                  name="language"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "coach":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
            } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4 text-[#1e40af]">
              Section Coach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2563eb]">
                  Football
                </h3>
                <p>Coach pour filles: Marie Dupont</p>
                <p>Coach pour garçons: Pierre Martin</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-[#3b82f6]">
                    Athlètes Football
                  </h4>
                  <table className="w-full border-collapse border">
                    <thead>
                      <tr>
                        <th className="border p-2">Équipe</th>
                        <th className="border p-2">Coach</th>
                        <th className="border p-2">Présence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Emma Bernard</td>
                        <td className="border p-2">Marie Dupont</td>
                        <td className="border p-2 text-green-500">Présent</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Lucas Martin</td>
                        <td className="border p-2">Pierre Martin</td>
                        <td className="border p-2 text-red-500">Absent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2563eb]">
                  Natation
                </h3>
                <p>Coach pour filles: Sophie Lefebvre</p>
                <p>Coach pour garçons: Thomas Dubois</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-[#3b82f6]">
                    Athlètes Natation
                  </h4>
                  <table className="w-full border-collapse border">
                    <thead>
                      <tr>
                        <th className="border p-2">Équipe</th>
                        <th className="border p-2">Coach</th>
                        <th className="border p-2">Présence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Julie Petit</td>
                        <td className="border p-2">Sophie Lefebvre</td>
                        <td className="border p-2 text-green-500">Présent</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Paul Durand</td>
                        <td className="border p-2">Thomas Dubois</td>
                        <td className="border p-2 text-red-500">Absent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Présence du Coach</h3>
              <p className="text-green-600 font-semibold">
                Présent aujourd'hui
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">
                Entraînements de la Semaine
              </h3>
              <ul className="list-disc pl-5">
                <li>Lundi: 18:00 - 20:00 - Entraînement Football</li>
                <li>Mercredi: 17:30 - 19:30 - Entraînement Natation</li>
                <li>Vendredi: 18:30 - 20:30 - Entraînement Mixte</li>
              </ul>
            </div>
          </div>
        );
      case "affiliationOldAthletes":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
            } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4">
              Affiliation des anciens athlètes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Option 1 : Affiliation des anciens athlètes
                </h3>
                <p>
                  Soumettez votre certificat médical pour la nouvelle année
                  sportive :
                </p>
                <div className="space-y-4 mt-4">
                  <div>
                    <label
                      htmlFor="athlete_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom de l'athlète
                    </label>
                    <input
                      type="text"
                      id="athlete_name"
                      name="athlete_name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="certificat_medical"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Certificat médical
                    </label>
                    <input
                      type="file"
                      id="certificat_medical"
                      name="certificat_medical"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Soumettre le certificat
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "affiliationNewAthletes":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
            } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4">
              Affiliation des nouvelles inscriptions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Option 2 : Nouvelles inscriptions
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date_naissance"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de naissance
                    </label>
                    <input
                      type="date"
                      id="date_naissance"
                      name="date_naissance"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sport
                    </label>
                    <select
                      id="sport"
                      name="sport"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option value="">Choisissez un sport</option>
                      <option value="football">Football</option>
                      <option value="natation">Natation</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="certificat_medical"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Certificat médical
                    </label>
                    <input
                      type="file"
                      id="certificat_medical"
                      name="certificat_medical"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="photo_identite"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Photo d'identité
                    </label>
                    <input
                      type="file"
                      id="photo_identite"
                      name="photo_identite"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      case "followUpPresence":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
            } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4">
              Présence des athlètes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Ajouter un athlète
                </h3>
                <form onSubmit={handleAddAthlete} className="mb-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Nom de l'athlète"
                    value={newAthlete.name}
                    onChange={(e) =>
                      setNewAthlete({ ...newAthlete, name: e.target.value })
                    }
                    className={`w-full p-2 border rounded ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  />
                  <select
                    value={newAthlete.sport}
                    onChange={(e) =>
                      setNewAthlete({ ...newAthlete, sport: e.target.value })
                    }
                    className={`w-full p-2 border rounded ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  >
                    <option value="">Sélectionner un sport</option>
                    <option value="Football">Football</option>
                    <option value="Natation">Natation</option>
                  </select>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Ajouter
                  </button>
                </form>

                <h3 className="text-xl font-semibold mb-2">
                  Rechercher des athlètes
                </h3>
                <input
                  type="text"
                  placeholder="Rechercher un athlète"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full p-2 border rounded mb-4 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white"
                  }`}
                />
                <table
                  className={`w-full border-collapse border ${
                    darkMode ? "border-gray-600" : "border-[#3b82f6]"
                  }`}
                >
                  <thead>
                    <tr>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Nom
                      </th>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Sport
                      </th>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Présence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAthletes.map((athlete) => (
                      <tr key={athlete.id}>
                        <td
                          className={`border p-2 ${
                            darkMode ? "border-gray-600" : "border-gray-200"
                          }`}
                        >
                          {athlete.name}
                        </td>
                        <td
                          className={`border p-2 ${
                            darkMode ? "border-gray-600" : "border-gray-200"
                          }`}
                        >
                          {athlete.sport}
                        </td>
                        <td
                          className={`border p-2 ${
                            darkMode ? "border-gray-600" : "border-gray-200"
                          }`}
                        >
                          <select
                            value={athlete.presence}
                            onChange={(e) => {
                              const updatedAthletes = athletes.map((a) =>
                                a.id === athlete.id
                                  ? { ...a, presence: e.target.value }
                                  : a
                              );
                              setAthletes(updatedAthletes);
                            }}
                            className={`w-full p-1 rounded ${
                              darkMode ? "bg-gray-700 text-white" : "bg-white"
                            }`}
                          >
                            <option value="Présent">Présent</option>
                            <option value="Absent">Absent</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "followUpPerformance":
        return (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
            } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
          >
            {renderBadges()}
            <h2 className="text-2xl font-semibold mb-4">
              Performances des athlètes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Ajouter une performance
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (
                      newPerformance.athleteId &&
                      newPerformance.performance &&
                      newPerformance.date
                    ) {
                      setPerformances([
                        ...performances,
                        { ...newPerformance, id: performances.length + 1 },
                      ]);
                      setNewPerformance({
                        athleteId: "",
                        performance: "",
                        date: "",
                      });
                    }
                  }}
                  className="mb-6 space-y-4"
                >
                  <select
                    value={newPerformance.athleteId}
                    onChange={(e) =>
                      setNewPerformance({
                        ...newPerformance,
                        athleteId: e.target.value,
                      })
                    }
                    className={`w-full p-2 border rounded ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  >
                    <option value="">Sélectionner un athlète</option>
                    {athletes.map((athlete) => (
                      <option key={athlete.id} value={athlete.id}>
                        {athlete.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Performance"
                    value={newPerformance.performance}
                    onChange={(e) =>
                      setNewPerformance({
                        ...newPerformance,
                        performance: e.target.value,
                      })
                    }
                    className={`w-full p-2 border rounded ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  />
                  <input
                    type="date"
                    value={newPerformance.date}
                    onChange={(e) =>
                      setNewPerformance({
                        ...newPerformance,
                        date: e.target.value,
                      })
                    }
                    className={`w-full p-2 border rounded ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Ajouter
                  </button>
                </form>

                <h3 className="text-xl font-semibold mb-2">
                  Rechercher des performances
                </h3>
                <input
                  type="text"
                  placeholder="Rechercher une performance"
                  value={performanceSearchTerm}
                  onChange={(e) => setPerformanceSearchTerm(e.target.value)}
                  className={`w-full p-2 border rounded mb-4 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white"
                  }`}
                />
                <table
                  className={`w-full border-collapse border ${
                    darkMode ? "border-gray-600" : "border-[#3b82f6]"
                  }`}
                >
                  <thead>
                    <tr>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Nom
                      </th>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Performance
                      </th>
                      <th
                        className={`border p-2 ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {performances
                      .filter((perf) => {
                        const athlete = athletes.find(
                          (a) => a.id === parseInt(perf.athleteId)
                        );
                        return (
                          athlete?.name
                            .toLowerCase()
                            .includes(performanceSearchTerm.toLowerCase()) ||
                          perf.performance
                            .toLowerCase()
                            .includes(performanceSearchTerm.toLowerCase())
                        );
                      })
                      .map((performance) => {
                        const athlete = athletes.find(
                          (a) => a.id === parseInt(performance.athleteId)
                        );
                        return (
                          <tr key={performance.id}>
                            <td
                              className={`border p-2 ${
                                darkMode ? "border-gray-600" : "border-gray-200"
                              }`}
                            >
                              {athlete?.name}
                            </td>
                            <td
                              className={`border p-2 ${
                                darkMode ? "border-gray-600" : "border-gray-200"
                              }`}
                            >
                              {performance.performance}
                            </td>
                            <td
                              className={`border p-2 ${
                                darkMode ? "border-gray-600" : "border-gray-200"
                              }`}
                            >
                              {performance.date}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            {renderBadges()}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
                } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6] hover:shadow-lg transition-shadow duration-300`}
              >
                <h2 className="text-2xl font-semibold mb-4">Football</h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  Découvrez nos talents en football, des anciens champions aux
                  nouvelles étoiles montantes.
                </p>
                <img
                  src="/images/football-team.jpg"
                  alt="Équipe de football de Challenge Academy"
                  className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-90 transition-opacity duration-300"
                />
                <ul
                  className={`list-disc pl-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li>5 championnats régionaux remportés</li>
                  <li>3 joueurs sélectionnés en équipe nationale</li>
                  <li>Programme de formation pour jeunes talents</li>
                </ul>
              </section>
              <section
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
                } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6] hover:shadow-lg transition-shadow duration-300`}
              >
                <h2 className="text-2xl font-semibold mb-4">Natation</h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  Plongez dans l'univers de nos nageurs, des médaillés
                  olympiques aux futurs champions.
                </p>
                <img
                  src="/images/swimming-team.jpg"
                  alt="Équipe de natation de Challenge Academy"
                  className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-90 transition-opacity duration-300"
                />
                <ul
                  className={`list-disc pl-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li>2 médailles olympiques</li>
                  <li>10 records nationaux battus</li>
                  <li>Programme d'entraînement de haut niveau</li>
                </ul>
              </section>
            </div>
            <section
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-[#f0f9ff]"
              } shadow-md rounded-lg p-6 border-t-4 border-[#3b82f6]`}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Nos Athlètes Vedettes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <img
                    src="/images/athlete1.jpg"
                    alt="Marie Dupont, footballeuse"
                    className="w-full h-32 object-cover rounded-full mb-2"
                  />
                  <p className="font-semibold">Marie Dupont</p>
                  <p className="text-sm text-gray-600">Football</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/athlete2.jpg"
                    alt="Thomas Martin, nageur"
                    className="w-full h-32 object-cover rounded-full mb-2"
                  />
                  <p className="font-semibold">Thomas Martin</p>
                  <p className="text-sm text-gray-600">Natation</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/athlete3.jpg"
                    alt="Sophie Lefebvre, footballeuse"
                    className="w-full h-32 object-cover rounded-full mb-2"
                  />
                  <p className="font-semibold">Sophie Lefebvre</p>
                  <p className="text-sm text-gray-600">Football</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/athlete4.jpg"
                    alt="Lucas Dubois, nageur"
                    className="w-full h-32 object-cover rounded-full mb-2"
                  />
                  <p className="font-semibold">Lucas Dubois</p>
                  <p className="text-sm text-gray-600">Natation</p>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div
      className={`font-sans ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#f8fafc]"
      }`}
    >
      <nav
        className={`${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-[#2563eb] to-[#3b82f6]"
        } p-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <i className="fas fa-trophy mr-2"></i>Challenge Academy
          </div>
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href="#"
                onClick={() => setActiveSection("home")}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/flat-round/50/home--v1.png"
                  alt="home--v1"
                />
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveSection("coach")}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <img
                  width="28"
                  height="2"
                  src="https://img.icons8.com/color/48/coach.png"
                  alt="coach"
                />
                <i className="fas fa-user-tie mr-1"></i>Coach
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAffiliationDropdown(!showAffiliationDropdown);
                }}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/color/48/groups.png"
                  alt="groups"
                />
                <i className="fas fa-users mr-1"></i>Affiliation
              </a>
              {showAffiliationDropdown && (
                <ul
                  className={`absolute left-0 mt-2 w-48 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } rounded-md shadow-lg`}
                >
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("affiliationOldAthletes");
                        setShowAffiliationDropdown(false);
                      }}
                      className={`block px-4 py-2 ${
                        darkMode
                          ? "text-white hover:bg-gray-600"
                          : "text-gray-800 hover:bg-blue-100"
                      }`}
                    >
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-filled/50/attendance-mark.png"
                        alt="attendance-mark"
                      />
                      <i className="fas fa-user-check mr-1"></i>Anciens athlètes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("affiliationNewAthletes");
                        setShowAffiliationDropdown(false);
                      }}
                      className={`block px-4 py-2 ${
                        darkMode
                          ? "text-white hover:bg-gray-600"
                          : "text-gray-800 hover:bg-blue-100"
                      }`}
                    >
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/nolan/64/add.png"
                        alt="add"
                      />
                      <i className="fas fa-user-plus mr-1"></i>Nouvelles
                      inscriptions
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowFollowUpDropdown(!showFollowUpDropdown);
                }}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/flat-round/50/graph.png"
                  alt="graph"
                />
                <i className="fas fa-chart-line mr-1"></i>Suivi
              </a>
              {showFollowUpDropdown && (
                <ul
                  className={`absolute left-0 mt-2 w-48 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } rounded-md shadow-lg`}
                >
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("followUpPresence");
                        setShowFollowUpDropdown(false);
                      }}
                      className={`block px-4 py-2 ${
                        darkMode
                          ? "text-white hover:bg-gray-600"
                          : "text-gray-800 hover:bg-blue-100"
                      }`}
                    >
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-glyphs/30/attendance-mark.png"
                        alt="attendance-mark"
                      />
                      <i className="fas fa-clipboard-check mr-1"></i>Présence
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("followUpPerformance");
                        setShowFollowUpDropdown(false);
                      }}
                      className={`block px-4 py-2 ${
                        darkMode
                          ? "text-white hover:bg-gray-600"
                          : "text-gray-800 hover:bg-blue-100"
                      }`}
                    >
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/color/48/gold-medal--v1.png"
                        alt="gold-medal--v1"
                      />
                      <i className="fas fa-medal mr-1"></i>Performances
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveSection("settings")}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/cotton/128/settings--v1.png"
                  alt="settings--v1"
                />
                <i className="fas fa-cog mr-1"></i>Paramètres
              </a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className={`${
                  darkMode ? "bg-gray-600" : "bg-blue-500"
                } text-white px-3 py-1 rounded-md hover:opacity-80 transition duration-300`}
              >
                <img
                  width="34"
                  height="34"
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-torch-ancient-greek-mythology-monsters-and-creatures-flaticons-lineal-color-flat-icons-2.png"
                  alt="external-torch-ancient-greek-mythology-monsters-and-creatures-flaticons-lineal-color-flat-icons-2"
                />
                <i
                  className={`fas ${darkMode ? "fa-sun" : "fa-moon"} mr-1`}
                ></i>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main
        className={`container mx-auto mt-8 px-4 ${
          darkMode ? "text-white" : "text-[#1e293b]"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenue à Challenge Academy
        </h1>
        {renderBadges()}
        <p
          className={`text-center ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-8`}
        >
          Découvrez l'excellence sportive à travers notre portfolio de talents
          exceptionnels en football et en natation.
        </p>
        {renderContent()}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Événements à venir</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">15 Juin 2024:</span> Tournoi de
              football inter-académies
            </li>
            <li>
              <span className="font-semibold">22 Juillet 2024:</span>{" "}
              Compétition de natation régionale
            </li>
            <li>
              <span className="font-semibold">10 Août 2024:</span> Journée
              portes ouvertes et démonstrations
            </li>
            <li>
              <span className="font-semibold">5 Septembre 2024:</span> Début de
              la nouvelle saison sportive
            </li>
          </ul>
        </div>
      </main>
      <footer
        className={`${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-[#2563eb] to-[#3b82f6]"
        } text-white mt-12 py-6`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Notre Histoire</h3>
              <p className="text-sm">
                Challenge Academy a été fondée avec la vision de former les
                champions de demain.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Notre Équipe</h3>
              <p className="text-sm">
                Nos entraîneurs et staff sont dédiés à la réussite de nos
                athlètes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-sm">Téléphone: +33 1 23 45 67 89</p>
              <p className="text-sm">Email: contact@challengeacademy.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="p-2 text-gray-800 rounded"
                  name="email"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Challenge Academy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
