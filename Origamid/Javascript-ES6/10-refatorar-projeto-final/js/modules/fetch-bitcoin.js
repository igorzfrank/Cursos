export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}

// https://blockchain.info/ticker