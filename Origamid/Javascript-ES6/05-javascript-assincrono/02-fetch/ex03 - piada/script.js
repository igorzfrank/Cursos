// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProx = document.querySelector(".btn-prox");
const textDisplay = document.querySelector(".textDisplay");

btnProx.addEventListener("click", () => {
  const piada = fetch("https://api.chucknorris.io/jokes/random");
  piada
    .then((r) => r.json())
    .then((p) => {
      console.log(p.value);
      textDisplay.innerHTML = p.value
    });
});
