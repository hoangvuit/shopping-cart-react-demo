import React, { Component } from "react";
class ProductItem extends Component {
  state = {};
  addToCart = e => {
    this.props.addToCart(this);
  };
  render() {
    const { title, price, picture } = this.props;
    return (
      <div className="product-item">
        <img src={picture} alt={title} />
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default ProductItem;
