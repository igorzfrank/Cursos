console.log(Number.isNaN(NaN));

console.log(Number.isInteger(28.8));

console.log(parseFloat("3123.42"));
console.log(parseFloat("100 reais"));
console.log(parseInt("100.32 reais"));

const preco = 10.323232;
console.log(+preco.toFixed(2))

let valor = 48.59

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor)

console.log(Math.PI)

Math.ceil() // Aredonda pra cima
Math.floor() // Aredonda pra baixo
Math.round() // Aredonda pro mais próx

Math.max(4,2,5,1,51) // Retorna o maior
Math.min(4,2,5,1,51) // Retorna o menor

Math.random() // Gera um número randomico

const aleatorio = Math.floor(Math.random() * 10);

let max = 40
let min = 20

const aleatorio2 = Math.floor(Math.random() * (max - min) + min);

console.log(aleatorio)