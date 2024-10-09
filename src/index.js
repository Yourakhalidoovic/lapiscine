import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AncienAtheletes from "./Pages/Afiiliation/AncienAtheletes";
import NouveauAthletes from "./Pages/Afiiliation/NouveauAthletes";
import Performance from "./Pages/Suivie/Performance";
import Presence from "./Pages/Suivie/Presence";

import Coachcalendrier from "./Pages/Coach/Coachcalendrier";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Affiliation",
    element: <AncienAtheletes />,
  },
  {
    path: "/Affiliation",
    element: <NouveauAthletes />,
  },
  {
    path: "/Suivie",
    element: <Performance />,
  },
  {
    path: "/Suivie",
    element: <Presence />,
  },
  {
    path: "Coach/",
    element: <Coachcalendrier />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
