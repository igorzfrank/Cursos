// Retorne um número aleatório
// entre 1050 e 2000
let min = 1050;
let max = 2000;

const aleatorio = Math.floor(Math.random() * (max - min) + min);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
let arrayNumeros = numeros.split(", ");

arrayNumeros.forEach((number, index) => {
  arrayNumeros[index] = parseInt(number);
});

console.log(arrayNumeros);

let maxNumber = Math.max(...arrayNumeros);

console.log(maxNumber);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparDados(array) {
  let soma = 0;
  array.forEach((item) => {
    item = item.toLowerCase().replace("r$ ", "").replace(",", ".").trim();
    let resultado = Math.round(+item);
    console.log(resultado);
    soma += resultado;
  });
  console.log('A soma total é de ' + soma);
}

limparDados(listaPrecos);
