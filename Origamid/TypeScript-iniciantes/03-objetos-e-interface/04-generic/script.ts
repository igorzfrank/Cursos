// function retorno<Tipo>(a: Tipo): Tipo {
//   return a;
// }

// console.log(retorno("A game"));
// console.log(retorno(200));
// console.log(retorno(true));

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pera", "Uva", "Laranja", "Limão", "Maçã"];

// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }

// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
// console.log(firstFive(frutas).map(item => item));

// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }

// notNull("Andre")?.toLocaleLowerCase();
// notNull(200)?.toFixed();

function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true).tipo;
tipoDado(200).tipo;

// function extractText<Tipo extends HTMLElement>(el: Tipo): string {
//   return el.innerText;
// }

// const link = document.querySelector('a');

function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link = $<HTMLAnchorElement>("a")?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.nome);
}
