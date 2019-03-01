import React, { Component } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cart extends Component {
  state = {
    items: [],
    open: false
  };
  toggle = () => {
    const { open } = this.state;
    this.setState(() => ({
      open: !open
    }));
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.setState(() => ({
        items: nextProps.items
      }));
    }
  }
  render() {
    const { items, open } = this.state;
    const total = items.length;
    return (
      <div className={`cart ${open ? "open" : ""}`}>
        <div onClick={this.toggle}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart ({total})</span>
        </div>
        <div className="cart-items">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="picture">
                  <img src={item.props.picture} alt={item.props.title} />
                </div>
                <div className="info">
                  <h4>{item.props.title}</h4>
                  <span>$ {item.props.price}</span>
                </div>
              </div>
            ))
          ) : (
            <p>Cart is empty!</p>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
