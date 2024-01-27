import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const estiloP = {
  color: "blue",
  fontSize: "10rem",
};

const App = () => {
  const nome = "Igor";
  const random = Math.random();
  const ativo = false;

  return (
    <>
      {titulo}
      <p style={estiloP} className={ativo ? "ativo" : "inativo"}>
        {random * 100}
      </p>
    </>
  );
};

export default App;
