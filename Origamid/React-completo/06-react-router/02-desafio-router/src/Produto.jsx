import React from "react";
import { useParams } from "react-router-dom";
import "./Produto.css";
import Loading from "./Loading";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const params = useParams();
  console.log(params);

  async function fetchProdutos() {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + params.id
    );
    const responseJSON = await response.json();
    setProduto(responseJSON);
  }

  React.useEffect(() => {
    fetchProdutos();
  }, []);

  console.log(produto);
  if (produto == null) return <Loading />;
  return (
    <div className="produtoContainer">
      <div className="fotos">
        {produto.fotos.map((item) => (
          <img key={item.titulo} src={item.src}></img>
        ))}
      </div>
      <div className="descricao">
        <h2>{produto.nome}</h2>
        <span className="preco">R$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
