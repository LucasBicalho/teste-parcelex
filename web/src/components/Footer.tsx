import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo">LOGO</div>

        <div className="footer-links-container">
          <a href="#" className="footer-link">
            Sobre Nós
          </a>
          <a href="#" className="footer-link">
            Perguntas Frequentes
          </a>
          <a href="#" className="footer-link">
            Termos e condições
          </a>
          <a href="#" className="footer-link">
            Pagamento Seguro
          </a>
          <a href="#" className="footer-link">
            Contato
          </a>
        </div>

        <div className="footer-socials-container">
          <a href="#" className="footer-social">
            <FaFacebookSquare />
          </a>
          <a href="#" className="footer-social">
            <FaInstagram />
          </a>
          <a href="#" className="footer-social">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
