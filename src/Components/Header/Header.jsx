import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="/logo.png" alt="Logo" />
      <nav className="navbar">
        <NavLink
          className={(state) => (state.isActive ? "link active" : "link")}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={(state) => (state.isActive ? "link active" : "link")}
          to="/about"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
