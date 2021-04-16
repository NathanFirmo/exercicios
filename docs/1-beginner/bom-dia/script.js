function carregar() {
    let msg = window.document.getElementById('msg')
    let imagem = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    if (hora >= 0 && hora <= 12) {
        //bom dia
        imagem.src = 'img/manha.png'
        msg.innerHTML += '<p>Bom dia!</p>'
        msg.innerHTML += `Agora são <i>${hora} horas.</i></h4>`

        document.body.style.background='#ffb850'
    }
    else if (hora < 18) {
        //boa tarde
        imagem.src = 'img/tarde.png'
        msg.innerHTML += '<p>Boa Tarde!</p>'
        msg.innerHTML += `Agora são <i>${hora} horas.</i></h4>`

        document.body.style.background='#ee8f58'

    }
    else {
        //boa noite
        imagem.src = 'img/noite.png'
        msg.innerHTML += '<p>Boa Noite!</p>'
        msg.innerHTML += `Agora são <i>${hora} horas.</i></h4>`

        document.body.style.background='#2a528b'

    }
}

