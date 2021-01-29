import React, { createContext } from "react";
import "./App.css";


import HomePage from "./pages/HomePage";

export enum ENV {
  unset,
  server,
  client,
}

type AppContextType = {
  ENV_VAR: ENV;
};

export const AppContext = createContext<AppContextType>({
  ENV_VAR: ENV.unset,
  productsContext: new ProductsContext(),
});

const App: React.FC<AppContextType> = ({ ENV_VAR }) => {
  return (
    <AppContext.Provider value={{ ENV_VAR }}>
        <HomePage />
    </AppContext.Provider>
  );
};

export default App;
