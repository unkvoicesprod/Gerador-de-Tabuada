

function clicar() {
    let nun = document.querySelector('#n1')
    let tab = document.querySelector('#seltab')
    let msg = document.querySelector('.msg')
    if (nun.value.length == 0) {
        msg.innerHTML = '[ERRO] digite um numero '
    } else {
        let n = Number(nun.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 20) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}