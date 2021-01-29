import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App, { ENV } from "../App";
import ProductsContext from "../contexts/Products";
import connectionService from "../services/connection";
import Template from "../Template";
import { ProductTags } from "../types/Product";
import AppComponent from "./AppStyles";

class ServerProductsContext extends ProductsContext {
  async setProducts() {
    const response = await connectionService.get("/products", {
      params: {
        filter: JSON.stringify({
          $or: [
            { highlight: true },
            { tags: { $in: [ProductTags.SALE, ProductTags.NEW_RELEASE] } },
          ],
        }),
      },
    });
    const othersResponse = await connectionService.get("/products", {
      params: {
        filter: JSON.stringify({
          tags: { $nin: [ProductTags.SALE, ProductTags.NEW_RELEASE] },
        }),
        options: JSON.stringify({
          limit: 12,
        }),
      },
    });
    const products = response.data;
    this.products = products.concat(othersResponse.data);
    return this.products;
  }
}
const serverProductsContext = new ServerProductsContext();

export const getAppHTML = async () => {
  await serverProductsContext.setProducts();
  const products = serverProductsContext.getProducts();
  const scripts = `
    <script>
      localStorage.setItem('products', '${JSON.stringify(products)}')
    </script>
  `;

  const body = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter>
        <App ENV_VAR={ENV.server} productsContext={serverProductsContext} />
      </StaticRouter>
    </React.StrictMode>
  );

  const stylesArray = await AppComponent.getStyles();
  const styles = stylesArray
    .reduce((totalStyles, style) => (totalStyles += "\n" + style), "")
    .trim();

  const html = Template.getHTML(body, styles, scripts);
  return html;
};
