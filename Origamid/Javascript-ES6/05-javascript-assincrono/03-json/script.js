fetch("./dados.json")
  .then((r) => r.json())
  .then((result) => {
    // console.log(result);
    console.log(JSON.stringify(result))
  });

const configucoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configucoes)

console.log(JSON.parse(localStorage.config))

const stringConfig = JSON.stringify(configucoes);

console.log(stringConfig);

// JSON.parse() -> Transforma o texto um objeto
// JSON.stringfy() -> Transforma um objeto em texto
