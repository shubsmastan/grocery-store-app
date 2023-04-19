import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <h1 className="logo">
        <NavLink to="/">Shoppr</NavLink>
      </h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}
