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

 /* const color = document.querySelectorAll('.color')
 
  for(index = 0; index < color.length; index += 1) {
  
    color[index].addEventListener('click', function(event){
      let selected = document.querySelector('.selected')

      selected.classList.remove('selected')
    
      event.target.classList.add('selected')
    })
  }*/
}

selectColor()


 
function clickSelectedColor(event) {
  
 let selected = document.querySelector('.selected')

  selected.classList.remove('selected')

  event.target.classList.add('selected')





  //----------------------------------------------------


}

function setColor() {
  const colorBlack = document.querySelector('#black')
  const colorRed = document.querySelector('#red')
  const colorBlue = document.querySelector('#blue')
  const colorGreen = document.querySelector('#green')

  colorBlack.style.backgroundColor = 'black'
  colorRed.style.backgroundColor = 'red'
  colorBlue.style.backgroundColor = 'blue'
  colorGreen.style.backgroundColor = 'green'
}

setColor()

// 8 - Pintar pixel

function selectPixel() {

  let pixels = document.querySelectorAll('.tr')

  

  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {

      const selectedColor = document.querySelector('.selected') 
      let pixelBg = selectedColor.id//.style.backgroundColor;

      event.target.style.backgroundColor = pixelBg

     /* if (event.target.style.backgroundColor === pixelBg) {
        event.target.style.backgroundColor = 'white';
        
      } else {
        
        event.target.style.backgroundColor = pixelBg;
      }
    */

    })
  }


 /* 
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {

      const selectedPixel = document.querySelector('.selected')
      

      let bgColor = selectedPixel.style.backgroundColor;

      if (event.target.style.backgroundColor === bgColor) {
        event.target.style.backgroundColor = 'black'
      } else {
        event.target.style.backgroundColor = bgColor
      }
    })
  }
  */

}
selectPixel( )