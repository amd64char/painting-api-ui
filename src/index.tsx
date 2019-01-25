import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";

import './scss/app.scss';

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);