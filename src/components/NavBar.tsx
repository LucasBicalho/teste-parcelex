import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import SearchBar from "./SearchBar";
import menuItems, { MenuLinkType } from "../types/MenuItems";

type NavBarProps = {
  activeLinkId: MenuLinkType;
};

const NavBar: React.FC<NavBarProps> = ({ activeLinkId }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <nav className={open ? "container navbar dropdown" : "container navbar"}>
      <button className="navbar-open-button" onClick={handleClick}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <ul className="navbar-dropdown-menu">
          {menuItems.map((link, index) => (
            <li key={index} className="navbar-dropdown-link-container">
              <Link
                to={link.path}
                className={
                  activeLinkId === link.id
                    ? "link navbar-link selected"
                    : "link navbar-link"
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="navbar-menu navbar-menu-hide">
        {menuItems.map((link, index) => (
          <li key={index} className="navbar-link-container">
            <Link
              to={link.path}
              className={
                activeLinkId === link.id
                  ? "link navbar-link selected"
                  : "link navbar-link"
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
