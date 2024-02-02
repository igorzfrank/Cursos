import React from "react";
import "./Footer.css";
import logo from '../assets/img/cat-lgo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <img src={logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
