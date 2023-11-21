// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// async function puxarDados() {
//   const reponseDados = await fetch("./dados.json");
//   const jsonDados = await reponseDados.json();
//   console.log(jsonDados.aula);
// }

const btn = document.querySelector(".btn-check");
const userCEP = document.querySelector("#cep");
const displayRua = document.querySelector(".rua");

btn.addEventListener("click", () => {
  async function puxarDados() {
    const responseCEP = await fetch(`https://viacep.com.br/ws/${userCEP.value}/json/`);
    const jsonCEP = await responseCEP.json();
    console.log(jsonCEP);
    displayRua.innerText = jsonCEP.logradouro;
  }

  puxarDados();
});
