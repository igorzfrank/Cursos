import React from "react";
import { GlobalContext } from "./GlobalContext";

const Button = () => {
  const global = React.useContext(GlobalContext);
  return <button onClick={() => global.limparDados()}>LimparDados</button>;
};

export default Button;
