window.onload = function () {
  const colorSelected = document.querySelector('.black');
  colorSelected.classList.add('selected');
};

const getColorPalette = document.getElementById('color-palette');
const colors = ['black', 'color1', 'color2', 'color3'];
for (let index = 0; index < colors.length; index += 1) {
  const colorsPalette = document.createElement('div');
  colorsPalette.className = 'color ' + colors[index];
  getColorPalette.appendChild(colorsPalette);
}
const getBlackSlotOnPalette = document.querySelector('.black');
const getRedSlotOnPalette = document.querySelector('.color1');
const getGreenSlotOnPalette = document.querySelector('.color2');
const getBlueSlotOnPalette = document.querySelector('.color3');
getBlackSlotOnPalette.style.backgroundColor = 'black';
getRedSlotOnPalette.style.backgroundColor = 'red';
getGreenSlotOnPalette.style.backgroundColor = 'green';
getBlueSlotOnPalette.style.backgroundColor = 'blue';

const getPixelBoardContainer = document.querySelector('.pixel-board-container');
const createPixelBoard = document.createElement('div')
createPixelBoard.id = 'pixel-board';
getPixelBoardContainer.appendChild(createPixelBoard);

const getDivButton = document.querySelector('.buttons-container');
const createInput = document.createElement('input');
createInput.setAttribute('type', 'number');
createInput.id = 'board-size';
getDivButton.appendChild(createInput);
document.getElementById('board-size').min = '5';
document.getElementById('board-size').max = '50';

const createInputButton = document.createElement('button');
createInputButton.id = 'generate-board';
createInputButton.innerText = 'VQV';
getDivButton.appendChild(createInputButton);

function printPixelsFrame(n) {
  const getPixelBoard = document.getElementById('pixel-board');
  getPixelBoard.innerHTML = '';
  for (let line = 0; line < n; line += 1) {
    const createDivLine = document.createElement('div');
    createDivLine.className = 'fix-pixel';
    for (let column = 0; column < n; column += 1) {
      const createDivColumns = document.createElement('div');
      createDivColumns.className = 'pixel';
      createDivLine.appendChild(createDivColumns);
    }
    getPixelBoard.appendChild(createDivLine);
  }
  changePixelColor();
}
printPixelsFrame(5);

function changeColorSelected() {
  const getColors = document.querySelector('#color-palette');
  getColors.addEventListener('click', function (event) {
    const getSelectedColor = document.querySelector('.selected');
    getSelectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
changeColorSelected();

function changePixelColor() {
  const getPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', function () {
      const selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
      getPixels[index].style.backgroundColor = selectedColor;
    });
  }
}
changePixelColor();

function clearPixelsBoard() {
  const getClearButton = document.querySelector('#clear-board');
  getClearButton.addEventListener('click', function () {
    const getPixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < getPixelBoard.length; index += 1) {
      getPixelBoard[index].style.backgroundColor = 'white';
    }
  });
}
clearPixelsBoard();

function changeBoardSize() {
  const getInputField = document.querySelector('#board-size');
  const getVqvButton = document.querySelector('#generate-board');

  getVqvButton.addEventListener('click', function () {
    let boardSize = 0;
    if (getInputField.value === '') {
      alert('Board inválido!');
    } else if (getInputField.value < 5 || getInputField.value > 50) {
      limitBoardSize(getInputField.value);
    } else {
      boardSize = getInputField.value;
      getInputField.value = '';
      printPixelsFrame(boardSize);
    }
  });
}
changeBoardSize();

function limitBoardSize(boardSize) {
  if (boardSize < 5) {
    boardSize = 5;
    printPixelsFrame(boardSize);
  } else {
    boardSize = 50;
    printPixelsFrame(boardSize);
  }
}
