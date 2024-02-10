import React from "react";
import { Link } from "react-scroll";
import ToTop from "../../assets/ico/ico-top.svg?react";
import "./ButtonTop.css";

const ButtonTop = () => {
  return (
    <Link to="hero" className="buttonTop" spy={true} smooth={true} offset={0}>
      <ToTop />
    </Link>
  );
};

export default ButtonTop;
