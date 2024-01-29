import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response);
    }

    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (loading)
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );

  if (data)
    return (
      <div>
        <p>Produto: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    );
  else {
    return null;
  }
};

export default App;
