const cep = fetch("https://viacep.com.br/ws/88111484/json/");

// doc.then((resolucao) => {
//   resolucao.text().then((body) => {
//     console.log(body);
//   });
// });

cep
  .then((r) => r.json())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body.logradouro;
  });
