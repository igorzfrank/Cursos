function contar() {
    var inicio = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'ERROR! Preencha todos os campos'
    } else {
        res.innerHTML = '<p>Contando: </p>'
        
        if (Number(passo.value) <= 0) {
            window.alert('Passo inválido, calculado com passo 1')
            passo.value = 1
        }

        if (inicio.value < fim.value) {
            // Contagem Crescente
            for (var c = Number(inicio.value); c <= Number(fim.value) ; c += Number(passo.value)) {
                res.innerHTML += `&#x1F449 ${c} `
            }
        } else {
            // Contagem Regressiva
            for (var c = Number(inicio.value); c >= Number(fim.value) ; c -= Number(passo.value)) {
                res.innerHTML += `&#x1F449 ${c} `
            }
        }

        res.innerHTML += '&#x1F3C1'

    }
}