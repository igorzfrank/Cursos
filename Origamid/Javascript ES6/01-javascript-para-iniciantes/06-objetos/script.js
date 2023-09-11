// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: "Igor",
  sobrenome: "Frank Moreno",
  idade: 28,
  peso: "68kg",
  altura: "1,75cm",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.showNome = function () {
  console.log(`${this.nome} ${this.sobrenome}`);
};

eu.showNome();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir'
    } else {
      return 'Zzz...'
    }
  },
};

console.log(cachorro.latir(''))