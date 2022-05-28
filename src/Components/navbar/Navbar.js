import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navUl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
