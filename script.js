function selectColor(event) {
  const deselect = document.querySelector('.color.selected');
  deselect.className = 'color';
  event.target.className = 'color selected';
}

function paintSquare(event) {
  const paletteColor = document.querySelector('.color.selected');
  event.target.style.backgroundColor = paletteColor.style.backgroundColor;
}

function clearPixelBoard() {
  const pixelSquare = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = 'white';
  }
}

function drawColorPallets() {
  const colorPalette = document.querySelector('#color-palette');
  const stdColors = ['black', 'red', 'green', 'blue'];
  colorPalette.addEventListener('click', selectColor);
  for (let index = 0; index < stdColors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.border = '1px black solid';
    if (index === 0) {
      color.className = 'color selected';
    }
    color.style.backgroundColor = stdColors[index];
    color.style.display = 'inline-block';
    color.style.margin = '1px';
    color.style.width = '40px';
    color.style.height = '40px';
    colorPalette.appendChild(color);
  }
}

function drawPixelBoard(boardSize) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.display = 'table';
  pixelBoard.addEventListener('click', paintSquare);
  for (let index = 0; index < boardSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.style.display = 'table-row';
    for (let indexSquares = 0; indexSquares < boardSize; indexSquares += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelSquare.style.backgroundColor = 'white';
      pixelSquare.style.display = 'table-cell';
      pixelSquare.style.width = '40px';
      pixelSquare.style.height = '40px';
      pixelSquare.style.border = '1px black solid';
      pixelLine.appendChild(pixelSquare);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

function drawMenu() {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.addEventListener('click', clearPixelBoard);
  document.querySelector('.button-list').appendChild(clearBtn);
}

window.onload = function () {
  drawColorPallets();
  drawPixelBoard(5);
  drawMenu();
};
