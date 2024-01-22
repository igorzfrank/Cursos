// function preencherDados(dados: {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }) {
//   document.body.innerHTML += `
//     <div>
//         <h2>${dados.nome}</h2>
//         <p>${dados.preco}</p>
//         <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
//     </div>
//     `;
// }

type NumberOrString = number | string;

let total: NumberOrString = 10;
total = "200";

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

// types de objetos deve ser usado o interface
interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}

// preencherDados({
//   nome: "Computador",
//   preco: 2000,
//   teclado: true,
// });

// preencherDados({
//   nome: "Notebook",
//   preco: 3000,
//   teclado: false,
// });

interface infoProduto {
  nome: string;
  preco: number;
  descricao: string;
  empresaFabricante: descricaoEmpresa;
  empresaMontadora: descricaoEmpresa;
  garantia: string;
  seguroAcidentes: boolean;
}

interface descricaoEmpresa {
  fundacao: number;
  nome: string;
  pais: string;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data: infoProduto) {
  document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>Contém seguro contra acidades? ${
          data.seguroAcidentes ? "Sim" : "Não"
        }</p>
        <p>Garantia de ${data.garantia}</p>
        <p>Fabricado por ${
          data.empresaFabricante.nome
        }, empresa fundada no ano de ${data.empresaFabricante.fundacao} em ${
    data.empresaFabricante.pais
  }.</p>
        <p>Montadado por ${
          data.empresaFabricante.nome
        }, empresa fundada no ano de ${data.empresaFabricante.fundacao} em ${
    data.empresaFabricante.pais
  }.</p>
      </div>
    `;
}
