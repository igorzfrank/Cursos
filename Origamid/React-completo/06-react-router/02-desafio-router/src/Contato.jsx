import React from "react";
import "./Contato.css";
import Head from "./Head";

const Contato = () => {
  return (
    <div className="contatoCointainer">
      <Head title="Contato" description="Página de contato da empresa." />
      <h1>Entre em contato</h1>
      <ul>
        <li>algum_email@gmail.com</li>
        <li>(99)98877-6655</li>
        <li>Rua algum lugar por ali, nº 28</li>
      </ul>
    </div>
  );
};

export default Contato;
