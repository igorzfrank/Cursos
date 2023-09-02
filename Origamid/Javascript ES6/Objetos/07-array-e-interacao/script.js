// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  };
});

console.log(objetosCursos);

// Minha resolução:

// const cursos = document.querySelectorAll(".curso");

// let array = [];

// cursos.forEach((item, index) => {
//   array[index] = {};
//   array[index].h1 = item.querySelector("h1").innerText;
//   array[index].p = item.querySelector("p").innerText;
//   array[index].aulas = item.querySelector(".aulas").innerText;
//   array[index].horas = item.querySelector(".horas").innerText;
// });

// console.log(array);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros.filter((item) => {
  return item > 100;
});

console.log(maiores100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const findBass = instrumentos.some((item) => {
  return item === "Baixo";
});

console.log(findBass);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);

// Minha solução:

// let soma = 0;

// const valorTotal = compras.map((item) => {
//   soma += +item.preco.replace("R$ ", "").replace(",", ".");
// });

// console.log(soma);
