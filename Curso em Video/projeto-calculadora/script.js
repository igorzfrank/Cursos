var tela = window.document.getElementById('tela')

var um = window.document.getElementById('um')
var dois = window.document.getElementById('dois')
um.addEventListener('click', insert)
dois.addEventListener('click', insert)

function insert(num) {
    tela.innerHTML =  num;
}