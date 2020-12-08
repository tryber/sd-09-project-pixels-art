function drawColorPallets() {
  const pallets = document.querySelectorAll('#color-palette .color');
  const colors = ['black', 'red', 'green', 'blue'];
  for (let index = 0; index < pallets.length; index += 1) {
    pallets[index].style.backgroundColor = colors[index];
    pallets[index].style.border = '1px black solid';
    pallets[index].style.display = 'inline-block';
    pallets[index].style.width = '40px';
    pallets[index].style.height = '40px';
  }
}

function drawPixelBoard(boardSize) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    let pixelLine = document.createElement('div');
    for (let indexSquares = 0; indexSquares < boardSize; indexSquares += 1) {
    let pixelSquare = document.createElement('div');
    pixelSquare.className = 'pixel';
    pixelSquare.backgroundColor = 'white';
    pixelLine.appendChild(pixelSquare);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

function randomRGB() {
  Math.random;
}

window.onload = function () {
  drawColorPallets();
  drawPixelBoard(5);
}
