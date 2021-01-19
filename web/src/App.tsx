import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { Header, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header cartNumber={12} />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
