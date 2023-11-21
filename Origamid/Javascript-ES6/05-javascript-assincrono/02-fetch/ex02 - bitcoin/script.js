// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const display = document.querySelector('.price')

function bitAnaliser() {
    const bitcoin = fetch('https://blockchain.info/ticker')
    bitcoin.then(r => r.json()).then((coin) => {
        display.innerHTML = coin.BRL.buy
    })
}


setInterval(bitAnaliser, 1000)