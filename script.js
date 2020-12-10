// Seleciona a cor preta ao abrir o app
function colorOnload() {
  let colorSelected = document.querySelector('#black')

  return colorSelected
}

colorOnload()

// 7 - Seleciona a cor na paleta

function selectColor() {
  
  const color = document.querySelector('#color-palette')
  color.addEventListener('click', clickSelectedColor)

}

selectColor()
function clickSelectedColor(event) {
  
  let selected = document.querySelector('.selected')

  selected.classList.remove('selected')

  event.target.classList.add('selected')
  
}

