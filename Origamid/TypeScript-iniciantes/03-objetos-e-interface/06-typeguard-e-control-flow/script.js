"use strict";
// function typeGuard(value: any) {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// typeGuard("Origamid");
// typeGuard(200);
// typeGuard(document.body);
// const obj = {
//   nome: "Origamid",
// };
// if ("nome" in obj) {
//   console.log("Sim");
// }
// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function handleProduto(data: Produto) {
//   if ("preco" in data) {
//     document.body.innerHTML += `
//     <p>Nome: ${data.nome}</p>
//     <p>Preço: ${data.preco + 100}</p>
//     `;
//   }
// }
// fetchProduto();
// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log("É instância de Array");
//   }
//   if (Array.isArray(data)) {
//     console.log("É array");
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     data.toUpperCase();
//   }
// }
// handleData("Origamid");
// handleData(200);
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "preco" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     console.log(data);
//   }
// }
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    data.forEach((curso) => {
        if (isCurso(curso)) {
            document.body.innerHTML += `
        <div>
            <h1${curso.nome}</h1>
            <p>Curso com ${curso.aulas} aulas, no total de ${curso.horas} horas de aula</p>
            <p>Nivel ${curso.nivel}</p>
            <p>Gratuito? ${curso.gratuito ? "Sim" : "Não"}</p>
            <p>Tags: ${curso.tags.join(", ")}</p>
            <p>Aulas: ${curso.idAulas.join(" | ")}</p>
        </div>
        `;
        }
    });
}
