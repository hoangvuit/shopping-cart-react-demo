import React, { Component } from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

class Homepage extends Component {
  state = {
    filterBy: "all",
    sort: "asc"
  };
  onFilterChanged = e => {
    const filterBy = e.target.value;
    this.setState(() => ({
      filterBy
    }));
  };
  onSortChanged = e => {
    const sort = e.target.value;
    this.setState(() => ({
      sort
    }));
  };
  render() {
    const { filterBy, sort } = this.state;
    return (
      <>
        <Filters
          onFilterChanged={this.onFilterChanged}
          onSortChanged={this.onSortChanged}
        />
        <ProductList
          filterBy={filterBy}
          sort={sort}
          addToCart={this.props.addToCart}
        />
      </>
    );
  }
}

export default Homepage;
