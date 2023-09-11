// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector("img");
const firstImgTop = firstImg.offsetTop;

// console.log(firstImgTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");

function somaImagens() {
  let widthSoma = 0;
  imgs.forEach((item) => {
    widthSoma += item.offsetWidth;
  });

  console.log(widthSoma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((item, index) => {
  if (item.offsetWidth >= 48 && item.offsetHeight >= 48) {
    console.log(`O item de posição ${index} é do tamanho desejado!`);
} else {
    console.log(`O item de posição ${index} é menor que o desejado!`);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const window720 = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");

if (window720.matches) {
  menu.classList.add("menu-mobile");
} else {
  menu.classList.remove("menu-mobile");
}
