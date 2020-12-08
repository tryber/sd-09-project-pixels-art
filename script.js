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
  pixelBoard.style.display = 'table';
  for (let index = 0; index < boardSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.style.display = 'table-row'
    for (let indexSquares = 0; indexSquares < boardSize; indexSquares += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelSquare.style.backgroundColor = 'white';
      pixelSquare.style.display = 'table.cell'
      pixelLine.appendChild(pixelSquare);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

window.onload = function () {
  drawColorPallets();
  drawPixelBoard(5);
}
