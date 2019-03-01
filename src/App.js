import React, { Component } from "react";
import Homepage from "./views/Homepage";
import Cart from "./components/Cart";

import "./assets/sass/app.scss";

class App extends Component {
  state = {
    cartItems: []
  };
  addToCart = e => {
    const item = e;
    let { cartItems } = this.state;
    cartItems.push(item);
    this.setState(() => ({
      cartItems
    }));
  };

  render() {
    const { cartItems } = this.state;
    return (
      <div className="app">
        <Cart items={cartItems} />
        <Homepage addToCart={this.addToCart} />
      </div>
    );
  }
}

export default App;
