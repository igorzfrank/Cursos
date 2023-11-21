// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  // Porque const e let estão dentro do bloco
  console.log(cor, marca, portas);
}

console.log('----')

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

// somarDois(4);
// dividirDois(6);
console.log(somarDois(4))
console.log(dividirDois(6))

console.log('----')

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
