const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");

const primeiraLi = document.querySelector("li");

const linksInternos = document.querySelector('[href^="#"]');

console.log(linksInternos);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item, index);
});

const arrayGrid = Array.from(gridSectionHTML);

console.log(arrayGrid);

arrayGrid.forEach(function (item, index) {
  console.log(item, index);
});
