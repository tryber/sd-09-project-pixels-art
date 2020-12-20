// Selecionar Cor
function colorSelected() {
  const colorSelected = document.querySelector("#color-palette")

  colorSelected.addEventListener('click', function(event) {
    // Remover ".selected" anterior
    let initialColor = document.querySelector(".selected")
    initialColor.classList.remove("selected")

    // Colocar o ".selected" na cor clicada
    let newSelected = event.target
    newSelected.classList.add("selected")

  })
}

colorSelected()

// Pintar Pixel
function paintPixel() {
  const color1 = "black"
  const color2 = "red"
  const color3 = "green"
  const color4 = "blue"

  

  let selectedPixel = document.querySelector("#pixel-board")
  selectedPixel.addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected').classList[1]
    
    let pixel = event.target
    pixel.className = `pixel ${selectedColor}`
  })
}
paintPixel()


