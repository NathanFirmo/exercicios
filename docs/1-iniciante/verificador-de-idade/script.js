function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let inputAno = document.getElementById("txtano");
  let res = document.getElementById("resultado");

  if (inputAno.value.length == 0 || inputAno > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    res.innerHTML = ' <img src="" id = "foto">';
    var img = document.getElementById("foto");
    // img.setAttribute('id', 'foto')
    let sex = document.getElementsByName("radsex");
    let idade = ano - Number(inputAno.value);
    if (sex[0].checked) {
      var genero = "Homem";
      if (idade > 0 && idade < 10) {
        img.setAttribute("src", "img/crianca-m.png");
      } else if (idade < 20) {
        img.setAttribute("src", "img/jovem-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto-m.png");
      } else {
        img.setAttribute("src", "img/idoso-m.png");
      }
    } else {
      var genero = "Mulher";
      if (idade > 0 && idade < 10) {
        img.setAttribute("src", "img/crianca-f.png");
      } else if (idade < 20) {
        img.setAttribute("src", "img/jovem-f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto-f.png");
      } else {
        img.setAttribute("src", "img/idoso-f.png");
      }
    }
    // res.style.textAlign = 'center'
    res.innerHTML += `<p>${genero} de ${idade} anos.</p>`;
  }
}
