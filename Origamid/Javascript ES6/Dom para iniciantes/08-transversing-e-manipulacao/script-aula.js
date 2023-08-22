// const h1 = document.querySelector("h1");

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// const lista = document.querySelector(".animais-lista");

// console.log(list.parentElement)
// console.log(list.nextElementSibling)
// console.log(lista.previousElementSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo);
// contato.insertBefore(animais, mapa)

// contato.removeChild(titulo);
// contato.replaceChild(mapa, titulo);

// const novoh1 = document.createElement('h1');

// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

cloneh1.classList.add('azul');

faq.appendChild(cloneh1);
