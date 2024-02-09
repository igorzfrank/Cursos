import React from "react";
import { Link } from "react-scroll";
import "./ButtonContent.css";
import Ico from "../../assets/ico/ico-content.svg?react";

const ButtonContent = () => {
  return (
    <Link className="buttonContent" to={"about"} smooth={true} offset={0}>
      <Ico />
    </Link>
  );
};

export default ButtonContent;
