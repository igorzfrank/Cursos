import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavLink to="/" end>
        Produtos
      </NavLink>
      <NavLink to="contato">Contato</NavLink>
    </header>
  );
};

export default Header;
