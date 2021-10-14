function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA! #8b9d84
        img.src = 'fotomanha.png'
        document.body.style.background = '#8b9d84'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE! #ce4d45
        img.src = 'fototarde.png'
        document.body.style.background = '#ce4d45'
    } else {
        // BOA NOITE! #9382b8
        img.src = 'fotonoite.png'
        document.body.style.background = '#9382b8'
    }
}
