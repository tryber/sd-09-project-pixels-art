function propObjectToArray(propObject) {
  const outputArray = [];
  for (const key in propObject) {
    if (Object.prototype.hasOwnProperty.call(propObject, key)) {
      outputArray.push({ key, value: propObject[key] })
    }
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
  const settingsDivProperties = { id: 'settings', style: { padding: '10px 5px' }};
  const settingsDiv = createNewElement('div', settingsDivProperties);
  const buttonDivProperties = { style: { display: 'inline-block' }};
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

createPixelBoard(5, 5);
createClearButton();
setPixelBoardEvents();
setColorPaletteEvents();
setClearBoardEvents();
