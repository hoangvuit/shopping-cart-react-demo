import React, { Component } from "react";
import Homepage from "./views/Homepage";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import ErrorBoundary from "./components/ErrorBoundary";

import "./assets/sass/app.scss";

class App extends Component {
  state = {
    cartItems: {},
    total: 0
  };
  addToCart = item => {
    let cartItems = { ...this.state.cartItems };
    const id = item.id;
    if (cartItems[id]) {
      cartItems[id] = {
        ...cartItems[id],
        quantity: cartItems[id].quantity + 1
      };
    } else {
      cartItems[id] = { ...item, quantity: 1 };
    }

    this.setState(state => ({
      cartItems: cartItems,
      total: state.total + 1
    }));
  };

  onRouteChange;

  render() {
    const { cartItems, total } = this.state;
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="main-content">
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home" exact>
                <Homepage addToCart={this.addToCart} />
              </Route>
              <Route path="/checkout" exact component={Checkout} />
            </Switch>
          </div>
          <ErrorBoundary>
            <Cart items={cartItems} total={total} />
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
