const paletaDeCores = document.getElementById('color-palette')
const paletaDePreenchimento = document.getElementById('pixel-board')
let corPreenchida = document.getElementsByClassName("color")
let corDePintura = document.getElementsByClassName("pixel")
let corDorQuadrado = ""

paletaDeCores.addEventListener('click', (event) => {
  for (let i = 0; i <= corPreenchida.length; i += 1) {
      if (corPreenchida[i] === event.target) {
          // console.log("evento Selecionado")
          corPreenchida[i].classList.add('selected')
          corDorQuadrado = corPreenchida[i].classList[1]
      } else if (corPreenchida[i] !== event.target) {
          try {
              corPreenchida[i].classList.remove('selected');
          } catch (e) {
              return e
              // console.log("Foi removido seleção anterior")
}}}})

paletaDePreenchimento.addEventListener('click', (event) => {
  for (let i = 0; i <= corDePintura.length; i += 1) {
    if (corDePintura[i] === event.target) {
      try {
      corDePintura[i].className = "pixel"
      corDePintura[i].classList.add(corDorQuadrado);
      } catch (e) {
      return e
}}}})
