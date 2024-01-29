import React from "react";

const Produto = ({ item }) => {
  const [dado, setDado] = React.useState(null);

  React.useEffect(() => {
    if (item !== null) {
      fetch("https://ranekapi.origamid.dev/json/api/produto/" + item)
        .then((response) => response.json())
        .then((json) => setDado(json));
    }
  }, [item]);

  if (dado === null) {
    return null;
  } else {
    return (
      <div>
        <h1>{dado.nome}</h1>
        <p>{dado.preco}</p>
      </div>
    );
  }
};

export default Produto;
