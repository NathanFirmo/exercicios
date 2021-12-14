function load() {
    const textTankYou = document.getElementById('tanks')
    let data = new Date()
    let hora = data.getHours()
    
    if (hora >= 0 && hora <= 12) {
        textTankYou.innerHTML += 'Tenha um <strong>excelente dia!</strong>'
    }
    else if (hora < 18) {
        textTankYou.innerHTML += 'Tenha uma <strong>excelente tarde!</strong>'
    }
    else {
        textTankYou.innerHTML += 'Tenha uma <strong>excelente noite!</strong>'
    }
}