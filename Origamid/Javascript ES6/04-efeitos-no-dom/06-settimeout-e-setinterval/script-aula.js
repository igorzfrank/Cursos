// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   setTimeout(() => {
//     this.classList.add("active");
//   }, 1000);
// }

// function espera(texto) {
//   console.log("Passou 0");
// }

// setTimeout(() => {
//   console.log("Testando");
// }, 1000);

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// function loop(texto) {
//   console.log(texto);
// }

// setInterval(loop, 1000, "Passou 1s");

// loop a casa segundo

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop)
  }
}, 1000);