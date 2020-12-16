let currentColor;

function generateColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red} , ${green} , ${blue})`;
  return color;
}

function handleSelectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  const currentColorElement = event.target;
  currentColor = event.target.style.backgroundColor;
  currentColorElement.classList.add('selected');
}

function handleFillPixel(event) {
  const currentPixel = event.target;
  currentPixel.style.backgroundColor = currentColor;
}

function handleButton() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}

function createPaletteColor() {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    if (index === 0) {
      colorBox.classList.add('box', 'color', 'circle', 'selected');
      colorBox.style.backgroundColor = 'rgb(0 , 0 , 0)';
      currentColor = 'rgb(0 , 0 , 0)';
    } else {
      colorBox.classList.add('box', 'color', 'circle');
      colorBox.style.backgroundColor = generateColors();
    }
    colorBox.addEventListener('click', handleSelectColor);
    colorPalette.appendChild(colorBox);
  }
}

function createInputContainer() {
  const inputContainer = document.createElement('div');
  inputContainer.id = 'input-container';
  const clearButton = document.getElementById('clear-board');
  const container = document.querySelector('#container');
  container.insertBefore(inputContainer, clearButton);
}

function createInput() {
  const createInputElement = document.createElement('input');
  const inputContainer = document.getElementById('input-container');
  createInputElement.id = 'board-size';
  createInputElement.setAttribute('placeholder', 'Board size');
  createInputElement.setAttribute('type', 'number');
  createInputElement.setAttribute('min', '1');
  createInputElement.setAttribute('max', '50');
  inputContainer.appendChild(createInputElement);
}

function createPixelBoard(inputValue) {
  const board = document.getElementById('pixel-board');
  if (inputValue === '') {
    alert('Board inválido!');
  }
  if (inputValue < 5) {
    const minValue = 5;
    inputValue = minValue;
  }
  if (inputValue > 50) {
    const maxValue = 50;
    inputValue = maxValue;
  }
  const boardSize = inputValue * inputValue;
  board.style.gridTemplateColumns = `repeat(${inputValue}, 40px)`;
  for (let index = 0; index < boardSize; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('box', 'pixel');
    pixel.addEventListener('click', handleFillPixel);
    board.appendChild(pixel);
  }
}

function handleGenerateBoard() {
  const oldPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < oldPixels.length; index += 1) {
    oldPixels[index].parentNode.removeChild(oldPixels[index]);
  }
  const input = document.querySelector('#board-size');
  const inputValue = input.value;
  createPixelBoard(inputValue);
}

function createInputSizeButton() {
  const createButton = document.createElement('button');
  const inputContainer = document.getElementById('input-container');
  createButton.id = 'generate-board';
  createButton.className = 'btn';
  createButton.innerText = 'VQV';
  createButton.addEventListener('click', handleGenerateBoard);
  inputContainer.appendChild(createButton);
}

function createClearButton() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.className = 'btn';
  button.innerText = 'Limpar';
  button.addEventListener('click', handleButton);
  const pixelBoard = document.getElementById('pixel-board');
  const container = pixelBoard.parentNode;
  container.insertBefore(button, pixelBoard);
}

window.onload = function () {
  generateColors();
  createPaletteColor();
  createPixelBoard(5);
  createClearButton();
  createInputContainer();
  createInput();
  createInputSizeButton();
};
