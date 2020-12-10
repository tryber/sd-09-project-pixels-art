window.onload = function() {
  createPalette();
  paintPalette();
  createPixelBoard();
  classSelected();
  paintPixel();
  clearPixelBoard()
}

function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  const numberOfColors = 4;
  for (let index = 0; index < numberOfColors; index += 1) {
    const colorSquare = document.createElement('div');
    colorSquare.classList.add('color');
    colorPalette.appendChild(colorSquare)
  }
  document.querySelector('.color').classList.add('selected');
}

function paintPalette() {
  const coloredSquare = document.querySelectorAll('.color');
  coloredSquare[0].style.backgroundColor = 'black';
  coloredSquare[1].style.backgroundColor = 'pink';
  coloredSquare[2].style.backgroundColor = 'rgb(239, 233, 174)';
  coloredSquare[3].style.backgroundColor = 'teal';
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  const numberOfColumns = 5;
  for (let line = 0; line < numberOfColumns; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

function classSelected() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index<colors.length; index += 1) {
    colors[index].addEventListener('click', function(event){
      for (let index2 = 0; index2 < colors.length; index2 += 1) {
        colors[index2].classList.remove('selected');
      }
      event.target.classList.add('selected')
    })
  }
}

function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event){
      const elementSelected = document.querySelector('.color.selected');
      const elementSelectedBackgroundColor = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = elementSelectedBackgroundColor;
    })
  }
}

function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function(){
    for (let index = 0; index < pixels.length; index += 1){
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  })
}
