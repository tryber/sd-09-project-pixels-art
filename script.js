window.onload = function () {
  createPalette();
  colorsOfThePalette();
  createPixelsBoard();
  selectColor();
  clearPixels();
  generateButton();
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

function selectColor() {
  let selectColor = document.querySelectorAll('.color')
  for (let index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', function () {
      for (let othersIndex = 0; othersIndex < selectColor.length; othersIndex += 1) {
        selectColor[othersIndex].classList.remove('selected');
      }
      this.classList.add('selected');
    })
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel')
  document.querySelector('#clear-board').addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  })
}

function createPixelsBoard() {
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';

  let inputBoardSize = document.querySelector('#board-size').value;
  let pixelColumn = 5;

  if (inputBoardSize >= 5 && inputBoardSize <= 50) {
    pixelColumn = inputBoardSize;
  } else if (inputBoardSize > 50) {
    pixelColumn = 50;
  }

  for (let indexLine = 0; indexLine < pixelColumn; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');

    for (let indexColumn = 0; indexColumn < pixelColumn; indexColumn += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', function () {
        const selectedElement = document.querySelector('.color.selected');
        const currentColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
        this.style.backgroundColor = currentColor;
      })
      pixelLine.appendChild(pixel);
    };
    pixelBoard.appendChild(pixelLine);
  }
}

function generateButton() {
  document.querySelector('#generate-board').addEventListener('click', createPixelsBoard)
}
