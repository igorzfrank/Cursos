import React from "react";
import "./Navbar.css";
import Logo from "../../assets/lgo/lgo-igor.svg?react";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <nav></nav>
      <button>Lang</button>
    </header>
  );
};

export default Navbar;
