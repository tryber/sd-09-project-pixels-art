window.addEventListener("load", main)


function main() {
  // verify if started color starts with black
  console.log(document.getElementsByClassName("selected"))


  selectedColor()

  loadMsg()
}

function factory() {
  const palleteOptions = document.getElementsByClassName("color")
  return {
    MyPallete: palleteOptions
  }
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


