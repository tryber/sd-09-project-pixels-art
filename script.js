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

function createPixelBoard(num) {
  const pixelBoard = document.getElementById('pixel-board');
  const numOfCol = num;
  for (let line = 0; line < numOfCol; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let col = 0; col < numOfCol; col += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

createPixelBoard(5);

function getInputValue() {
  let input = parseInt(document.querySelector('input').value, 10);
  if (input < 5) {
    input = 5;
  } else if (input > 50) {
    input = 50;
  }
  return input;
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
    pixels[index].addEventListener('click', function (event) {
      const classSelected = document.querySelector('.color.selected');
      const classSelectedColor = window.getComputedStyle(classSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = classSelectedColor;
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

function deletePixels() {
  const lines = document.querySelector('#pixel-board').children;
  const lineLength = lines.length;
  for (let i = 0; i < lineLength; i += 1) {
    lines[0].remove();
  }
}

function newBoard() {
  const input = getInputValue();
  if (!input) {
    alert('Board inválido!');
    return;
  }
  deletePixels();
  createPixelBoard(input);
  paintPixel();
}

const vqv = document.querySelector('#generate-board');
vqv.addEventListener('click', newBoard);

window.onload = function () {
  createPalette();
  colorizePalette();
  createPixelBoard();
  selectedColor();
  paintPixel();
  clearPixelBoard();
  randomNumbers();
  paletteRandomizer();
};
