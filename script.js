function createDivColors(color) {
  if (color !== 'white') {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = color;

    const palette = document.querySelector('#color-palette');
    palette.appendChild(divColor);
  }
}
createDivColors('black');
createDivColors('orange');
createDivColors('green');
createDivColors('blue');

function createMatrixPixels(size) {
  const boardElement = document.querySelector('#pixel-board');

  for (let y = 1; y <= size; y += 1) { // https://stackoverflow.com/questions/57836901/creating-chessboard-with-javascript
    const row = [];
    for (let x = 1; x <= size; x += 1) {
      const cell = {};
      cell.element = document.createElement('div');
      cell.element.className = 'pixel';
      boardElement.appendChild(cell.element);
      row.push(cell);
    }
  }
}
createMatrixPixels(5);

function selectingColorBlack() {
  document.querySelectorAll('.color')[0].className = 'color selected';
}
selectingColorBlack();

function selectingAllColors() {
  const palette = document.querySelector('#color-palette');

  palette.addEventListener('click', function (e) {
    const selected = document.querySelector('.selected');
    selected.className = 'color';

    if (e.target.className == 'color') {
      e.target.className = 'color selected';
    }
  });
}
selectingAllColors();

function fillsSquarePixel() {
  const board = document.querySelector('#pixel-board');

  board.addEventListener('click', function (e) {
    const colorSelected = document.querySelector('.selected');
    e.target.style.backgroundColor = colorSelected.style.backgroundColor;
  });
}
fillsSquarePixel();

function createBtnClear() {
  const btnClear = document.createElement('button');
  btnClear.id = 'clear-board';
  btnClear.innerText = 'Limpar';
  btnClear.style.padding = '5px';
  const divBtnClear = document.querySelector('#button-clear');
  divBtnClear.appendChild(btnClear);
  const button = document.querySelector('#clear-board');

  button.addEventListener('click', function () {
    const board = document.querySelector('#pixel-board');
    board.style.backgroundColor = 'white';
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  })
}
createBtnClear();
