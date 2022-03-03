import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state/store/configureStore";
import { Provider } from "react-redux";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
