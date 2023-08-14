// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu li");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
  if (index > 0) {
    item.classList.remove("ativo");
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  if (item.hasAttribute("alt")) {
    console.log(`O item de index ${index} tem atributo alt`);
  }
});

// Modifique o href do link externo no menu
const linksMenu = document.querySelectorAll(".menu a");
linksMenu.forEach((item) => {
  if (item.hasAttribute("href")) {
    item.setAttribute("href", "www.google.com.br");
  }
});
