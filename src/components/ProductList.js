import React, { PureComponent } from "react";
import ProductItem from "../components/ProductItem";
import { ArrayUtils } from "../utils";

import axios from "axios";

class ProductList extends PureComponent {
  state = {
    products: [],
    filterBy: this.props.filterBy,
    sort: this.props.sort
  };

  componentDidMount() {
    axios.get("http://localhost:3002/products").then(res => {
      this.setState(() => {
        return {
          products: res.data
        };
      });
    });
  }

  // Refactor to use the latest getDerivedState
  componentWillReceiveProps(nextProps) {
    if (nextProps.filterBy) {
      this.setState(() => ({
        filterBy: nextProps.filterBy,
        sort: nextProps.sort
      }));
    }
  }

  render() {
    const { products, filterBy, sort } = this.state;
    let filteredProducts = products;
    if (filterBy !== "all") {
      filteredProducts = products.filter(
        product => product.category === filterBy
      );
    }
    let sortedProducts = filteredProducts;
    if (sort === "desc") {
      sortedProducts = ArrayUtils.sortDesc(sortedProducts, "price");
    } else {
      sortedProducts = ArrayUtils.sortAsc(sortedProducts, "price");
    }
    return (
      <div className="product-list">
        {sortedProducts.map(product => (
          <ProductItem key={product.id} {...product} {...this.props} />
        ))}
      </div>
    );
  }
}

export default ProductList;
