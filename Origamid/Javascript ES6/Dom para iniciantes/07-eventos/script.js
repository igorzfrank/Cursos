// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function itemHandle(e) {
  e.preventDefault();
  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  });
  e.currentTarget.classList.add("ativo");
}

linksInternos.forEach((item) => {
  item.addEventListener("click", itemHandle);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

// function handleElement(event) {
//   console.log(event.target);
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElement);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElement(event) {
  event.target.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElement);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const html = document.querySelector('html');

function sizeUp(event) {
    if (event.key === 't') {
        html.classList.add('texto-maior')
    }
}

window.addEventListener('keydown', sizeUp)
