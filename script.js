window.addEventListener("load", main)


function main() {
  // verify if started color starts with black
  console.log(document.getElementsByClassName("selected"))
  selectedColor()
  paintPixel()
  loadMsg()
}

function factory() {
  const palleteOptions = document.getElementsByClassName("color")
  const paint = document.querySelector(".selected")
  const myPixels = document.getElementsByClassName("pixel")
  return {
    MyPallete: palleteOptions,
    Paint: paint,
    MyPixels: myPixels
  }
}

function paintPixel() {
  const makeFactory = factory()
  const myPixels = makeFactory.MyPixels
  for ( let i = 0; i < myPixels.length; i += 1) {
    myPixels[i].addEventListener("click", function() {

      colorizePixels(i)
    })
  }
}
function colorizePixels(index){
  const makeFactory = factory()
  const paint = makeFactory.Paint
  const myPixels = makeFactory.MyPixels
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


