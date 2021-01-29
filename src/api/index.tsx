import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App, { ENV } from "../App";
import Template from "../Template";
import AppComponent from "./AppStyles";

export const getAppHTML = async () => {
  const body = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter>
        <App ENV_VAR={ENV.server} />
      </StaticRouter>
    </React.StrictMode>
  );

  const stylesArray = await AppComponent.getStyles();
  const styles = stylesArray
    .reduce((totalStyles, style) => (totalStyles += "\n" + style), "")
    .trim();

  const html = Template.getHTML(body, styles, "");
  return html;
};
