import React from "react";
import "./ButtonMore.css";
import GlobalContext from "../GlobalContext";

const ButtonMore = () => {
  const global = React.useContext(GlobalContext);
  const [cont, setCont] = React.useState(0);

  function handleClick() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        try {
          global.fetchLink();
          setCont(cont + 1);
        } catch (error) {
          console.log("error");
        }
      }, 1000);
    }
  }
  return <button className="btnMore" onClick={handleClick}>Ver Mais</button>;
};

export default ButtonMore;
