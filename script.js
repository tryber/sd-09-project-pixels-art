const pixelBoard = document.querySelector('#pixel-board');

function createColumnPixel(repeatColumn, insertPixel) {
  for (let index = 0; index < repeatColumn; index += 1) {
    const columnPixel = document.createElement('div');
    columnPixel.className = 'pixel block';
    insertPixel.appendChild(columnPixel);
  }
}

function createLinePixel(repeatLine, repeatColumn) {
  for (let index = 0; index < repeatLine; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    pixelBoard.appendChild(linePixel);
    createColumnPixel(repeatColumn, linePixel);
  }
}

function createPixelBoard() {
  for (let index = 0; index < 5; index += 5) {
    createLinePixel(5, 5);
  }
}

createPixelBoard();

window.onload = function () {
  let colorSelected = document.querySelector('#color-palette .selected').classList[2];
  console.log(colorSelected);
}
