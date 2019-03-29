import React from "react";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="header">
      <NavLink to="/home">Homepage</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
    </div>
  );
};

export default Header;
