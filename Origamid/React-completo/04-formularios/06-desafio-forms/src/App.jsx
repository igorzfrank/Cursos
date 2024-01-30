import React from "react";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [cont, setCont] = React.useState(0);
  const [alternative, setAlternative] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [certas, setCertas] = React.useState(0);

  function nextQuestion(event) {
    event.preventDefault();
    if (alternative) {
      setCont(cont + 1);
      setError(false);
      setAlternative(null);
      if (alternative == perguntas[cont].resposta) {
        setCertas(certas + 1);
      }
    } else {
      setError(true);
    }
  }

  return (
    <div>
      {cont < 4 ? (
        <form
          onSubmit={nextQuestion}
          style={{ border: "1px solid black", padding: "0px 20px 10px 20px" }}
        >
          <h1>{perguntas[cont].pergunta}</h1>
          {perguntas[cont].options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                name={perguntas[cont].id}
                onChange={({ target }) => setAlternative(target.value)}
              />
              {option}
            </label>
          ))}
          {error && <p>Escolha uma alternativa</p>}
          <button style={{ marginTop: "20px" }}>Próxima</button>
        </form>
      ) : (
        <p>
          Você acertou: {certas} de {cont}
        </p>
      )}
    </div>
  );
}

export default App;
