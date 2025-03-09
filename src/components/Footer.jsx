import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="useful-links">
          <Link to="/solutions">Solutions</Link>
          <Link to="/actualites">Actualites</Link>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 DEEP COGNITION.</p>
        <p>
          Le contenu présent sur ce site est protégé par les lois relatives aux
          droits d'auteur. Tous les droits sont réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;