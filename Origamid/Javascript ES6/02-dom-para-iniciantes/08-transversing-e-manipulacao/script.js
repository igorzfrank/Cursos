// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy')
const copyMenu = menu.cloneNode(true);

footer.appendChild(copyMenu);


// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('#faq>dl> dt');
console.log(firstDt)

// Selecione o DD referente ao primeiro DT
console.log(firstDt.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;