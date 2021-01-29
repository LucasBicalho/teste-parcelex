import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app">
          <Header cartNumber={0} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
