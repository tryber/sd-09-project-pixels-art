window.addEventListener("load", main)

function main() {
  // verify if started color starts with black
  console.log(document.getElementsByClassName("selected"))
  selectedColor()

  clearBoard()
  createPixelBoard()
  paintPixels()
  loadMsg()
}



function factory() {
  const palleteOptions = document.getElementsByClassName("color")
  const paint = document.querySelector(".selected")
  const clearBoardButton = document.getElementById("clear-board")
  const myBoard = document.getElementById("pixel-board")
  const inputPixelsQuantity = document.getElementById("board-size")
  const buttonAddPixels = document.getElementById("generate-board")
  return {
    MyPallete: palleteOptions,
    Paint: paint,
    ClearBoardButton: clearBoardButton,
    MyBoard: myBoard,
    InputPixelsQuantity: inputPixelsQuantity,
    ButtonAddPixels: buttonAddPixels,
  }
}
   let myPixels = document.querySelectorAll(".pixel")
function createPixelBoard() {
  const makeFactory = factory()
  const myBoard = makeFactory.MyBoard
  const buttonAddPixels = makeFactory.ButtonAddPixels
  const inputPixelsQuantity = makeFactory.InputPixelsQuantity
  buttonAddPixels.addEventListener('click', function () {
    let valueSizeBoard = inputPixelsQuantity.value
     if(valueSizeBoard < 5) {
       valueSizeBoard = 5
     }
     if(valueSizeBoard > 50) {
      valueSizeBoard = 50
    }
    myBoard.innerHTML = null
    for( let i = 0; i < valueSizeBoard; i += 1) {
      for ( let j = 0; j < valueSizeBoard; j += 1){
        myBoard.innerHTML += '<div class="pixel"></div>'
      }
    }
    document.getElementById("pixel-board").style.width = `calc(42px * ${valueSizeBoard})`
    document.getElementById("pixel-board").style.height = `calc(40px * ${valueSizeBoard})`
    myPixels = document.querySelectorAll(".pixel")
   paintPixels()
  })

}

function clearBoard() {
   const makeFactory = factory()
   const clearBoardButton = makeFactory.ClearBoardButton
   clearBoardButton.addEventListener('click', function(){
     for ( let i = 0; i < myPixels.length; i += 1) {
       myPixels[i].style.backgroundColor = "white"
     }
   })
}

function paintPixels() {
  console.log(myPixels)
  for ( let i = 0; i < myPixels.length; i += 1) {
    myPixels[i].addEventListener("click", function() {

      colorizePixel(i)
    })
  }

}
function colorizePixel(index){
  const makeFactory = factory()
  const paint = makeFactory.Paint
  const color = paint.classList[1]
  console.log(myPixels[index])
  myPixels[index].style.backgroundColor = color
}


function selectedColor() {
  const makeFactory = factory()
  const myPallete = makeFactory.MyPallete
  console.log(myPallete.length)
  for ( let i = 0; i < myPallete.length; i += 1) {
    myPallete[i].addEventListener("click", function(e){
    let color = e.target.classList[1]
     changeSelect(color)
    })
   }
}

function changeSelect(color) {
  const makeFactory = factory()
  const myPallete = makeFactory.MyPallete
  for ( let i = 0; i < myPallete.length; i += 1) {
      if (color === myPallete[i].classList[1]) {
        myPallete[i].classList.add("selected")
        console.log(myPallete[i].classList)
      } else {
        myPallete[i].classList.remove("selected")
        console.log(myPallete[i].classList)
      }
   }
}


function loadMsg() {
  console.log('scriptsLoaded')
}


