import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  rootElement
);
