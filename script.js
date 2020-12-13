let currentColorSelected = 'black';
function colorGenerator() {
  const colorBlock = document.getElementsByClassName('color');
  for (let index = 0; index < colorBlock.length; index += 1) {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    // Solution by CSS Tricks on https://css-tricks.com/snippets/javascript/random-hex-color/
    let colorString = '#';
    colorString += newColor;
    if (colorBlock[index].id !== 'black') {
      colorBlock[index].style.backgroundColor = colorString;
      colorBlock[index].id = colorString;
    } else {
      colorBlock[index].style.backgroundColor = currentColorSelected;
    }
  }
}

function numbersInputValidator() {
  const boardSizeInputText = document.getElementById('board-size');
  let typedNumber = boardSizeInputText.value;
  if (typedNumber === '') {
    alert('Board inválido!');
  }
  typedNumber = parseInt(typedNumber, 10);
  if (typedNumber < 5) {
    boardSizeInputText.value = 5;
  }
  if (typedNumber > 50) {
    boardSizeInputText.value = 50;
  }
}

function changeClassSelectedElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('selected');
}

function removePreviousSelectedElementClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.toggle('selected');
}

function setColorToPaint(evt) {
  if (evt.target.className) {
    const colorSelectedElementId = evt.target.id;
    if (colorSelectedElementId !== currentColorSelected) {
      changeClassSelectedElement(colorSelectedElementId);
      removePreviousSelectedElementClass(currentColorSelected);
      currentColorSelected = colorSelectedElementId;
    }
  }
}

function changePixelColor(evt) {
  if (evt.target.className === 'pixel') {
    const clickedElement = evt.target;
    clickedElement.style.backgroundColor = currentColorSelected;
  }
}

function clearPixelBoard() {
  const pixelBoardSelected = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoardSelected.length; index += 1) {
    pixelBoardSelected[index].style.backgroundColor = 'white';
  }
}

function addPixelsToLinesOfTheBoard(pixelsToAdd, row) {
  for (let index = 0; index < pixelsToAdd; index += 1) {
    const newPixel = row.insertCell(index);
    newPixel.className = 'pixel';
    newPixel.style.backgroundColor = 'white';
  }
}

function addLinesToPixelBoard(boardSize) {
  const pixelBoardSelected = document.getElementById('pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    const newRow = pixelBoardSelected.insertRow(index);
    addPixelsToLinesOfTheBoard(boardSize, newRow);
  }
}

function removeLinesFromPixelBoard(linesToRemove) {
  const pixelBoardSelected = document.getElementById('pixel-board');
  for (let index = linesToRemove - 1; index >= 0; index -= 1) {
    pixelBoardSelected.deleteRow(index);
  }
}

function changePixelBoardAlignment(currentBoardSize) {
  const pixelBoard = document.getElementById('pixel-board');
  let marginPercent = 44;
  if (currentBoardSize === 5) {
    pixelBoard.style.marginLeft = '44%';
    return null;
  }
  if (currentBoardSize === 50) {
    pixelBoard.style.marginLeft = '10%';
    return null;
  }
  for (let index = 0; index <= currentBoardSize; index += 1) {
    if (marginPercent === 1) {
      break;
    }
    marginPercent -= 1;
  }
  marginPercent += '%';
  pixelBoard.style.marginLeft = marginPercent;
  return 0;
}

function designNewBoard(boardSize, currentBoardSize) {
  if (boardSize < 5) {
    removeLinesFromPixelBoard(currentBoardSize);
    currentBoardSize = 5;
    addLinesToPixelBoard(boardSize);
    return 0;
  }
  if (boardSize > 50) {
    removeLinesFromPixelBoard(currentBoardSize);
    currentBoardSize = 50;
    addLinesToPixelBoard(boardSize);
    return 1;
  }
  removeLinesFromPixelBoard(currentBoardSize);
  addLinesToPixelBoard(boardSize);
  currentBoardSize = boardSize;
  changePixelBoardAlignment(currentBoardSize);
  return 2;
}

function createCustomPixelBoarder() {
  numbersInputValidator();
  const currentPixelBoard = document.querySelector('#pixel-board').children;
  const currentPixelBoardLength = currentPixelBoard[0].children.length;
  let boardSizeValue = document.getElementById('board-size').value;
  boardSizeValue = parseInt(boardSizeValue, 10);
  designNewBoard(boardSizeValue, currentPixelBoardLength);
}

colorGenerator();
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', setColorToPaint);
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', changePixelColor);
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixelBoard);
const boardCreatorButton = document.getElementById('generate-board');
boardCreatorButton.addEventListener('click', createCustomPixelBoarder);
const boardSizeInput = document.getElementById('board-size');
boardSizeInput.addEventListener('change', numbersInputValidator);
