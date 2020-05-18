import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ShoppingCart from "./SignIn";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
        </Switch>
      </Router>
    );
  }
}
