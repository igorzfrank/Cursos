// function Carro() {
//   this.marca = "Marca";
//   this.preco = 2000;
// }

// const honda = new Carro();
// const fiat = new Carro();
// fiat.marca = 'Fiat'

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro(); // undefined
const fiat = new Carro('Fiat', 3000)

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);