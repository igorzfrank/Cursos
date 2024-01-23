"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);
const subtrair = (a, b) => a - b;
subtrair(10, 2);
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("Black");
const btn = document.querySelector("button");
btn?.click();
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isString("Teste"));
console.log(isString(200));
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
function roundUp(n) {
    if (typeof n === "number") {
        return Math.ceil(n);
    }
    else {
        return String(Math.ceil(Number(n)));
    }
}
console.log(roundUp(200.4));
console.log(roundUp("200.5"));
