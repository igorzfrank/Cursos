// const promesa = new Promise(function (resolve, reject) {
//   let condicao = true;
//   if (condicao) {
//     resolve("Andre");
//   } else {
//     reject(Error);
//   }
// });

// promesa.then(function (resolucao) {
//   console.log(resolucao);
// });

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario logado");
  }, 1500);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.group(resolucao);
});
