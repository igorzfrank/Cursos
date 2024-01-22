// class Produto {
//   nome: string;
//   preco: number;
//   constructor(nome: string, preco: number) {
//     this.nome = nome;
//     this.preco = preco;
//   }
// }
class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

// const livro = new Produto("A Guerra dos Tronos", 200);
const livro = new Produto("A Guerra dos Tronos");

// console.log(livro instanceof Produto);

// class Livro {
//   autor: string;
//   constructor(autor: string) {
//     this.autor = autor;
//   }
// }
class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

// class Jogo {
//   jogadores: number;
//   constructor(jogadores: number) {
//     this.jogadores = jogadores;
//   }
// }
class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

// function buscarProduto(busca: string) {
//   if (busca === "O Hobbit") {
//     return new Livro("J. R. R. Tolkien");
//   }

//   if (busca === "Dark Souls") {
//     return new Jogo(1);
//   }

//   return null;
// }
function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }

  if (busca === "Dark Souls") {
    return new Jogo("Dark Souls", 1);
  }

  return null;
}

const produto = buscarProduto("Dark Souls");

if (produto instanceof Livro) {
  console.log(produto.autor);
}

// if (produto instanceof Jogo) {
//   console.log(produto.jogadores);
// }
if (produto instanceof Produto) {
  console.log(produto.nome);
}

// Atividade
const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  //   link.href = 'https://www.origamid.com/'
  link.href = link.href.replace("http://", "https://");
  console.log(link.href);
}
