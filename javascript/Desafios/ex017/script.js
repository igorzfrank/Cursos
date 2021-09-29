function calcular() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
    for (c = 0; c <= 10; c++) {
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item)
    }
    }
}
