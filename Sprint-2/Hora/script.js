function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/dawn.png'
        document.body.style.backgroundColor = "rgb(35, 139, 165)"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon.png'
        document.body.style.backgroundColor = "rgb(209, 156, 43)"
    } else {
        img.src = 'img/night.png'
        document.body.style.backgroundColor = "rgb(51, 51, 51)"
    }
}