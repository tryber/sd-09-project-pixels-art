let squareSide = 5;
const paletteSize = 4;
const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple', 'violet', 'gray', 'brown', 'gold', 'silver'];
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clear = document.getElementById('clear-board');
const newBoard = document.getElementById('generate-board');
const newBoardSize = document.getElementById('board-size');

function fillPalette(palette, colorOptions) {
  let colorOption;
  let colorIndex;
  const colorChosen = colors;
  for (let index = 0; index < colorOptions; index += 1) {
    colorOption = document.createElement('div');
    colorOption.classList.add('color');
    colorIndex = Math.ceil(Math.random() * (12 - index));
    colorOption.classList.add(colorChosen[colorIndex]);
    palette.appendChild(colorOption);
    colorChosen.splice(colorIndex, 1);
  }
}

function createPalette(palette) {
  const colorOption = document.createElement('div');
  colorOption.classList.add('color');
  colorOption.classList.add(colors[0]);
  colorOption.classList.add('selected');
  palette.appendChild(colorOption);
  fillPalette(palette, paletteSize - 1);
}

createPalette(colorPalette);

function createPixel(color) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.classList.add(color);
  return pixel;
}

function pixelLine() {
  const line = document.createElement('div');
  line.className = 'pixel-line';
  for (let index = 0; index < squareSide; index += 1) {
    const pixel = createPixel('white');
    line.appendChild(pixel);
  }
  return line;
}

function buildBoard(board) {
  for (let index = 0; index < squareSide; index += 1) {
    const line = pixelLine();
    board.appendChild(line);
  }
}

buildBoard(pixelBoard);

function colorSelect(event) {
  const colorOptions = document.getElementsByClassName('color');
  for (let index = 0; index < colorOptions.length; index += 1) {
    colorOptions[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

colorPalette.addEventListener('click', colorSelect);

function paint(event) {
  const newColor = document.querySelector('.selected').classList[1];
  const oldColor = event.target.classList[1];
  event.target.classList.remove(oldColor);
  event.target.classList.add(newColor);
}

pixelBoard.addEventListener('click', paint);

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const newColor = 'white';
  let oldColor;
  for (let index = 0; index < pixels.length; index += 1) {
    oldColor = pixels[index].classList[1];
    pixels[index].classList.remove(oldColor);
    pixels[index].classList.add(newColor);
  }
}

clear.addEventListener('click', clearBoard);

function destroyBoard(board) {
  for (let index = 0; index < squareSide; index += 1) {
    board.removeChild(board.firstChild);
  }
}

function buildNewBoard() {
  if (newBoardSize.value === '') {
    alert('Board inválido!');
    return;
  }
  destroyBoard(pixelBoard);
  if (newBoardSize.value < 5) {
    squareSide = 5;
  } else if (newBoardSize.value > 50) {
    squareSide = 50;
  } else {
    squareSide = newBoardSize.value;
  }
  buildBoard(pixelBoard);
}

newBoard.addEventListener('click', buildNewBoard);
