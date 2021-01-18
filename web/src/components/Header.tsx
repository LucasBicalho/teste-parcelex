import React from "react";
import "./Header.css";

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

type HeaderProps = {
  cartNumber: number;
};

const Header: React.FC<HeaderProps> = ({ cartNumber }) => {
  return (
    <header className="container header">
      <a href="#" className="link-unset logo header-logo">
        LOGO
      </a>
      <div className="header-links-container">
        <a href="#" className="link-unset header-link">
          <FaShoppingCart />{" "}
          <span className="header-cart-number">{cartNumber}</span>
        </a>
        <a href="#" className="link-unset header-link">
          <FaUserAlt />
        </a>
      </div>
    </header>
  );
};

export default Header;
