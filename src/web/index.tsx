import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App, { ENV } from "../App";

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App ENV_VAR={ENV.client} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
