function contar() {
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERROR 404] Faltam dados!')
    } else {
        res.innerHTML = '<p>Contando:</p>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
        for (var c = i; c <= f; c += p){
            res.innerHTML += `&#x1F449 ${c} `
        }
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `&#x1F449 ${c} `
            }
        }
        res.innerHTML += '&#x1F3C1'
    }
}