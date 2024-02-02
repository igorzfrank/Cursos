import React from "react";
import "./ButtonLike.css";
import GlobalContext from "../GlobalContext";

const ButtonLike = () => {
  const global = React.useContext(GlobalContext);
  const [active, setAtive] = React.useState(false);

  function handleClick({ target }) {
    target.classList.toggle("is-active");
    if (target.classList.contains("is-active")) {
      global.notification();
    }
  }

  return <button className="btnLike" onClick={handleClick}></button>;
};

export default ButtonLike;
