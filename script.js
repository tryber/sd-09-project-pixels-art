function makePixelDiv() {
  const div = document.createElement('div');
  div.className = 'pixel';
  return div;
}

function makePixelRow(numOfDivs) {
  const row = document.createElement('div');
  row.className = 'pixel-row';
  for (let i = 0; i < numOfDivs; i += 1) {
    div = makePixelDiv();
    row.appendChild(div);
  }
  return row;
}

function makePixelBoard(numOfRows, numOfColumns) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < numOfRows; i += 1) {
    row = makePixelRow(numOfColumns);
    board.appendChild(row);
  }
}

makePixelBoard(5,5);

function setColorPaletteEvents() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', pickColor)
}

function pickColor() {
  const newSelection = event.target;
  if (newSelection.className === 'color') {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    newSelection.classList.add('selected');
    console.log(event.target.style.backgroundColor)
  }
}

setColorPaletteEvents();

function setPixelBoardEvents() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel)
}

function paintPixel() {
  if (event.target.className === 'pixel') {
    const selected = document.querySelector('.selected');
    // Reference: https://stackoverflow.com/a/25991851/14759260
    const selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedColor;
  }
}

setPixelBoardEvents();

function makeClearButton() {
  const row = document.createElement('div');
  const button = document.createElement('button');
  const pixelBoard = document.querySelector('#pixel-board');
  const main = document.querySelector('main');
  row.id = 'button-container';
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  row.appendChild(button);
  main.insertBefore(row, pixelBoard);
}

makeClearButton();

function setClearBoardEvents() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoard)
}

setClearBoardEvents();

function clearBoard() {
  const pixelRows = document.querySelectorAll('.pixel-row');
  for (let rowIndex = 0; rowIndex < pixelRows.length; rowIndex += 1) {
    let pixels = pixelRows[rowIndex].children;
    for (let pixelIndex = 0; pixelIndex < pixels.length; pixelIndex += 1) {
      pixels[pixelIndex].style.backgroundColor = 'white';
    }
  }
}
