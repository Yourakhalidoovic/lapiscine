import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to the backend API to subscribe the user
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const photos = [
    { src: "football.jpg", alt: "Photo 1" },
    { src: "challange_academy.png", alt: "Photo 2" },
    { src: "photo3.jpg", alt: "Photo 3" },
    // Add more photos to the array
  ];
  return (
    <div className="App">
      <header className="appHeader">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex items-center">
              <li className="mr-6">
                <Link
                  to="/Affiliation"
                  className="text-white hover:text-gray-300"
                >
                  Affiliation
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/Suivie" className="text-white hover:text-gray-300">
                  Suivie
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/Coach" className="text-white hover:text-gray-300">
                  Coach
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(https://picsum.photos/2000/1000)" }}
      >
        <div className="hero container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h1 className="hero__title text-3xl font-bold text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Challange Academy
          </h1>
          <p className="hero__subtitle text-lg text-white leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
            Bienvenue a vous et a vos membre de famille .
          </p>
        </div>
      </div>
      <div className="mon_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="mon_grid_item1   bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Football</h2>

          <p className="text-gray-600">
            Nous avons le grand plaisir de vous avoir parmi nous. De la part de
            tous les membres et de la direction, nous aimerions vous présenter
            nos salutations cordiales et vous souhaiter bonne chance. Bienvenue
            dans cette équipe ! Nous sommes ravis de vous avoir parmi nous.
          </p>
        </div>
        <div className=" mon_grid_item2   bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Natation</h2>

          <p className="text-gray-600">
            Les entraînements de Natation Sportive sont organisés par groupe de
            niveau et dirigés par des entraîneurs diplômés d'État. Ce sont les
            entraîneurs qui vous conseillent et vous affectent dans telle ou
            telle ligne en fonction de votre niveau. Vous pouvez participer à
            autant d'entrainements que vous désirez dans les créneaux proposés
            de votre groupe de niveau. Notre souhait le plus cher est bien
            entendu de vous donner l'envie de venir le plus souvent possible.
          </p>
        </div>
        <div className="photo-container">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="photo-item"
            />
          ))}
        </div>
      </div>
      <footer className="footer">
        <div>
          <p>Abonnez vous a notre newsletter ! </p>
          <form onSubmit={handleSubmit}>
            <input
              className="newsletter-input "
              type="email"
              placeholder=" @ email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="subscribe-button " type="submit">
              Subscribe
            </button>
          </form>
          {success ? <p>Thank you for subscribing!</p> : null}
          {error ? <p>Error: {error}</p> : null}
        </div>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h5>About Us</h5>
              <ul>
                <li>
                  <Link to="/history">Our Story</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/mission">Our Mission </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to="/Affiliation">Affiliation</Link>
                </li>
                <li>
                  <Link to="/Suivie">Suivie</Link>
                </li>
                <li>
                  <Link to="/Coach">Coach</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Social Media</h5>
              <div className="footer-social">
                <a href="#" target="_blank">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook-new"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/whatsapp.png"
                    alt="whatsapp"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/twitter--v1.png"
                    alt="twitter--v1"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-new"
                  />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <Link to="/Email">Email</Link>
                </li>
                <li>
                  <Link to="/Phone">Phone</Link>
                </li>
                <li>
                  <Link to="/Address">Address</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; 2024 Challange Academy All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
