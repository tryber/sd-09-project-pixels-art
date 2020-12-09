function createDivColors(color) {
  if (color !== 'white') {
    let divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = color;

    let palette = document.querySelector('#color-palette');
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
    let row = [];
    for (let x = 1; x <= size; x += 1) {
      let cell = {};
      cell.element = document.createElement("div");
      cell.element.className = 'pixel';
      boardElement.appendChild(cell.element);
      row.push(cell);
    }
  }
}
createMatrixPixels(10);

function selectingColorBlack() {
  document.querySelectorAll('.color')[0].className = 'color selected';
}
selectingColorBlack();

function selectingAllColors() {
  let palette = document.querySelector('#color-palette');

  palette.addEventListener('click', function (e) {
    let selected = document.querySelector('.selected');
    selected.className = 'color';

    if (e.target.className == 'color') {
      e.target.className = 'color selected';
    }
  });
}
selectingAllColors();

function fillsSquarePixel() {
  let board = document.querySelector('#pixel-board');

  board.addEventListener('click', function (e) {
    let colorSelected = document.querySelector('.selected');
    e.target.style.backgroundColor = colorSelected.style.backgroundColor
  });
}
fillsSquarePixel();

function createBtnClear() {
  btnClear = document.createElement('button');
  btnClear.id = 'clear-board';
  btnClear.innerText = 'Limpar';
  btnClear.style.padding = '5px';
  let divBtnClear = document.querySelector('#button-clear');
  divBtnClear.appendChild(btnClear);
  let button = document.querySelector('#clear-board');

  button.addEventListener('click', function (e) {
    let board = document.querySelector('#pixel-board');
    board.style.backgroundColor = 'white';
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
createBtnClear();

function createInputSize() {
  let input = document.createElement('input');
  input.id = 'board-size';
  input.placeholder = 'enter size';
  input.type = 'number';
  input.focus();
  let divSize = document.querySelector('#matrix-size');
  divSize.appendChild(input);
}
createInputSize();

function createBtnSize() {
  btnSize = document.createElement('button');
  btnSize.type = 'submit';
  btnSize.id = 'generate-board';
  btnSize.innerText = 'VQV';
  btnSize.style.margin = '7px';
  btnSize.style.padding = '5px';
  let divBtnSize = document.querySelector('#matrix-size');
  divBtnSize.appendChild(btnSize);
}
createBtnSize();

function definingMatrixSize() {
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputSize = e.target.querySelector('#board-size');
    let size = Number(inputSize.value);
    if (size <= 0 || !inputSize) return alert('Board inválido!');
    else {
      createMatrixPixels(size);
    }
  })
}
definingMatrixSize();
