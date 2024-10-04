import "./App.css";
import { Link } from "react-router-dom";
import Coachpresence from "./Pages/Coach/Coachpresence";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex items-center">
              <li className="mr-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  Affiliation
                </Link>
              </li>
              <li className="mr-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  Suivie
                </Link>
              </li>
              <li className="mr-6">
                <Link href="#" className="text-white hover:text-gray-300">
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
            Sportive Club
          </h1>
          <p className="hero__subtitle text-lg text-white leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
            Bienvenue a vous et a vos membre de famille .
          </p>
        </div>
      </div>
      <div className="mon_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="mon_grid_item    bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Football</h2>
          <img src="judo.jpg" />
          <p className="text-gray-600">
            Nous avons le grand plaisir de vous avoir parmi nous. De la part de
            tous les membres et de la direction, nous aimerions vous présenter
            nos salutations cordiales et vous souhaiter bonne chance. Bienvenue
            dans cette équipe ! Nous sommes ravis de vous avoir parmi nous.
          </p>
        </div>
        <div className=" mon_grid_item   bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Natation</h2>
          <img src="judo1.jpg" alt="Judo photo 1" />
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
        <div className=" mon_grid_item   bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Judo</h2>
          <img src="judo.jpg" url="photo" />
          <p className="text-gray-600">
            Le judo commence et se termine par le salut, appelé « rei ». Ce
            salut signifie la dignité et la paix intérieure avant comme après le
            combat. Il annonce aussi le respect des règles ainsi que la droiture
            et la sincérité. Le judoka devrait saluer lentement, gravement et
            faire en sorte de montrer le respect à celui qu'il salue. Un salut
            oublié ou mal exécuté, est le signe d'un judo mal compris et
            superficiel.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h5>About Us</h5>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Our Mission</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Social Media</h5>
              <div className="footer-social">
                <a href="#" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Phone</a>
                </li>
                <li>
                  <a href="#">Address</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; 2024 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
