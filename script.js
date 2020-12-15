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
  paletteColor[1].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
  paletteColor[2].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
  paletteColor[3].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
}

function createPixelBoard(num) {
  const pixelBoard = document.getElementById('pixel-board');
  const numOfColumns = num;
  for (let row = 0; row < numOfColumns; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');
    for (let column = 0; column < numOfColumns; column += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelRow.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelRow);
  }
} createPixelBoard(5);

function selectedElement() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function () {
      for (let index2 = 0; index2 < colors.length; index2 += 1) {
        colors[index2].classList.remove('selected');
      }
      this.classList.add('selected');
    });
  }
}

function colorPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      const elementSelected = document.querySelector('.color.selected');
      const elementSelectedColor = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      this.style.backgroundColor = elementSelectedColor;
    });
  }
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}

function paletteRandomizer() {
  const button = document.querySelector('#randomize-colors');
  button.addEventListener('click', colorizePalette);
}

function inputValue() {
  let input = parseInt(document.getElementById('board-size').value, 10);
  if (input < 5) {
    input = 5;
  } else if (input > 50) {
    input = 50;
  } return input;
}

function removeBoard() {
  const lines = document.querySelector('#pixel-board').children;
  const lineLength = lines.length;
  for (let index = 0; index < lineLength; index += 1) {
    lines[0].remove();
  }
}

function newBoard() {
  const input = inputValue();
  if (!input) {
    alert('Board inválido!');
    return;
  }
  removeBoard();
  createPixelBoard(input);
  colorPixel();
}

const vqv = document.querySelector('#generate-board');
vqv.addEventListener('click', newBoard);

window.onload = function () {
  createPalette();
  colorizePalette();
  createPixelBoard();
  selectedElement();
  colorPixel();
  clearBoard();
  paletteRandomizer();
};
