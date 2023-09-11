// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(2, 5));

// function darOi(nome, idade) {
//   console.log("Oi para você " + nome + " " + idade);
// }

// darOi.call(null, "André", 28);

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + " " + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pêra"];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// const li = {
//   element: document.querySelector("li"),
// };

// ul.ativo.call(li, "ativo");

// console.log(ul);

const frutas = ["Uva", "Maçã", "Baanan"];

Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

console.log(arrayLi);

// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains("ativo");
// });

const filtro2 = arrayLi.filter((item) => {
  return item.classList.contains("ativo");
});

console.log(li);
console.log(filtro2);

const numeros = [31, 423, 315, 4123, 5124];

console.log(Math.max.call(null, numeros)); // ERROR NaN
console.log(Math.max.apply(null, numeros)); // Funciona com arrays

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(carro);

console.log(acelerarHonda(300, 20));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6
