import React from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Essa é a descrição da Home."/>
      <h1>Home</h1>
      <p>Essa é a Home!</p>
      <NavLink to="produto/notebook">Notebook</NavLink>{" "}
      <NavLink to="produto/smartphone">Smartphone</NavLink>{" "}
    </div>
  );
};

export default Home;
