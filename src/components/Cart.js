import React, { Component } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = props => (
  <div className="cart-item">
    <div className="picture">
      <img src={props.picture} alt={props.title} />
    </div>
    <div className="info">
      <h4>{props.title}</h4>
      <span>$ {props.price}</span>
      <span>Quantity: {props.quantity}</span>
    </div>
  </div>
);

class Cart extends Component {
  state = {
    items: [],
    open: false
  };
  toggle = () => {
    this.setState(({ open }) => ({
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
  handleClick = e => {
    if (!this.node.contains(e.target)) {
      this.setState({
        open: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  render() {
    const { items, open } = this.state;
    const { total } = this.props;
    return (
      <div className={`cart open-${open}`} ref={cart => (this.node = cart)}>
        <div onClick={this.toggle}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart ({total})</span>
        </div>
        {open && (
          <div className="cart-items">
            {Object.keys(items).map(key => (
              <CartItem {...items[key]} key={key} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
