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

function randomRGB() {
  const Red = Math.floor(Math.random() * 255);
  const Green = Math.floor(Math.random() * 255);
  const Blue = Math.floor(Math.random() * 255);
  return (`rgb(${Red}, ${Green}, ${Blue})`);
}

function drawColorPallets() {
  const colorPalette = document.querySelector('#color-palette');
  const stdColors = ['black'];
  stdColors.push(randomRGB());
  stdColors.push(randomRGB());
  stdColors.push(randomRGB());
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

function deleteBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  while (pixelBoard.firstElementChild) {
    const child = pixelBoard.firstElementChild;
    pixelBoard.removeChild(child);
  }
}

function generatePixelBoard() {
  let inputValue = document.querySelector('#board-size').value;
  if (!inputValue) {
    alert('Board inválido!');
  }
  if (inputValue < 5) {
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }
  if (inputValue) {
    deleteBoard();
    drawPixelBoard(inputValue);
  }
}

function drawMenu() {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.addEventListener('click', clearPixelBoard);
  document.querySelector('.button-list').appendChild(clearBtn);

  const boardSizeInput = document.createElement('input');
  boardSizeInput.id = 'board-size';
  boardSizeInput.type = 'number';
  boardSizeInput.min = '1';
  boardSizeInput.max = '50';
  document.querySelector('.button-list').appendChild(boardSizeInput);

  const boardSizeBtn = document.createElement('button');
  boardSizeBtn.id = 'generate-board';
  boardSizeBtn.innerText = 'VQV';
  boardSizeBtn.addEventListener('click', generatePixelBoard);
  document.querySelector('.button-list').appendChild(boardSizeBtn);
}

window.onload = function () {
  drawColorPallets();
  drawPixelBoard(5);
  drawMenu();
};
