import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

import Goods from "./features/goods/Goods";
import Cart from "./features/cart/Cart";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Goods />
              </React.Fragment>
            )}
          />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
