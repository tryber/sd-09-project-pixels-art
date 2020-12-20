// Selecionar Cor
function colorSelected () {
  let colorSelected = document.querySelector("#color-palette")

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



