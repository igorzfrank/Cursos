// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
  document.body.classList.toggle("active");
}

setInterval(mudarClasse, 2000);

// VVVV Minha Resolução VVVV

// const tela = document.querySelector("body");

// let onOff = true;

// setInterval(() => {
//   if (onOff) {
//     tela.style.backgroundColor = "blue";
//     onOff = false;
//   } else {
//     tela.style.backgroundColor = "red";
//     onOff = true;
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// VVVV Minha Resolução VVVV

const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");
const display = document.querySelector(".display");

btnStart.addEventListener("click", iniciarTempo);
btnPause.addEventListener("click", pausarTempo);
btnPause.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    display.innerText = i++;
  }, 500);
  btnStart.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  btnStart.removeAttribute('disabled');
}

function resetarTempo() {
  display.innerText = 0;
  i = 0;
}

// const btnStart = document.querySelector("#btn-start");
// const btnPause = document.querySelector("#btn-pause");
// const btnReset = document.querySelector("#btn-reset");

// let cont = 0;
// let pause = false;

// function timer() {
//   const display = document.querySelector(".display");

//   const cronometro = setInterval(() => {
//     if (!pause) {
//       cont += 1;
//       display.innerText = cont;
//     }
//   }, 1000);

//   btnPause.addEventListener("click", () => {
//     if (!pause) {
//       pause = true;
//     } else {
//       pause = false;
//     }
//   });

//   btnReset.addEventListener('click', ()=> {
//     clearInterval(cronometro);
//     cont = 0;
//     display.innerText = cont;
//   })
// }

// btnStart.addEventListener("click", () => {
//   timer();
// });
