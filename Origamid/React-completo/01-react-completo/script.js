// Objeto Literal
const menu = {
  selector: ".principal",
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add("active");
  },
};

// ---------------------------------------

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty("class"); // método herdado

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body

// ---------------------------------------

const upperName = function (name) {
  return name.toUpperCase();
};
upperName("André"); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName("Rafael"); // rafael

const countLetters = (word) => word.length;
countLetters("Rafael"); // 6

// ---------------------------------------

function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// Podemos desestruturar o parâmetro
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);

// ---------------------------------------

const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
// fruta1 = banana
// fruta2 = Uva

// ---------------------------------------

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, area] = useQuadrado;

// ---------------------------------------

function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList("Google", "André", "Pedro", "João");

// ---------------------------------------

// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll("li");

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
[...items].map((item) => (item.innerText = "Teste"));

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };

// script.js
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";

areaQuadrado(4);
perimetroQuadrado(5);
numeroAleatorio();
