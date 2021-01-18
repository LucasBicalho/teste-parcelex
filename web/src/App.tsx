import React from "react";
import "./App.css";

import { Header, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Header cartNumber={12} />
      <Footer />
    </div>
  );
}

export default App;
