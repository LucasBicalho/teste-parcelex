import React, { Context, createContext, FC, ProviderProps } from "react";
import ProductType from "../types/Product";

class ProductsContext {
  context: Context<Array<ProductType>>;
  products: Array<ProductType>;

  constructor() {
    this.context = createContext(new Array<ProductType>());
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  async setProducts() {
    this.products = [];
    return this.products;
  }

  Provider: FC<ProviderProps<Array<ProductType>>> = ({ children, value }) => {
    return (
      <this.context.Provider value={value}>{children}</this.context.Provider>
    );
  };
}

export default ProductsContext;
