let colors = document.querySelectorAll('.color');
let pixelBoard = document.querySelector('#pixel-board');

function rgbRandom() {
  let r = Math.ceil(Math.random() * 256);
  let g = Math.ceil(Math.random() * 256);
  let b = Math.ceil(Math.random() * 256);

  let rgb = `rgb(${r} , ${g} , ${b})`;

  return rgb;
}

function colorizePalette() {
  for (color of colors) {
    color.style.backgroundColor = rgbRandom();
    colors[0].style.backgroundColor = 'black';
  }
}
colorizePalette();

function createPixelsLine() {
  let pixelsRows = document.createElement('tr');
  pixelsRows.style.width = '40px';
  pixelBoard.appendChild(pixelsRows);
}

function createPixelsColumns(line = 0) {
  let lines = document.querySelectorAll('tr');
  let pixelsColumn = document.createElement('td');
  pixelsColumn.className = 'pixel';
  pixelsColumn.style.height = '40px';
  pixelsColumn.style.border = '1px solid gray';
  lines[line].appendChild(pixelsColumn);
}

function createBoard(width = 5) {
  pixelBoard.style.width = `${width * 40}px`;

  for (let rows = 0; rows < width; rows += 1) {
    createPixelsLine();
    for (let column = 0; column < width; column += 1) {
      createPixelsColumns(rows);
    }
  }
}
createBoard(5);