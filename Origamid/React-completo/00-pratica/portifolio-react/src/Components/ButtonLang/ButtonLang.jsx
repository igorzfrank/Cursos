import React from "react";
import UserContext from "../../UserContext";
import "./ButtonLang.css";

const ButtonLang = () => {
  const { lang, setLang } = React.useContext(UserContext);
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setLang((lang) => !lang);
    setActive((active) => !active);
  }

  return (
    <button
      className={`buttonLang ${active ? "is-active" : ""}`}
      onClick={handleClick}
    ></button>
  );
};

export default ButtonLang;
