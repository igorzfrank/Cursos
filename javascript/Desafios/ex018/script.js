var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de FINALIZAR!')
    } else {
        var tot = valores.length
        var maior = valores [0]
        var menor = valores [0]
        var soma = 0
        let media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML =''
        res.innerHTML += `<br>Ao todo, temos ${tot} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${media}.<br>`
    }
}