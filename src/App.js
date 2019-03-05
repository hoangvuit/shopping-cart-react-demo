import React, { Component } from "react";
import Homepage from "./views/Homepage";
import Cart from "./components/Cart";

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

  render() {
    const { cartItems, total } = this.state;
    console.log(cartItems);
    return (
      <div className="app">
        <Cart items={cartItems} total={total} />
        <Homepage addToCart={this.addToCart} />
      </div>
    );
  }
}

export default App;
