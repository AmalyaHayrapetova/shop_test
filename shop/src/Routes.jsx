import React from 'react';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';
import Home from './App.js';
import ShoppingCart from './ShoppingCart.jsx';

function Routes(){
    return (
    <Router>
      <div>
        <Switch>
           <Route path="/" component = {Home}>
           <Redriect from='/shopping-cart/' to="/home/" />
           <Route path="/shopping-cart/" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
    )
}
