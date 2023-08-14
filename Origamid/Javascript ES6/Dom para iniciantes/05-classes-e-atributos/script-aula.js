const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");

console.log(animais.attributes);
// console.log(animais.attributes[1]);

const img = document.querySelector('img');

img.setAttribute('alt', 'É uma raposa');
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

console.log(img.getAttribute('alt'));
