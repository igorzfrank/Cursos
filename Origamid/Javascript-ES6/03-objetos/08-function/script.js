// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragros = document.querySelectorAll("p");

const somaCaracteres = Array.from(paragros).reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(somaCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function newHTML(tag, classe, conteudo) {
  let element = document.createElement(tag);
  element.classList.add(classe);
  element.innerText = conteudo;
  console.log(element)
}

newHTML("li", "ativo", "escrita teste");
newHTML("span", "menu", "teste teste");


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const cloneHTML = newHTML.bind(null, 'h1', 'titulo')

cloneHTML('Teste de escrita')
cloneHTML('Teste de escrita pela segunda vez')