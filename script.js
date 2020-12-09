window.onload = function () {
  const paletteColor = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  const colorsArray = ['black', 'blue', 'green', 'red'];
  const amountColors = 4;
  const amountSquares = 25;

  function createDivs() {
    const div = document.createElement('div');
    return div;
  }

  function addColorSquare(palette, colors) {
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].style.backgroundColor = colors[index];
      if (colors[index] === 'black') {
        palette[index].className += ' selected';
      }
    }
  }

  function createColorsPalette(palette, amount) {
    const palleteArray = [];
    for (let index = 0; index < amount; index += 1) {
      const paletteSquare = palette.appendChild(createDivs());
      paletteSquare.className = 'color';
      palleteArray.push(paletteSquare);
    }
    addColorSquare(palleteArray, colorsArray);
  }

  function createSquares(board, amount) {
    const squaresArray = [];
    for (let index = 0; index < amount; index += 1) {
      const square = board.appendChild(createDivs());
      square.className = 'pixel';
      squaresArray.push(square);
    }
  }

  function selectColor(event) {
    const selectedColor = event.target;
    deselectColor();
    selectedColor.className += ' selected';
  }

  function deselectColor() {
    const currentColor = document.querySelector('.selected');
    currentColor.className = 'color';
  }

  function fillSquare(event) {
    const selectedSquare = event.target;
    if (selectedSquare !== document.querySelector('#pixel-board')){
      const currentColor = document.querySelector('.selected');
      selectedSquare.style.backgroundColor = currentColor.style.backgroundColor; 
    }
  }

  createColorsPalette(paletteColor, amountColors);

  createSquares(pixelBoard, amountSquares);

  paletteColor.addEventListener('click', selectColor);

  pixelBoard.addEventListener('click', fillSquare);
};