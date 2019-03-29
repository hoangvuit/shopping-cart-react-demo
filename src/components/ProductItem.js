import React, { PureComponent } from "react";
class ProductItem extends PureComponent {
  state = {};
  addToCart = e => {
    const { id, title, price, picture } = this.props;
    let item = {
      id,
      title,
      price,
      picture
    };
    this.props.addToCart(item);
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
