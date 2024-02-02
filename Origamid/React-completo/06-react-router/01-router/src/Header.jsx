import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);
  return (
    // <header>
    //   <h1>Header</h1>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="sobre">Sobre</Link>
    //     </li>
    //   </ul>
    // </header>
    <header>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
