//colorir
let colorPalette = document.getElementById("color-palette")
let pixelBoard = document.getElementById("table")
let blackEvent = document.querySelector('.selected').style.backgroundColor
//botão + apagar/ pintar de branco
let clickWhite = document.querySelector('#clear-board')
let whiteColor = document.querySelector('.whiteColor')



pixelBoard.addEventListener("click", function(event){
  console.log(event.target)

  event.target.style.backgroundColor = blackEvent
  console.log(blackEvent)
  
})

colorPalette.addEventListener("click", function(event){
  console.log(event.target)
  blackEvent = event.target.style.backgroundColor   
})

clickWhite.addEventListener("click", function(event){
  let pixels = document.querySelectorAll('.pixel')
  for( let index =0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }

})



