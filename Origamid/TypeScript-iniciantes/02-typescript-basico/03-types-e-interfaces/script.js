"use strict";
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
let total = 10;
total = "200";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>Contém seguro contra acidades? ${data.seguroAcidentes ? "Sim" : "Não"}</p>
        <p>Garantia de ${data.garantia}</p>
        <p>Fabricado por ${data.empresaFabricante.nome}, empresa fundada no ano de ${data.empresaFabricante.fundacao} em ${data.empresaFabricante.pais}.</p>
        <p>Montadado por ${data.empresaFabricante.nome}, empresa fundada no ano de ${data.empresaFabricante.fundacao} em ${data.empresaFabricante.pais}.</p>
      </div>
    `;
}
