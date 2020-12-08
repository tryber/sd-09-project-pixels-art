function makePixelDiv() {
  let div = document.createElement('div');
  div.className = 'pixel';
  return div;
}

function makePixelRow(numOfDivs) {
  let row = document.createElement('div');
  row.className = 'pixel-row';
  for (let i = 0; i < numOfDivs; i += 1) {
    div = makePixelDiv();
    row.appendChild(div);
  }
  return row;
}

function makePixelBoard(numOfRows, numOfColumns) {
  let board = document.querySelector('#pixel-board');
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
  let newSelection = event.target;
  if (newSelection.className === 'color') {
    let selected = document.querySelector('.selected');
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
  let clickedPixel = event.target;
  if (clickedPixel.className === 'pixel') {
    let selected = document.querySelector('.selected');
    // Reference: https://stackoverflow.com/a/25991851/14759260
    let selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedColor;
  }
}

setPixelBoard();