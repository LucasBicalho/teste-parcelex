import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo">LOGO</div>

        <div className="footer-links-container">
          <Link to="/" className="footer-link">
            Sobre Nós
          </Link>
          <Link to="/" className="footer-link">
            Perguntas Frequentes
          </Link>
          <Link to="/" className="footer-link">
            Termos e condições
          </Link>
          <Link to="/" className="footer-link">
            Pagamento Seguro
          </Link>
          <Link to="/" className="footer-link">
            Contato
          </Link>
        </div>

        <div className="footer-socials-container">
          <Link to="/" className="footer-social">
            <FaFacebookSquare />
          </Link>
          <Link to="/" className="footer-social">
            <FaInstagram />
          </Link>
          <Link to="/" className="footer-social">
            <FaTwitterSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
