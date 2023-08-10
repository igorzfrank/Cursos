function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined


if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro


var i = 100

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

console.log(i * 10)

const semana = 'Sexta';

semana = 'Quinta';

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019; // Funciona
data = 'Isso' // Error
data.dia = 28 // Funciona

