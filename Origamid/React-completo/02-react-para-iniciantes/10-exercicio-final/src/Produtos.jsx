import React from "react";
import Titulo from "./TItulo";
import Produto from "./Produto";

const produtos = [
  {
    nome: "Notebook",
    propriedades: ["16gb ram", "512gb"],
  },
  {
    nome: "Smartphone",
    propriedades: ["2gb ram", "128gb"],
  },
];

const Produtos = () => {
  return (
    <div>
      <Titulo texto="Produto" />
      {produtos.map((produto) => (
        <Produto key={produtos.nome} {...produto}/>
      ))}
    </div>
  );
};

export default Produtos;
