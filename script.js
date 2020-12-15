const colorsId = ['black', 'red', 'yellow', 'green'];
let currentColorId;

function handleSelectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  const currentColor = event.target;
  currentColorId = event.target.id;
  currentColor.classList.add('selected');
}

function handleFillPixel(event) {
  const currentPixel = event.target;
  currentPixel.id = currentColorId;
}

function handleButton() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].removeAttribute('id');
  }
}

function createPaletteColor() {
  const colorPalette = document.getElementById('color-palette');
  
  for (let index = 0; index < colorsId.length; index += 1) {
    const colorBox = document.createElement('div');
    if (index === 0) {
      colorBox.classList.add('box', 'color', 'circle', 'selected');
      currentColorId = colorsId[index];
    } else {
      colorBox.classList.add('box', 'color', 'circle');
    }
    colorBox.id = colorsId[index];
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
  const createInput = document.createElement('input');
  const inputContainer = document.getElementById('input-container');
  createInput.id = 'board-size';
  createInput.setAttribute('placeholder', 'Board size');
  inputContainer.appendChild(createInput);
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
  button.innerText = 'LIMPAR';
  button.addEventListener('click', handleButton);
  const pixelBoard = document.getElementById('pixel-board');
  const container = pixelBoard.parentNode;
  container.insertBefore(button, pixelBoard);
}

function createPixelBoard(inputValue) {
  const board = document.getElementById('pixel-board');
  let boardSize;
  
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
  boardSize = inputValue * inputValue;
  
  board.style.gridTemplateColumns = `repeat(${inputValue}, 40px)`;
  
  for (let index = 0; index < boardSize; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('box', 'pixel');
    pixel.addEventListener('click', handleFillPixel);
    board.appendChild(pixel);
  }
}

window.onload = function() {
  createPaletteColor();
  createPixelBoard(5);
  createClearButton();
  createInputContainer();
  createInput();
  createInputSizeButton();
};
