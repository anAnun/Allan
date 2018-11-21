import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
unregister();
