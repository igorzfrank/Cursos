import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";
import Button from "./Button";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Button />
    </GlobalStorage>
  );
};

export default App;
