function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA! #849299
        img.src = 'imagens/manha.png'
        document.body.style.background = '#849299'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE! #CD701B
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#CD701B'
    } else {
        // BOA NOITE! #141822
        img.src = 'imagens/noite.png'
        document.body.style.background = '#141822'
    }
}
