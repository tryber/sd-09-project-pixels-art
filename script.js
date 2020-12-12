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

function addPixels(){
  let qntPixels = document.getElementById("board-size")
  if(qntPixels.value > 5 && qntPixels.value < 10){
    //este bloco de códigos será executado quando for 
    // digitado números entre 6 e 9
    //console.log(qntPixels)
   // alert(qntPixels.value)
  }else{
    //este bloco de códigos será executado caso o número
    //digitado seja menor que 6 e maior que 9
    //alert("A quantidade de pixels não é adequada")
  } 
}

document.getElementById('generate-board').addEventListener('click', addPixels)

function invalidPixels(){
  
}

function cincoCinquenta(){
  let menorMaiorPixels = Number(document.getElementById("board-size").value)
  if(menorMaiorPixels < 5 ){
    menorMaiorPixels = 5
    //alert("A quantidade de pixels modificada")
  } else if(menorMaiorPixels > 50){
    menorMaiorPixels = 50
   // alert("A quantidade de pixels modificada")
  }
}
document.getElementById('generate-board').addEventListener('click', cincoCinquenta)