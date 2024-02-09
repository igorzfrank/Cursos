import React from "react";
import "./Navbar.css";
import Logo from "../../assets/lgo/lgo-igor.svg?react";
import { Link } from "react-scroll";
import UserContext from "../../UserContext";
import ButtonLang from "../ButtonLang/ButtonLang";

const Navbar = () => {
  const { data } = React.useContext(UserContext);
  console.log(data);

  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        {data.nav.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            activeClass="is-active"
            spy={true}
            smooth={true}
            offset={-0}
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
