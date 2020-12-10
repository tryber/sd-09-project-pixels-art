const paletteColor = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonSection = document.querySelector('#button-section');
function createDivs() {
  const div = document.createElement('div');
  return div;
}

function generateRandomColors() {
  const rgbNumberArray = [];
  let color = '';
  for (let index = 0; index < 3; index += 1) {
    rgbNumberArray.push(Math.round(Math.random() * 255));
    if (rgbNumberArray[index] === 0) {
      rgbNumberArray[index] += 1;
    }
  }
  color = `rgb(${rgbNumberArray.join(', ')})`;
  return color;
}

function addColorSquare(palette) {
  for (let index = 0; index < palette.length; index += 1) {
    if (index === 0) {
      palette[index].style.backgroundColor = 'rgb(0, 0, 0)';
      palette[index].className += ' selected';
    } else {
      palette[index].style.backgroundColor = generateRandomColors();
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
  addColorSquare(palleteArray);
}

const amountColors = 4;
createColorsPalette(paletteColor, amountColors);

function createSquares(board, amount) {
  let column = Math.sqrt(amount);
  let line = Math.sqrt(amount);
  for (let index = 0; index < column; index += 1) {
    const squarecolumn = board.appendChild(createDivs());
    squarecolumn.style.backgroundColor = 'rgb(255, 255, 255)';
    for (let index = 0; index < line; index += 1) {
      const squareLine = squarecolumn.appendChild(createDivs());
      squareLine.className = 'pixel';
      squareLine.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

function removeSquares(board) {
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

function loadBoard(board, amount) {
  if (sessionStorage.getItem('board-size') === null) {
    createSquares(board, amount);
  } else {
    const newBoardSize = sessionStorage.getItem('board-size');
    removeSquares(board);
    createSquares(board, newBoardSize);
  }
}

const amountSquares = 25;
loadBoard(pixelBoard, amountSquares);

function deselectColor() {
  const currentColor = document.querySelector('.selected');
  currentColor.className = 'color';
}

function selectColor(event) {
  const selectedColor = event.target;
  deselectColor();
  selectedColor.className += ' selected';
}

paletteColor.addEventListener('click', selectColor);

function fillSquare(event) {
  const selectedSquare = event.target;
  if (selectedSquare !== document.querySelector('#pixel-board')) {
    const currentColor = document.querySelector('.selected');
    selectedSquare.style.backgroundColor = currentColor.style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', fillSquare);

function createButton(section) {
  const newButton = document.createElement('button');
  newButton.type = 'button';
  section.appendChild(newButton);
  return newButton;
}

function createClearButton(section) {
  const clearButton = createButton(section);
  clearButton.innerText = 'Limpar';
  clearButton.id = 'clear-board';
}

createClearButton(buttonSection);

function createForm(section) {
  const newForm = document.createElement('form');
  const newLabel = document.createElement('label');
  const newInput = document.createElement('input');
  section.appendChild(newForm);
  newForm.appendChild(newLabel);
  newForm.appendChild(newInput);
  return newForm;
}

function clearBoard() {
  const squares = document.querySelectorAll('.pixel');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const buttonClearBoard = document.querySelector('#clear-board');
buttonClearBoard.addEventListener('click', clearBoard);

function createInputSizeBoard(section) {
  const inputForm = createForm(section);
  const inputButton = createButton(inputForm);
  const formLabel = inputForm.firstChild;
  const formInput = formLabel.nextSibling;
  formLabel.for = 'board-size';
  formInput.id = 'board-size';
  formInput.type = 'number';
  formInput.min = 1;
  formInput.max = 50;
  inputButton.innerText = 'VQV';
  inputButton.id = 'generate-board';
  inputButton.type = 'input';
}

createInputSizeBoard(buttonSection);

function storeBoardSize() {
  const inputBoardSize = document.querySelector('#board-size');
  if (inputBoardSize.value === '') {
    return alert('Board inválido!');
  } else if (inputBoardSize.value < 5) {
    inputBoardSize.value = 5;
  } else if (inputBoardSize.value > 50) {
    inputBoardSize.value = 50;
  }
  sessionStorage.setItem('board-size', (inputBoardSize.value * inputBoardSize.value));
}

const buttonGenerateBoard = document.querySelector('#generate-board');
buttonGenerateBoard.addEventListener('click', storeBoardSize);
