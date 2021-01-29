import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App, { ENV } from "../App";
import ProductsContext from "../contexts/Products";

class ClientProductsContext extends ProductsContext {
  async setProducts() {
    const localProducts = localStorage.getItem("products") || "[]";
    this.products = JSON.parse(localProducts);
    return this.products;
  }
}
const clientProductsContext = new ClientProductsContext();

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App ENV_VAR={ENV.client} productsContext={clientProductsContext} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
