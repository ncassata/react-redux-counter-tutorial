import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "./styles/style.scss";

import { createStore } from "redux";
import allReducers from "./reducers/";

import { Provider } from "react-redux";

const store = createStore(allReducers);

const ROOT = document.getElementById("root");

const app = App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
