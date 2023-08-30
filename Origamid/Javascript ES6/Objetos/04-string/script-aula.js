// const comida = "Pizza";
// const agua = new String("Água");

// console.log(agua.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(0));

const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

// const fraseFinal = frase + linguagem;
const fraseFinal = frase.concat(linguagem, "!!");

console.log(fraseFinal);

// ------------------------------------------------------
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 4));

console.log(fruta.startsWith("Ba")); // Começa com
console.log(fruta.endsWith("na")); // Termina com

// ------------------------------------------------------

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao3.slice(0, 3));

console.log(fruta.indexOf("n"));
console.log(fruta.lastIndexOf("n"));

// ------------------------------------------------------

const preco = "R$: 99,00";

console.log(preco.padStart(20, "."));

// ------------------------------------------------------

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((precos) => {
  console.log(precos.padStart(15, "."));
});

// ------------------------------------------------------

const oneTurn = "Ta";

console.log(oneTurn.repeat(5));

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

console.log(listaItens);

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

// ------------------------------------------------------

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];

// ------------------------------------------------------

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toUpperCase() === "FEMININO");

// ------------------------------------------------------

const valor = '   R$ 23.00   '

console.log(valor.trim())
