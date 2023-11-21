// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btn = document.querySelector(".btn-check");
const userCEP = document.querySelector("#cep");
const displayRua = document.querySelector(".rua");

btn.addEventListener("click", () => {
  const cep = fetch(`https://viacep.com.br/ws/${userCEP.value}/json/`);

  cep
    .then((r) => r.json())
    .then((rua) => {
      console.log(rua.logradouro);
      displayRua.innerText = rua.logradouro;
    });
});
