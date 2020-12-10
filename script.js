window.onload = function () {
  let pixelsMatrix = 5;
  let boardLines;
  const colorPalette = document.getElementById('color-palette');
  const buttonClear = document.getElementById('clear-board');
  let pixelBoard = document.getElementById('pixel-board');
  const boardSizeInput = document.getElementById('board-size');
  const buttonGenerateBoard = document.getElementById('generate-board');
  let selectedColor = 'black';

  // Checa o tamanho do board
  function checkSizeBoard(pixelsComparation) {
    if (pixelsComparation > 50) return 50;
    if (pixelsComparation < 5) return 5;
    return pixelsComparation;
  }

  // Cria linhas para preencher com pixels
  function createLines(linesQuantity) {
    for (let index = 0; index < linesQuantity; index += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'board-line';
      pixelBoard.appendChild(newLine);
    }
  }

  // Preenche o quadro
  function fillPixelBoard(boardColumns) {
    for (let index = 0; index < boardColumns.length; index += 1) {
      fillPixelBoardLine(boardColumns[index]);
    }
  }

  // Cria o quadro
  function createBoard(linesQuantity) {
    createLines(linesQuantity);
    boardLines = document.querySelectorAll('.board-line');
    fillPixelBoard(boardLines);
  }

  // Cria  pixel
  function createPixel() {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    return pixel;
  }

  // Preenche a linha do quadro
  function fillPixelBoardLine(lineToFill) {
    for (let index = 0; index < pixelsMatrix; index += 1) {
      const pixel = createPixel('pixel');
      lineToFill.appendChild(pixel);
    }
  }

  // Seleciona a cor dentro da paleta de cores
  function selectColor() {
    colorPalette.addEventListener('click', function (event) {
      const lastSelected = document.querySelector('.selected');
      const newSelection = event.target;
      lastSelected.classList.remove('selected');
      newSelection.classList.add('selected');
      selectedColor = newSelection.style.backgroundColor;
    });
  }

  // Pinta o pixel com a cor selecionada
  function paintPixelWithColorSelected() {
    pixelBoard.addEventListener('click', function (event) {
      if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = selectedColor;
      }
    });
  }

  // Limpa o quadro
  function clearBoard() {
    buttonClear.addEventListener('click', function () {
      const allPixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < allPixels.length; index += 1) {
        allPixels[index].style.backgroundColor = 'white';
      }
    });
  }

  // Destroi o quadro para criar outro
  function destructBoard() {
    pixelBoard = document.getElementById('pixel-board');
    boardLines = document.querySelectorAll('.board-line');
    for (let index = 0; index < boardLines.length; index += 1) {
      pixelBoard.removeChild(boardLines[index]);
    }
  }

  // Alerta de valor invalido no input
  function alertEmptyInput() {
    alert('Board inválido!');
  }

  // Gera o board
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

  // Gera com randomica
  // Fonte externa para a função https://css-tricks.com/snippets/javascript/random-hex-color/
  function generateRandonColor() {
    let randonColor = Math.floor(Math.random()*16777215).toString(16);
    randonColor = '#' + randonColor;
    return randonColor;
  }

  // Cria paleta de cores
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

  checkSizeBoard();
  createBoard(pixelsMatrix);
  selectColor();
  paintPixelWithColorSelected();
  clearBoard();
  gererateBoardNxN();
  createColorsPalette();
};
