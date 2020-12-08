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

function setColorPalette() {
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

setColorPalette();

function setPixelBoard() {
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

setPixelBoard();
