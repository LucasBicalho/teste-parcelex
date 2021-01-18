import React from "react";
import "./App.css";

import { Header } from "./components";

function App() {
  return (
    <div className="app">
      <Header cartNumber={12} />
    </div>
  );
}

export default App;
