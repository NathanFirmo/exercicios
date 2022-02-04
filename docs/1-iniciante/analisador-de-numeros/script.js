var dados = []
var pos = -1
posicao = 1

function sortfunction(a, b) {
  return a - b //faz com que o array seja ordenado numericamente e de ordem crescente.
}

function adicionar() {
  pos += 1
  res.innerText = ''
  var entrada = document.getElementById('entradadousuario')

  var exibicao = document.getElementById('numeros') //adiciona a entrada do usuário no array

  if (entrada.value < 0 || entrada.value > 100) {
    window.alert('ERRO! Insira um número válido!')
  } else if (pos > 0 && dados.indexOf(entrada.value) != -1) {
    window.alert(`ERRO! O número ${entrada.value} já está na lista!`)
    pos -= 1
  } else {
    dados.push(entrada.value)
    exibicao.innerText += ` ${dados[pos]} `
    if (posicao < 5) {
      exibicao.innerText += ` - `
    }
    posicao += 1
    if (posicao == 6) {
      posicao = 1
      exibicao.innerHTML += `</br>`
    }
  }
}
function analisar() {
  var res = document.getElementById('res')
  dados.sort(sortfunction)
  var s = 0
  for (let pos2 in dados) {
    s += Number(dados[pos2])
  }
  var a = dados.length
  Number(a)
  var m = s / a
  res.innerText += `O menor valor é ${dados[0]}`
  res.innerHTML += '</br>'
  res.innerText += `O maior valor é ${dados[a - 1]}`
  res.innerHTML += '</br>'
  res.innerText += `A soma dos valores é ${s}`
  res.innerHTML += '</br>'
  res.innerText += `A média dos valores é ${m}`
}
