const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'blue';
colors[3].style.backgroundColor = 'green';

function rgbRandom() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  const rgb = `rgb(${r} , ${g} , ${b})`;

  return rgb;
}

function colorizePalette() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = rgbRandom();
    colors[0].style.backgroundColor = 'black';
  }
}
colorizePalette();

function createPixelsLine(width) {
  const pixelsRows = document.createElement('tr');
  pixelsRows.style.width = `${width * 40}px`;
  pixelBoard.appendChild(pixelsRows);
}

function createPixelsColumns(line = 0) {
  const lines = document.querySelectorAll('tr');
  const pixelsColumn = document.createElement('td');
  pixelsColumn.className = 'pixel';
  pixelsColumn.style.width = '40px';
  pixelsColumn.style.height = '40px';
  pixelsColumn.style.border = '1px solid black';
  pixelsColumn.style.backgroundColor = 'white';
  lines[line].appendChild(pixelsColumn);
}

function createBoard(width = 5) {
  pixelBoard.style.width = `${width * 40}px`;
  pixelBoard.style.height = `${width * 40}px`;

  colors[0].className += ' selected';

  for (let rows = 0; rows < width; rows += 1) {
    createPixelsLine(5);
    for (let column = 0; column < width; column += 1) {
      createPixelsColumns(rows);
    }
  }
}
createBoard(5);

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
  const td = document.querySelectorAll('td');
  for (let item = 0; item < td.length; item += 1) {
    td[item].style.backgroundColor = 'white';
  }
});
