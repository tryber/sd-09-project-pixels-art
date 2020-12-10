let colorPalette = document.getElementById("color-palette")
let pixelBoard = document.getElementById("table")
let blackEvent = document.querySelector('.selected').style.backgroundColor

pixelBoard.addEventListener("click", function(event){
  console.log(event.target)
  event.target.style.backgroundColor = blackEvent
})

colorPalette.addEventListener("click", function(event){
  console.log(event.target)
  blackEvent = event.target.style.backgroundColor  
})

/*8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
As seguintes verificações serão feitas:
Ao carregar a página deve ser possível pintar os pixels de preto;

Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels. */