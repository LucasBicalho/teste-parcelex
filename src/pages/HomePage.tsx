import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <div className="app">
      <Header cartNumber={0} />
      <Footer />
    </div>
  );
};

export default HomePage;
