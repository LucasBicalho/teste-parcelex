import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

type HeaderProps = {
  cartNumber: number;
};

const Header: React.FC<HeaderProps> = ({ cartNumber }) => {
  return (
    <header className="container header">
      <Link to="/" className="link logo header-logo">
        LOGO
      </Link>
      <div className="header-links-container">
        <Link to="/" className="link header-link">
          <FaShoppingCart />{" "}
          <span className="header-cart-number">{cartNumber}</span>
        </Link>
        <Link to="/" className="link header-link">
          <FaUserAlt />
        </Link>
      </div>
    </header>
  );
};

export default Header;
