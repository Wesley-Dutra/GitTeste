document.getElementById('calcular').addEventListener('click', calcula)

function calcula() {
    var num = document.getElementById('num')
    var mult = Number(num.value)
    var result = document.getElementById('res')
    result.innerHTML = ''
    
    if (num.value == 0) {
        window.alert("Informe um número!")
    } else {
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${mult} x ${i} = ${mult * i}`
            result.appendChild(item)
        }
        
    }
    
}