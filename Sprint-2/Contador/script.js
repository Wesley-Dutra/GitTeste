document.getElementById('contar').addEventListener('click', contagem)

function contagem() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('passo')
    var res = document.getElementById('res')
    var result = ""

    if (ini.value.length == 0 || pass.value.length == 0 || fim.value.length == 0 ) {
        res.innerHTML = "Todos os campos devem ser informados!"
    } else {
        let p = Number(pass.value), f = Number(fim.value), i = Number(ini.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                result += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                result += `${c} `
            }
        }
        res.innerHTML = result
    }
    res.style.border = "2px solid rgb(104, 33, 122)"
    res.style.backgroundColor = "rgb(246, 211, 255)"
    res.style.color = "rgb(201, 171, 0)"
    res.style.fontWeight = "bold"
}