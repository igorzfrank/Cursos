import React from "react";

function App() {
  const [msg, setMsg] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [termos, setTermos] = React.useState("false");
  const [comida, setComida] = React.useState(["feijao"]);

  function handleChange({ target }) {
    if (target.checked) {
      setComida([...comida, target.value]);
    } else {
      setComida(comida.filter((comida) => comida !== target.value));
    }
  }

  console.log(comida);

  function checkComida(comidas) {
    return comida.includes(comidas);
  }

  return (
    <div>
      <form>
        <textarea
          id="mensagem"
          rows="5"
          value={msg}
          onChange={({ target }) => setMsg(target.value)}
        ></textarea>
        <p>{msg}</p>

        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>{select}</p>

        <h2>Produtos</h2>
        <label>
          <input
            type="radio"
            name="produto"
            value="smartphone"
            onChange={({ target }) => setProduto(target.value)}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            name="produto"
            value="notebook"
            onChange={({ target }) => setProduto(target.value)}
          />
          Notebook
        </label>
        <p>{produto}</p>

        <h2>Cor</h2>
        <label>
          <input
            type="radio"
            name="cor"
            value="vermelho"
            onChange={({ target }) => setCor(target.value)}
          />
          Vermelho
        </label>
        <label>
          <input
            type="radio"
            name="cor"
            value="azul"
            onChange={({ target }) => setCor(target.value)}
          />
          Azul
        </label>
        <p>{cor}</p>

        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos.
        </label>
        {termos && <p>Aceitou os termos</p>}

        <label>
          <input
            type="checkbox"
            value="arroz"
            checked={checkComida("arroz")}
            onChange={handleChange}
          />
          Arroz
        </label>

        <label>
          <input
            type="checkbox"
            value="feijao"
            checked={checkComida("feijao")}
            onChange={handleChange}
          />
          Feijão
        </label>
      </form>
    </div>
  );
}

export default App;
