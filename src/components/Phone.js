// Phone.js
import React from "react";
import "./Phone.css";
function Phone() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Phone Numbers</h1>
        <p>Call us at:</p>
        <ul>
          <li>+1 (123) 456-7890</li>
          <li>+1 (987) 654-3210</li>
        </ul>
      </div>
    </div>
  );
}

export default Phone;
