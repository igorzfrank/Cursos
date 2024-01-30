import React from "react";

function App() {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  const [cores, setCores] = React.useState(["feijao"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkCor(cor) {
    return cores.includes(cor);
  }

  return (
    <div>
      <form>
        {coresArray.map((cor) => (
          <label>
            <input
              type="checkbox"
              value={cor}
              onChange={handleChange}
              checked={checkCor(cor)}
            />
            {cor}
          </label>
        ))}
      </form>
    </div>
  );
}

export default App;
