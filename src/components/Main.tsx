import React, { useContext } from "react";
import "./Main.css";

import { AppContext, ENV } from "../App";
import Sales from "./Sales";
import Slider from "./Slider";
import { ProductTags } from "../types/Product";

const Main: React.FC = () => {
  const { ENV_VAR, productsContext } = useContext(AppContext);

  if (ENV_VAR === ENV.client) {
    const init = async () => {
      await productsContext.setProducts();
    };
    init();
  }

  const allProducts = productsContext.getProducts();
  const highlights = allProducts.filter((product) => product.highlight);
  const newReleases = allProducts.filter((product) =>
    product.tags.includes(ProductTags.NEW_RELEASE)
  );
  const superSales = allProducts.filter((product) =>
    product.tags.includes(ProductTags.SALE)
  );
  const otherProducts = allProducts.filter(
    (product) =>
      !product.highlight &&
      !product.tags.includes(ProductTags.NEW_RELEASE) &&
      !product.tags.includes(ProductTags.SALE)
  );

  const getSalesTitle = (black: string, red: string) => {
    return (
      <h1 className="sales-title">
        {black} <span className="sales-title-red">{red}</span>
      </h1>
    );
  };

  const newReleasesTitle = getSalesTitle("camisas", "lançamento");
  const superSalesTitle = getSalesTitle("super", "ofertas");
  const othersTitle = getSalesTitle("outras", "camisas");

  return (
    <main className="content">
      <Slider products={highlights} />

      <div className="sales-container container">
        <Sales title={newReleasesTitle} products={newReleases} />
        <Sales title={superSalesTitle} products={superSales} />
        <Sales title={othersTitle} products={otherProducts} />
      </div>
    </main>
  );
};

export default Main;
