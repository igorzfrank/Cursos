import React from "react";
import Produto from "./Produto";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  // const [contar, setContar] = React.useState(0);
  // const [dados, setDados] = React.useState(0);

  // React.useEffect(() => {
  //   fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
  //     .then((response) => response.json())
  //     .then((json) => setDados(json));
  // }, []);

  // React.useEffect(() => {
  //   console.log("Executou");
  // }, []);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
    // <div>
    //   {dados && (
    //     <div>
    //       <h1>{dados.nome}</h1>
    //       <p>R$ {dados.preco}</p>
    //     </div>
    //   )}
    //   <button onClick={() => setContar(contar + 1)}>{contar}</button>
    // </div>
  );
};

export default App;
