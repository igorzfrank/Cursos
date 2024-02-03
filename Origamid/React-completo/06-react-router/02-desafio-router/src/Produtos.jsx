import React from "react";
import "./Produtos.css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Head from "./Head";

const Produtos = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = React.useState(null);

  async function fetchProdutos() {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    setProdutos(responseJSON);
  }

  React.useEffect(() => {
    fetchProdutos();
  }, []);

  function handleClick({ target }) {
    console.log(target.id);
    navigate(target.id);
  }

  if (produtos == null) return <Loading />;
  return (
    <div className="containerProdutos">
      <Head title="Produtos" description="Página de produtos" />
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="produto"
          id={produto.id}
          onClick={handleClick}
        >
          <img src={produto.fotos[0].src} id={produto.id} alt="" />
          <h1>{produto.nome}</h1>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
