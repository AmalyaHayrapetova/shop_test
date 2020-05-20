import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ShoppingCart from "./ShoppingCart";
// import Women from './Women';
// import Men from './Men';
// import Clothes from './Clothes';
import Accessories from "./Accessories";
import Product from "./ProductPage";
import SignIn from "./SignIn";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={ShoppingCart} />
        {/* <Route path="/women" component={Women}  />
        <Route path="/men" component={Men} />
        <Route path="/clothes" component={Clothes}  /> */}
        <Route path="/accessories" component={Accessories} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/account" component={SignIn} />
      </Switch>
    </App>
  </BrowserRouter>,
  rootElement
);
