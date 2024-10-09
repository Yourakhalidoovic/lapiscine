import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our About Us page!</p>
      <ul>
        <li>
          <Link to="/team">Meet Our Team</Link>
        </li>
        <li>
          <Link to="/history">Our History</Link>
        </li>
        <li>
          <Link to="/mission">Our Mission</Link>
        </li>
        <li>
          <Link to="/contact">Get in Touch</Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
