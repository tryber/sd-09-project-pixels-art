function createColorPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const backgroundColors = ['black', 'red', 'green', 'blue'];
  const totalNumberOfColors = 4;
  for (let index = 0; index < totalNumberOfColors; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    if (index === 0) {
      color.classList.add('selected');
    }
    color.style.backgroundColor = backgroundColors[index];
    colorPalette.appendChild(color);
  }
}

createColorPalette();

function clearBoardLines(pixelBoard) {
  const pixelBoardLines = document.querySelectorAll('.pixel-board-line');

  for (let index = 0; index < pixelBoardLines.length; index += 1) {
    pixelBoard.removeChild(pixelBoardLines[index]);
  }
}

function generatePixelBoardLines(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  number = number || 5;

  clearBoardLines(pixelBoard);

  for (let index = 0; index < number; index += 1) {
    const pixelBoardLines = document.createElement('div');
    pixelBoardLines.className = 'pixel-board-line';
    pixelBoard.appendChild(pixelBoardLines);
  }
}

generatePixelBoardLines();

function createPixelBoard() {
  const pixelBoardLines = document.querySelectorAll('.pixel-board-line');

  for (let line = 0; line < pixelBoardLines.length; line += 1) {
    for (let column = 0; column < pixelBoardLines.length; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoardLines[line].appendChild(pixel);
    }
  }
}

createPixelBoard();

function selectColor() {
  const colorsPalette = document.querySelector('#color-palette');
  const colors = document.querySelectorAll('.color');

  colorsPalette.addEventListener('click', function (event) {
    const selectedClass = 'selected';
    colors.forEach(function (color) {
      if (event.target.className !== 'color-palette') {
        color.classList.remove(selectedClass);
        event.target.classList.add(selectedClass);
      }
    });
  });
}

selectColor();

function paintSelectedPixel() {
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected');
    const color = selectedColor.style.backgroundColor;
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = color;
    }
  });
}

paintSelectedPixel();

function clearBoard() {
  const clearButtom = document.querySelector('#clear-board');

  clearButtom.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(function (pixel) {
      pixel.style.backgroundColor = 'white';
    });
  });
}

clearBoard();

function controlBoardSize() {
  const boardSizeInput = document.querySelector('#board-size');
  const generateBoardButton = document.querySelector('#generate-board');

  generateBoardButton.addEventListener('click', function () {
    if (boardSizeInput.value === '') {
      alert('Board inválido!');
    } else {
      const sizeValue = boardSizeInput.value;
      generatePixelBoardLines(sizeValue);
      createPixelBoard();
    }
  });
}

controlBoardSize();
