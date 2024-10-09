import React from "react";
import { Link } from "react-router-dom";
function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us through various channels:</p>
      <ul>
        <li>
          <Link to="/Email">Email Us</Link>
        </li>

        <li>
          <Link href="/phone">Phone Numbers</Link>
        </li>
        <li>
          <Link href="/Address">Our Address</Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
