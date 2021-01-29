import React, { ReactElement } from "react";
import "./Sales.css";

import Product from "./Product";
import ProductType from "../types/Product";

type SalesProps = {
  title: ReactElement;
  products: Array<ProductType>;
};

const Sales: React.FC<SalesProps> = ({ title, products }) => {
  return (
    <section className="sales">
      {title}
      <div className="sales-products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Sales;
