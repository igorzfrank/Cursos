"use strict";
const produto = "Livro";
let preco = 200;
const carro = {
    marca: "Audi",
    portas: 5,
};
const barato = preco < 200 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
// Exercicio 01
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// Execicio 02
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
