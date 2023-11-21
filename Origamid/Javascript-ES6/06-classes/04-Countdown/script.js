import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2023 23:59:59 GMT-0300");
const tempoParaOAnoNovo = new Countdown("01 January 2024 23:59:59 GMT-0300");

console.log(tempoParaONatal.total);
console.log(tempoParaOAnoNovo.total);

setInterval(() => {
  console.log(tempoParaONatal.total);
}, 1000);
