document.getElementById('validar').addEventListener('click', validar)

function validar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('ano').value
    var res = document.getElementById('res')

    if (String(anoNasc).length != 4) {
        window.alert("Ano informado deve conter 4 digitos!")
    } else if (anoNasc > anoAtual) {
        window.alert(`Ano informado é maior que ${anoAtual}!`)
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - anoNasc 
        var img = document.createElement('img')
        if (sexo[0].checked) {
            res.innerText = `Foi detectado um ${sexo[0].value} de ${idade} anos!`
            if (idade <= 12) {
                img.setAttribute('src', 'img/child-M.png')
            } else if (idade <= 19) {
                img.setAttribute('src', 'img/teenager-M.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'img/adult-M.png')
            } else {
                img.setAttribute('src', 'img/sir.png')
            }
        } else if (sexo[1].checked) {
            res.innerText = `Foi detectado uma ${sexo[1].value} de ${idade} anos!`
            if (idade <= 12) {
                img.setAttribute('src', 'img/child-F.png')
            } else if (idade <= 19) {
                img.setAttribute('src', 'img/teenager-F.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'img/adult-F.png')
            } else {
                img.setAttribute('src', 'img/maam.png')
            }
        }
        res.appendChild(img)
        img.style.width = '250px'
        img.style.margin = '30px 0px'
    }


}