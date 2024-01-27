import React from "react";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "Igor", idade: "29" });

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, "Item " + (contar + 1)]);
  }

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: "Possui Faculdade" });
  // }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
    // <div>
    //   <p>{dados.nome}</p>
    //   <p>{dados.idade}</p>
    //   <p>{dados.faculdade}</p>
    //   <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    // </div>
  );
};

export default App;
