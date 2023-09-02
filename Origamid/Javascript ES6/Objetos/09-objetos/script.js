// const pessoa = new Object({
//   nome: "André",
// });

// console.log(pessoa);

// const carro = {
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   rodas: 4,
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro);
// honda.marca = "Honda";

// const ferrari = Object.create(carro).init("Ferrari");

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(moto, funcaoAutomovel);

const moto = {};

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumerable: false, // torna enumerável
    writable: false, // impede mudança de valor
  },
  velocidade: {
    get() {
      return this._rodas;
    },
    set(valor) {
      valor * 4;
    },
  },
});

console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);

Object.getOwnPropertyNames(Array.prototype);

const frutas = ["Banana"];

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas1 = ["Banana", "Perâ"];
const frutas2 = ["Banana", "Perâ"];

console.log(Object.is(frutas1, frutas2));

const carro = {
  marca: "Ford",
  ano: 2018,
};

Object.freeze(carro); // impede qualquer mudança nas propriedades. 
Object.seal(carro); // previne a adição de novas propriedades e impede que as atuais sejam deletadas.
Object.preventExtensions(carro); // previne a adição de novas propriedades.

carro.marca = "Honda";

console.log(carro);
console.log(Object.isFrozen(carro));
