import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const Path = () => {
  const { pathname } = window.location;
  if (pathname == "/produtos") {
    return <Produtos />;
  } else {
    return <Home />;
  }
};

const App = () => {
  return (
    <>
      <Header />
      <Path />
    </>
  );
};

export default App;
