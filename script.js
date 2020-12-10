window.onload = function () {
  createPalette();
  colorsOfThePalette();
  createPixelsBoard();
  selectColor();
  paintThePixel();
  clearPixels();
}

function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  const numberOfColors = 4;

  for (let index = 0; index < numberOfColors; index += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    colorPalette.appendChild(color);
  }
  document.querySelector('.color').classList.add('selected');
}

function colorsOfThePalette() {
  let paletteElements = document.getElementsByClassName('color');
  paletteElements[0].style.backgroundColor = 'black';
  paletteElements[1].style.backgroundColor = 'rgb(196, 77, 88)';
  paletteElements[2].style.backgroundColor = 'rgb(199, 244, 100)';
  paletteElements[3].style.backgroundColor = 'rgb(78, 170, 198)';
}

function createPixelsBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const pixelColumn = 5;

  for (let indexLine = 0; indexLine < pixelColumn; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');

    for (let indexColumn = 0; indexColumn < pixelColumn; indexColumn += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);

    };
    pixelBoard.appendChild(pixelLine);
  }

}

function selectColor() {
  let selectColor = document.querySelectorAll('.color')
  for (let index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', function () {
      for (let othersIndex = 0; othersIndex < index; othersIndex += 1) {
        selectColor[othersIndex].classList.remove('selected');
      }
      this.classList.add('selected');
    })
  }
}


function paintThePixel() {
  const pixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      const selectedElement = document.querySelector('.color.selected');
      const currentColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
      this.style.backgroundColor = currentColor;
    })
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel')
  document.querySelector('#clear-board').addEventListener('click', function () {
    for (pixel in pixels) {
      pixels[pixel].style.backgroundColor = 'white';
    }
  })
}
