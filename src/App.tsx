import React, { createContext } from "react";
import "./App.css";


import HomePage from "./pages/HomePage";


const App: React.FC<AppContextType> = ({ ENV_VAR, productsContext }) => {
  return (
        <HomePage />
  );
};

export default App;
