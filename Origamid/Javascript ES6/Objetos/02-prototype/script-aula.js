function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    return "Andou pelo objeto";
  };
}

// Caso haja a mesma função dentro do objeto e dentro do prototipo,
// Será exucutado a função do objeto

var obj = {
  nome: "Andre",
  idade: 33,
};

obj.teste = "isso";

Pessoa.prototype.andar = function () {
  return "Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa andou";
};

const andre = new Pessoa("Andre", 28);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "Brasil";

const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

// Tranforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listArray = Array.from(lista); // Metodo simplificado

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
