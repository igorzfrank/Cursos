// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxa = 0;
let recebimento = 0;

transacoes.forEach((item) => {
  if (item.descricao.includes("Taxa")) {
    taxa += +item.valor.replace(/[R$ ]+/g, "");
    // taxa += parseInt(item.valor.replace(/[R$ ]+/g, ""));
  } else {
    recebimento += parseInt(item.valor.replace(/[R$ ]+/g, ""));
  }
});

console.log("Taxa igual a " + taxa);
console.log("Recebimento igual a " + recebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

console.log(html.replace(/[span]+/g, "a"));

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = 0;

transacoes2.forEach((item) => {
  if (item.trim().toLocaleLowerCase().includes("taxa")) {
    totalTaxas += 1;
  }
});

console.log("Numero total de palavras taxa foi de " + totalTaxas);
