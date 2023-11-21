// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const li = document.querySelectorAll('li')

for(linha of li) {
    linha.classList.add('linha')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const prop in window) {
    console.log(`${prop}: ${window[prop]}`)
}