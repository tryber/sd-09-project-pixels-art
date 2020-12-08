let pixelBoard = document.querySelector('#pixel-board');

function createPixelBoard() {
  for (let index = 0; index < 5; index += 5) {
    createLinePixel(5, 5);
  }
}

function createLinePixel(repeatLine, repeatColumn) {
  for (let index = 0; index < repeatLine; index += 1) {
    let linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    pixelBoard.appendChild(linePixel);
    createColumnPixel(repeatColumn, linePixel);
  }
}

function createColumnPixel(repeatColumn, insertPixel) {
  for (let index = 0; index < repeatColumn; index += 1) {
    let columnPixel = document.createElement('div');
    columnPixel.className = 'pixel block';
    insertPixel.appendChild(columnPixel);
  }
}

createPixelBoard();
