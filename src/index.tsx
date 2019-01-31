import * as React from "react";
import * as ReactDOM from "react-dom";
import * as moment from "moment";
import { App } from "./components/app";


import './scss/app.scss';

const currentDate = moment().format('LL');
const apiBaseUrl = process.env.WEB_API;

ReactDOM.render(
  <App compiler="TypeScript" framework="React" currentDate={currentDate} apiBaseUrl={apiBaseUrl} />,
  document.getElementById("app")
);