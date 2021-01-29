import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import { MenuLinkType } from "../types/MenuItems";

const HomePage: React.FC = () => {
  return (
    <div className="app">
      <Header cartNumber={0} />
      <NavBar activeLinkId={MenuLinkType.home} />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
