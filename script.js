// https://gist.github.com/girol/4a606d5cc6286ce1e9755faa3b7746df
function generateColor() {
  const hexadecimais = '0123456789ABCDEF';
  let color = '#';

  // Pega um número aleatório no array acima
  for (let i = 0; i < 6; i += 1) {
    // E concatena à variável cor
    color += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return color;
}
generateColor();

function createDivColors(color) {
  if (color !== 'white') {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = color;

    const palette = document.querySelector('.palette');
    palette.appendChild(divColor);
  }
}
createDivColors('black');
createDivColors(generateColor());
createDivColors(generateColor());
createDivColors(generateColor());

function createMatrixPixels(size) {
  // https://stackoverflow.com/questions/57836901/creating-chessboard-with-javascript
  const boardElement = document.querySelector('.board');
  for (let y = 1; y <= size; y += 1) {
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

    if (e.target.className === 'color') {
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
  const divBtnClear = document.querySelector('#forms');
  divBtnClear.appendChild(btnClear);
  const button = document.querySelector('#clear-board');

  button.addEventListener('click', function () {
    const board = document.querySelector('#pixel-board');
    board.style.backgroundColor = 'white';
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
createBtnClear();

function definingPixelsBoard() {
  const btnVQV = document.querySelector('#generate-board');

  btnVQV.addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.querySelector('#board-size');
    let numberInput = Number(input.value);
    const boardPixel = document.querySelectorAll('.pixel');
    const divBoard = document.querySelector('#pixel-board');

    if (!input) return alert('Board inválido!');

    if (numberInput > 5 && numberInput <= 50) {
      // deletando os pixels do tabuleiro
      boardPixel.forEach((e) => e.parentNode.removeChild(e));
    }
    if (boardPixel.length === 0) {
      // criando um novo tabuleiro
      divBoard.style.width = '100%';
      createMatrixPixels(numberInput);
      numberInput = '';
    }
  });
}
definingPixelsBoard();
