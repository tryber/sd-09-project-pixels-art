function propObjectToArray(propObject) {
  const outputArray = [];
  const objectKeys = Object.keys(propObject);
  for (let index = 0; index < objectKeys.length; index += 1) {
    const key = objectKeys[index];
    const value = propObject[key];
    outputArray.push({ key, value });
  }
  return outputArray;
}

function handleProperties(element, propObject) {
  const properties = propObjectToArray(propObject);
  for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex += 1) {
    const property = properties[propertyIndex];
    if (property.key === 'style') {
      handleProperties(element.style, property.value);
    } else {
      element[property.key] = property.value;
    }
  }
}

function createNewElement(tag, propObject) {
  const element = document.createElement(tag);
  handleProperties(element, propObject);
  // This is returning that odd Code Climate issue
  // for (const key in optionsObject) {
  //   if (Object.prototype.hasOwnProperty.call(optionsObject, key)) {
  //     element[key] = optionsObject[key];
  //   }
  // }
  return element;
}

function createPixelRow(numOfDivs) {
  const row = createNewElement('div', { className: 'pixel-row' });
  for (let i = 0; i < numOfDivs; i += 1) {
    const div = createNewElement('div', { className: 'pixel' });
    row.appendChild(div);
  }
  return row;
}

function createPixelBoard(numOfRows, numOfColumns) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < numOfRows; i += 1) {
    const row = createPixelRow(numOfColumns);
    board.appendChild(row);
  }
}

function pickColor() {
  const newSelection = event.target;
  if (newSelection.className === 'color') {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    newSelection.classList.add('selected');
  }
}

function setColorPaletteEvents() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', pickColor);
}

function paintPixel() {
  if (event.target.className === 'pixel') {
    const selected = document.querySelector('.selected');
    // Reference: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    const selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedColor;
  }
}

function setPixelBoardEvents() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
}

function createClearButton() {
  const settingsDivProperties = { id: 'settings', style: { padding: '10px 5px' } };
  const settingsDiv = createNewElement('div', settingsDivProperties);
  const buttonDivProperties = { style: { display: 'inline-block' } };
  const buttonDiv = createNewElement('div', buttonDivProperties);
  const button = createNewElement('button', { id: 'clear-board', innerText: 'Limpar' });
  const pixelBoard = document.querySelector('#pixel-board');
  const main = document.querySelector('main');
  buttonDiv.appendChild(button);
  settingsDiv.appendChild(buttonDiv);
  // Reference: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
  main.insertBefore(settingsDiv, pixelBoard);
}

function clearBoard() {
  const pixelRows = document.querySelectorAll('.pixel-row');
  for (let rowIndex = 0; rowIndex < pixelRows.length; rowIndex += 1) {
    const pixels = pixelRows[rowIndex].children;
    for (let pixelIndex = 0; pixelIndex < pixels.length; pixelIndex += 1) {
      pixels[pixelIndex].style.backgroundColor = 'white';
    }
  }
}

function setClearBoardEvents() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoard);
}

function createGenerateBoardElements() {
  const sizeInputProperties = {
    // Reference: https://www.w3schools.com/tags/att_input_min.asp
    type: 'number',
    min: '1',
    id: 'board-size',
    size: '2',
  };
  const sizeInput = createNewElement('input', sizeInputProperties);
  const buttonProperties = { id: 'generate-board', innerText: 'VQV' };
  const button = createNewElement('button', buttonProperties);
  const containerDivProperties = { style: {
    display: 'inline-block',
    marginRight: '5px',
  } };
  const containerDiv = createNewElement('div', containerDivProperties);
  const settingsDiv = document.querySelector('#settings');
  containerDiv.appendChild(sizeInput);
  containerDiv.appendChild(button);
  settingsDiv.insertBefore(containerDiv, settingsDiv.firstElementChild);
}

function removeExistingBoard() {
  const pixelRows = document.querySelectorAll('.pixel-row');
  for (let index = 0; index < pixelRows.length; index += 1) {
    pixelRows[index].remove();
  }
}

function generateNewBoard(boardSize) {
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
    removeExistingBoard();
    createPixelBoard(boardSize, boardSize);
  }
}

function validateBoardSize(boardSizeInput) {
  let boardSize = boardSizeInput.value;
  const minValue = 5;
  const maxValue = 50;
  if (boardSize < minValue) {
    boardSize = minValue;
  }
  if (boardSize > maxValue) {
    boardSize = maxValue;
  }
  boardSizeInput.value = boardSize;
}

function setGenerateBoardEvents() {
  const boardSizeInput = document.querySelector('#board-size');
  const generateBoardButton = document.querySelector('#generate-board');
  boardSizeInput.addEventListener('change', function () {
    validateBoardSize(boardSizeInput);
  });
  generateBoardButton.addEventListener('click', function () {
    generateNewBoard(boardSizeInput.value);
  });
}

function getRandomValue() {
  return Math.round(Math.random() * 255);
}

function getRandomColor() {
  const red = getRandomValue();
  const green = getRandomValue();
  const blue = getRandomValue();
  return `rgb( ${red} , ${green} , ${blue} )`;
}

function generateRandomColors() {
  const colorDivs = document.querySelectorAll('.color');
  for (let index = 1; index < colorDivs.length; index += 1) {
    colorDivs[index].style.backgroundColor = getRandomColor();
  }
}

window.onload = generateRandomColors;

createPixelBoard(5, 5);
createClearButton();
createGenerateBoardElements();
setPixelBoardEvents();
setColorPaletteEvents();
setClearBoardEvents();
setGenerateBoardEvents();
