// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// const li = document.querySelectorAll("li");

// li.forEach((i) => i.classList.add("ativa"));

// li.forEach(function (item) {
//   item.classList.add("ativa");
// });

// const carros = ["Ford", "Fiat", "Honda"];

// Utilziar o map para utilizar o retorno do array

// const novaArray = carros.map((item, index, array) => {
//   console.log(item.toLocaleUpperCase, index, array);
//   return index;
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numerosX2);

// console.log(novaArray);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// console.log(tempoAulas)

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas)

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// }, 0);

// console.log(maiorNumero)

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// const frutas = ["Banana", "Pêra", "Uva"];

// const temUva = frutas.some((item) => {
//   console.log(item);
//   return item === "Uva";
// });

// const every = frutas.every((fruta) => {
//   console.log(fruta);
//   return fruta === "Uva";
// });

// const indexUva = frutas.findIndex((item) => {
//   return item === "Uva";
// });

// console.log(indexUva);

// console.log(every);
// console.log(temUva);

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((n) => n > 3);
// console.log(maiorQue3);

const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayFrutas = frutas.filter((item) => {
  console.log(item);
  return item;
});

console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  console.log(aula.min);
  return aula.min > 15;
});

console.log(maiores15);
