//colorir
let colorPalette = document.getElementById("color-palette")
let pixelBoard = document.getElementById("pixel-board")
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
function removePixel(){
  let pixelsBoard = document.getElementById('pixel-board');
  let pixelBoardChildren = pixelsBoard.children;
  //let length = pixelBoardChildren[0].length;
  let rowNumbers = Number(pixelBoardChildren[0].children.length);
  
  for (let index=rowNumbers-1; index >=0; index -= 1) {
    pixelBoard.deleteRow(index);
  }
}

function addPixels(){
  let qntPixels = document.getElementById('board-size').value;
  let qntNumbers = Number(qntPixels);
  let pixelsBoard = document.getElementById('pixel-board');

  removePixel();
  for(let index=0; index < qntNumbers; index += 1){
    let newRow = pixelsBoard.insertRow(index);
    for(let aux=0; aux < qntNumbers; aux += 1){
      let newPixel = newRow.insertCell(aux);
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
    }
  }
  
}

document.getElementById('generate-board').addEventListener('click', addPixels)

function invalidPixels(){
  
}

function cincoCinquenta(){
  let x = document. getElementById('board-size');
  let menorMaiorPixels = Number(document.getElementById("board-size").value);
  if(menorMaiorPixels < 5 ){
    x.value = 5
    //alert("A quantidade de pixels modificada")
  } else if(menorMaiorPixels > 50){
    x.value = 50
   // alert("A quantidade de pixels modificada")
  }
}

document.getElementById('board-size').addEventListener('change', cincoCinquenta)

//change: executa quando o usuário tira o foco, ou seja, "desclica".