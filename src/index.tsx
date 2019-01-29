import * as React from "react";
import * as ReactDOM from "react-dom";
import * as moment from "moment";
import { App } from "./components/app";

import './scss/app.scss';

const currentDate = moment().format('LL');

ReactDOM.render(
  <App compiler="TypeScript" framework="React" currentDate={currentDate} />,
  document.getElementById("app")
);