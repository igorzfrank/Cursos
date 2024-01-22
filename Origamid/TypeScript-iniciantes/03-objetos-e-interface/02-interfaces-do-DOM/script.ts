// document.querySelector("video"); HTMLVideoElement
// document.querySelector("img"); HTMLImageElement

// const link1 = document.querySelector("a");  HTMLAnchorElement
// const link2 = document.querySelector("#origamid");  Element

// link1?.href;
// link2?.href; erro no ts

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  } else {
    console.log(typeof link);
  }
});

// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);

// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter(
  (link) => link instanceof HTMLAnchorElement
);

// Atividade
links.forEach((link) => {
  if (link instanceof HTMLElement) {
    ativarElemento(link);
  }
});

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "1px solid red";
}
