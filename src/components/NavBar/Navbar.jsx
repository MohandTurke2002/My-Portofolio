import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="nav-links">
      <NavLink to="/" className="link-wrap wrap change-hover">
        <p>Home</p>
        <i className="bi bi-house-door-fill"></i>
      </NavLink>
      <NavLink to="/Portofolio" className="link-wrap wrap change-hover">
        <p>Portofolio</p>
        <i className="bi bi-card-image"></i>
      </NavLink>
      <NavLink to="/AboutMe" className="link-wrap wrap change-hover">
        <p>AboutMe</p>
        <i className="bi bi-person-circle"></i>
      </NavLink>
      <NavLink to="/ContactMe" className="link-wrap wrap change-hover">
        <p>ContactMe</p>
        <i className="bi bi-envelope-fill"></i>
      </NavLink>
    </div>
  );
}

export default Navbar;
