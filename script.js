function createNewElement(tag, optionsObject) {
  const element = document.createElement(tag);
  for (let key in optionsObject) {
    if (Object.prototype.hasOwnProperty.call(optionsObject, key)) {
      element[key] = optionsObject[key];
    }
  }
  return element;
}

function createPixelRow(numOfDivs) {
  const row = createNewElement('div', { className: 'pixel-row', });
  for (let i = 0; i < numOfDivs; i += 1) {
    const div = createNewElement('div', { className: 'pixel', });
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
    // Reference: https://stackoverflow.com/a/25991851/14759260
    const selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedColor;
  }
}

function setPixelBoardEvents() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
}

function createClearButton() {
  const settingsDiv = createNewElement('div', { id: 'settings' });
  const buttonDiv = createNewElement('div', { display: 'inline-block' });
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


function createGeneratorElements() {
  const input = createNewElement('input', {
    type: 'text',
    id: 'board-size',
    // Reference: https://www.w3schools.com/tags/att_input_min.asp
    min: '0',
    size: '2',
  });
  const button = createNewElement('button', { id: 'generate-board', innerText: 'VQV' });
  // row.appendChild(button);
  // main.insertBefore(row, pixelBoard);
}


createPixelBoard(5, 5);
createClearButton();
setPixelBoardEvents();
setColorPaletteEvents();
setClearBoardEvents();
