import React from "react";
const CategoryFilter = props => {
  return (
    <div className="category-filter">
      <label>Category</label>
      <select onChange={props.onFilterChanged}>
        <option value="all">All</option>
        <option value="book">Books</option>
        <option value="cloth">Clothes</option>
      </select>
    </div>
  );
};

const SortTool = props => {
  return (
    <div className="sort-tool">
      <label>Sort by Price</label>
      <select onChange={props.onSortChanged}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

const Filters = props => (
  <div className="tools">
    <CategoryFilter {...props} />
    <SortTool {...props} />
  </div>
);

export default Filters;
