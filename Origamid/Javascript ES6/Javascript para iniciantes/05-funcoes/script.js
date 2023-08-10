// Crie uma função para verificar se um valor é Truthy
function verificar(info) {
  return !!info;
}

console.log(verificar(23));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(l1, l2, l3, l4) {
  var total = l1 + l2 + l3 + l4;
  return total;
}

console.log(quadrado(2, 2, 2, 2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

console.log(nomeCompleto("Igor", "Frank"));

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if (numero % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

console.log(numeroPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDe(argumento) {
  return typeof argumento;
}

console.log(tipoDe("Texto"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// window.addEventListener('scroll', function(){
//     console.log('Igor Frank Moreno')
// })

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
