import React from "react";
import "./Navbar.css";
import Logo from "../../assets/lgo/lgo-igor.svg?react";
import { Link } from "react-scroll";
import UserContext from "../../UserContext";
import ButtonLang from "../ButtonLang/ButtonLang";
import useMedia from "../../Hooks/useMedia";
import Menu from "../../assets/ico/ico-menu.svg?react";
import MenuClose from "../../assets/ico/ico-close.svg?react";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);

  const mobile = useMedia("(max-width: 760px)");

  const { data } = React.useContext(UserContext);

  function handleClick() {
    let nav = document.querySelector(".nav");
    nav.classList.add("is-active");
  }

  function handleMenu() {
    let nav = document.querySelector(".nav");
    nav.classList.remove("is-active");
  }
  return (
    <header className="header">
      <Logo />
      {mobile && (
        <button className="openBtn" onClick={handleClick}>
          <Menu /> Menu
        </button>
      )}
      <nav className="nav">
        {mobile && (
          <button className="closeBtn" onClick={handleMenu}>
            <MenuClose />
          </button>
        )}
        {data.nav.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            activeClass="is-active"
            spy={true}
            smooth={true}
            offset={0}
            onClick={handleMenu}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <ButtonLang />
    </header>
  );
};

export default Navbar;
