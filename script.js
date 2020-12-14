window.onload = function () {
};
function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  const numOfColors = 4;
  for (let index = 0; index < numOfColors; index += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    colorPalette.appendChild(color);
  }
  document.querySelector('.color').classList.add('selected');
}
function randomNumbers() {
  return Math.round(Math.random() * 255);
}
function colorizePalette() {
  const paletteColor = document.querySelectorAll('.color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[2].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[3].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
}

function createPixelBoard(imputNumber = 5) {
  if (!imputNumber) {
    alert('Board inválido!');
    return;
  } else if (imputNumber < 5) {
    imputNumber = 5;
  } else if (imputNumber > 50) {
    imputNumber = 50;
  }
  deleteBoard();
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < imputNumber; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let col = 0; col < imputNumber; col += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
  paintPixel();
}
function selectedColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      for (let others = 0; others < colors.length; others += 1) {
        colors[others].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      const classSelected = document.querySelector('.color.selected');
      const classSelectedColor = window.getComputedStyle(classSelected).getPropertyValue('background-color');
      this.style.backgroundColor = classSelectedColor;
    });
  }
}

function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  document.querySelector('#clear-board').addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function paletteRandomizer() {
  document.querySelector('#randomize-palette').addEventListener('click', colorizePalette);
}

function newSize () {
  let imputNumber = parseInt(document.getElementById('board-size').value);
  const button = document.getElementById('generate-board');
  button.addEventListener('click',createPixelBoard(imputNumber))
}

function deleteBoard() {
  let line = document.querySelector('#pixel-board').children
  let linelength = line.length;
  for (let index = 0; index < linelength; index += 1) {
    line[0].remove();
  }
}

createPalette();
colorizePalette();
createPixelBoard();
selectedColor();
paintPixel();
clearPixelBoard();
randomNumbers();
paletteRandomizer();
