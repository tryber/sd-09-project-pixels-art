window.onload = function () {
  let pixelsMatrix = 5;
  let boardLines;
  const colorPalette = document.getElementById('color-palette');
  const buttonClear = document.getElementById('clear-board');
  let pixelBoard = document.getElementById('pixel-board');
  const boardSizeInput = document.getElementById('board-size');
  const buttonGenerateBoard = document.getElementById('generate-board');
  let selectedColor = 'black';

  function checkSizeBoard(pixelsComparation) {
    if (pixelsComparation > 50) return 50;
    if (pixelsComparation < 5) return 5;
    return pixelsComparation;
  }

  function createBoard(linesQuantity) {
    createLines(linesQuantity);
    boardLines = document.querySelectorAll('.board-line');
    fillPixelBoard(boardLines);
  }

  function createLines(linesQuantity) {
    for (let index = 0; index < linesQuantity; index += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'board-line';
      pixelBoard.appendChild(newLine);
    }
  }

  function fillPixelBoard(boardComuns) {
    for (let index = 0; index < boardComuns.length; index += 1) {
      fillPixelBoardLine(boardComuns[index]);
    }
  }

  function fillPixelBoardLine(lineToFill) {
    for (let index = 0; index < pixelsMatrix; index += 1) {
      const pixel = createPixel('pixel');
      lineToFill.appendChild(pixel);
    }
  }

  function createPixel() {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    return pixel;
  }

  function selectColor() {
    colorPalette.addEventListener('click', function (event) {
      const lastSelected = document.querySelector('.selected');
      const newSelection = event.target;
      lastSelected.classList.remove('selected');
      newSelection.classList.add('selected');
      selectedColor = newSelection.style.backgroundColor;
    });
  }

  function paintPixelWithColorSelected() {
    pixelBoard.addEventListener('click', function(event) {
      if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = selectedColor;
      }
    });
  }

  function clearBoard() {
    buttonClear.addEventListener('click', function() {
      const allPixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < allPixels.length; index += 1) {
        allPixels[index].style.backgroundColor = 'white';
      }
    });
  }

  function destructBoard() {
    pixelBoard = document.getElementById('pixel-board');
    boardLines = document.querySelectorAll('.board-line');
    for (let index = 0; index < boardLines.length; index += 1) {
      pixelBoard.removeChild(boardLines[index]);
    }
  }

  function gererateBoardNxN() {
    buttonGenerateBoard.addEventListener('click', function () {
      if (!boardSizeInput.value) alertEmptyInput();
      else {
        destructBoard();
        pixelsMatrix = checkSizeBoard(boardSizeInput.value);
        createBoard(pixelsMatrix);
      }
    });
  }

  function alertEmptyInput() {
    alert('Board inválido!');
  }

  function createColorsPalette() {
    for (let index = 0; index < 4; index += 1) {
      const color = document.createElement('div');
      color.classList.add('color');
      if (index === 0) {
        color.style.backgroundColor = 'rgb(0,0,0)';
        color.classList.add('selected');
      }
      else color.style.backgroundColor = generateRandonColor();
      colorPalette.appendChild(color);
    }
  }

  // Fonte externa para a função https://css-tricks.com/snippets/javascript/random-hex-color/
  function generateRandonColor() {
    let randonColor = Math.floor(Math.random()*16777215).toString(16);
    randonColor = '#' + randonColor;
    return randonColor;
  }

  checkSizeBoard();
  createBoard(pixelsMatrix);
  selectColor();
  paintPixelWithColorSelected();
  clearBoard();
  gererateBoardNxN();
  createColorsPalette();
};
