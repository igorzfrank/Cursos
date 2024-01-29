import React from "react";
import UserContext from "./UserContext";
import Produto from "./Produto";

const App = () => {
  console.log(UserContext);
  return (
    <UserContext.Provider value={{ nome: "Andre" }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
