import React, { createContext } from "react";
import "./App.css";

import ProductsContext from "./contexts/Products";

import HomePage from "./pages/HomePage";

export enum ENV {
  unset,
  server,
  client,
}

type AppContextType = {
  ENV_VAR: ENV;
  productsContext: ProductsContext;
};

export const AppContext = createContext<AppContextType>({
  ENV_VAR: ENV.unset,
  productsContext: new ProductsContext(),
});

const App: React.FC<AppContextType> = ({ ENV_VAR, productsContext }) => {
  return (
    <AppContext.Provider value={{ ENV_VAR, productsContext }}>
      <productsContext.Provider value={productsContext.products}>
        <HomePage />
      </productsContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
