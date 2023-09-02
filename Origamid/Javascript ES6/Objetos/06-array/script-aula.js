const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array("Ford", "Fiat", "Honda");

carros[2] = "Ferrari";
carros[3] = "Kia";

console.log(carros.length);

const li = document.querySelectorAll("li");

const arrayLi = Array.from(li);

// Para transformar um obj em array é necessário adicionar o length
const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 3,
};

const objArray = Array.from(obj);

console.log(objArray);
console.log(li);
console.log(arrayLi);

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

console.log(frutas[2][1].length);

instrumentos.sort();

console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(idades);

const carros2 = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Ferrari"); // Adiciona ao inicio da Array
carros.push("Toyota", "Chery"); // Adiciona ao final da Array

console.log(carros);

console.log(carros.pop()); // Retira o ultimo item do array
console.log(carros.shift()); // Retira o primeiro item do array
console.log(carros.reverse()); // Reverte a ordem do array
console.log(carros.slice(2, 3, "Fusca")); // Adiciona e retorna o item removido
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2)); // Copia os itens em determinadas posições do array
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana")); // Preenche os itens do array

const transportes1 = ["Barco", "Aviao"];
const transportes2 = ["Carro", "Moto"];

const transportes = transportes1.concat(transportes2);

console.log(transportes);

const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

const cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens);
