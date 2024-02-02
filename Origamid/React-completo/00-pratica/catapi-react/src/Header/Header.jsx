import React from "react";
import "./Header.css";
import logo from "../assets/img/cat-lgo.svg";
import ButtonModal from "../ButtonModal/ButtonModal";
import PopUp from "../PopUp/PopUp";
import GlobalContext from "../GlobalContext";

const Header = () => {
  const global = React.useContext(GlobalContext);
  return (
    <header>
      {global.pop && <PopUp />}
      <div className="headerContainer">
        <img src={logo} alt="" />
        <ButtonModal />
      </div>
    </header>
  );
};

export default Header;
