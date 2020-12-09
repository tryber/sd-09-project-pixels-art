const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const inBoardSize = document.querySelector('#board-size');
const inValue = document.querySelector('#inValue');
const btnGenerateBoard = document.querySelector('#generate-board');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'blue';
colors[3].style.backgroundColor = 'green';

function rgbRandom() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

function colorizePalette() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = rgbRandom();
    colors[0].style.backgroundColor = 'black';
  }
}
colorizePalette();

function createPixel() {
  const lineOfPixels = document.createElement('div');
  lineOfPixels.className = 'pixel';
  pixelBoard.appendChild(lineOfPixels);
}

function createBoard(boardSize) {
  if (boardSize === '') {
    boardSize = 5;
  }else {
    boardSize = Number(inValue.value);
  }
  
  colors[0].className += ' selected';

  for (let pixelRow = 0; pixelRow < boardSize; pixelRow += 1) {
    for (let pixelColumn = 0; pixelColumn < boardSize; pixelColumn += 1) {
      createPixel();
    }
  }
  pixelBoard.style.width = `${boardSize * colors[0].offsetWidth}px`;
  pixelBoard.style.height = `${boardSize * colors[0].offsetWidth}px`;
  pixelBoard.style.margin = 'auto';
}
createBoard(inValue.value);

let savedColor = 'black';
colorPalette.addEventListener('click', function (event) {
  for (let color = 0; color < colors.length; color += 1) {
    if (colors[color].className === 'color selected') {
      colors[color].className = 'color';
    }
  }
  if (event.target.className === 'color') {
    event.target.className = 'color selected';
    savedColor = event.target.style.backgroundColor;
  }
});

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = savedColor;
});

btnClear.addEventListener('click', () => {
  const pixel = document.querySelectorAll('#pixel-board div');
  for (let item = 0; item < pixel.length; item += 1) {
    pixel[item].style.backgroundColor = '#fff';
  }
});

inBoardSize.addEventListener('change', () => {
  let value = inBoardSize.value;
  inValue.value = value;
})
