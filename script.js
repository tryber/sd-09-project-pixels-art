function generateRandomColors(numberOfColors) {
  const rgbColor = ['rgb(0, 0, 0)'];
  let stringConstructor;
  for (let i = 0; i < numberOfColors; i += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    stringConstructor = `rgb(${red}, ${green}, ${blue})`;
    if (!rgbColor.includes(stringConstructor)) {
      rgbColor.push(stringConstructor);
    } else {
      i -= 1;
    }
  }
  return rgbColor;
}

function createColorPaletteElements() {
  const colors = generateRandomColors(3);
  const colorPallete = document.querySelector('#color-palette');
  for (const color of colors) {
    const colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = color;
    colorPallete.appendChild(colorElement);
  }
}

function fillLineElements(size) {
  const line = document.createElement('div');
  line.className = 'pixel-board-line';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    line.appendChild(pixel);
  }
  return line;
}

function createPixelBoard(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < size; i += 1) {
    const line = fillLineElements(size);
    pixelBoard.appendChild(line);
  }
}

function createControls() {
  const controlsContainer = document.querySelector('#controls-container');
  const clearButton = document.createElement('button');
  clearButton.innerText = 'Limpar';
  clearButton.id = 'clear-board';
  controlsContainer.appendChild(clearButton);

  const input = document.createElement('input');
  const generateBoardButton = document.createElement('button');
  input.type = 'number';
  input.max = '50';
  input.min = '1';
  input.id = 'board-size';
  input.placeholder = 'Tamanho do Tabuleiro';
  input.style.width = '170px';
  generateBoardButton.id = 'generate-board';
  generateBoardButton.innerText = 'VQV';
  controlsContainer.appendChild(input);
  controlsContainer.appendChild(generateBoardButton);
}

function getPelleteColor(event) {
  if (event.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    event.target.className += ' selected';
  }
}

function paintPixel(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}

function clearPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'rgb(255,255,255)';
  }
}

function validSize(size) {
  if (size > 50) {
    size = 50;
  } else if (size < 5) {
    size = 5;
  }
  return size;
}

function getBoardSize() {
  const size = document.querySelector('#board-size').value;

  if (size.length === 0) {
    alert('Board inválido!');
    return false;
  }
  return validSize(size);
}

function generateNewBoard() {
  const size = getBoardSize();
  if (size) {
    const boardStruct = document.querySelectorAll('.pixel-board-line');
    for (const element of boardStruct) {
      element.remove();
    }
    createPixelBoard(size);
  }
}

window.onload = function () {
  createColorPaletteElements();
  createPixelBoard(5);
  createControls();
  document.querySelector('.color').className += ' selected';
  const colorPallete = document.querySelector('#color-palette');
  colorPallete.addEventListener('click', getPelleteColor);
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearPixelBoard);
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', generateNewBoard);
};
