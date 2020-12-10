window.onload = function() {
 createPallete();
 colorizePallete (); 
 createPixelBoard();
 dancingSelected ();
 clearBoard ();
 colorPixel (); 
 randomNumbers ();
}

// criar paleta de cores
function createPallete(){
  const colorPallete = document.getElementById('color-palette');
  const colorsToPaint = 4
  for (let index = 0; index < colorsToPaint; index +=1) {
    const color = document.createElement('div');
    color.classList.add('color');
    colorPallete.appendChild(color);
  }
  document.querySelector('.color').classList.add('selected')
}

//colorit paleta de cores
function colorizePallete () {
  const palleteColor = document.querySelectorAll('.color');
  palleteColor[0].style.backgroundColor = 'black';
  palleteColor[1].style.backgroundColor = `rgb(${randomNumbers()},${randomNumbers()},${randomNumbers()})`;
  palleteColor[2].style.backgroundColor = `rgb(${randomNumbers()},${randomNumbers()},${randomNumbers()})`;
  palleteColor[3].style.backgroundColor = `rgb(${randomNumbers()},${randomNumbers()},${randomNumbers()})`;;
}

function createPixelBoard(){
  const pixelBoard = document.getElementById('pixel-board');
  const numOfCol = 5;
  for (let line = 0; line < numOfCol ; line +=1 ) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let col = 0; col < numOfCol; col +=1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }

}

//fazer com que a classe selected mude de acordo com o clique na paleta
function dancingSelected () {
  const colors = document.getElementsByClassName('color');
  for (let index = 0 ; index < colors.length; index += 1) {
    colors[index].addEventListener("click", function(event) {
    for (let index2 = 0; index2 < colors.length; index2 +=1) {
      colors[index2].classList.remove('selected');
    }
    event.target.classList.add('selected');
    })
  }
}
// recomeca aqui

function colorPixel () {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      const elementSelected = document.querySelector('.color.selected');
      const elementSelectedColor = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      this.style.backgroundColor = elementSelectedColor;
    })
  }
}
function clearBoard () {
  const pixels = document.getElementsByClassName('pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index +=1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  })
}
function randomNumbers () {
  return Math.round(Math.random()*255)
}

function ramdomPalette () {
  const button = document.querySelector('random-palette');
  button.addEventListener('click',colorizePallete()));
}