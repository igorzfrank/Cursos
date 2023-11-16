// const carro = {
//     marca: 'Honda',
//     ano: 2018
// }

// const {marca, ano} = carro;

// console.log(marca, ano)

const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// const { livros, videos } = cliente.compras.digitais;

const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

console.log(livros);
console.log(videos);
