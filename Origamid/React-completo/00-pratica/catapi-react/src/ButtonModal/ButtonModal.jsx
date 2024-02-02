import React from "react";
import login from "../assets/ico/ico-login.svg";
import "./ButtonModal.css";
import GlobalContext from "../GlobalContext";

const ButtonModal = () => {
  const global = React.useContext(GlobalContext);

  return (
    <button className="btnModal" onClick={() => global.setModal(true)}>
      <img src={login} alt="" /> Login
    </button>
  );
};

export default ButtonModal;
