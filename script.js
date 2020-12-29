function newDiv() {
  const div = document.createElement('div');
  return div;
}

function RandomColors() {
  const rgbArray = [];
  let color = '';
  for (let index = 0; index < 3; index += 1) {
    rgbArray.push(Math.round(Math.random() * 255));
    if (rgbArray[index] === 0) {
      rgbArray[index] += 1;
    }
  }
  color = `rgb(${rgbArray.join(', ')})`;
  return color;
}

function backgroundColorSquare(palette) {
  for (let index = 0; index < palette.length; index += 1) {
    if (index === 0) {
      palette[index].style.backgroundColor = 'rgb(0, 0, 0)';
      palette[index].className += ' selected';
    } else {
      palette[index].style.backgroundColor = RandomColors();
    }
  }
}

function newPaletteColorSquares(palette, amount) {
  const paletteArray = [];
  for (let index = 0; index < amount; index += 1) {
    const paletteSquare = palette.appendChild(newDiv());
    paletteSquare.className = 'color';
    paletteArray.push(paletteSquare);
  }
  backgroundColorSquare(paletteArray);
}

function createPixelBoard(board, amount) {
  const column = Math.sqrt(amount);
  const line = Math.sqrt(amount);
  for (let index = 0; index < column; index += 1) {
    const squarecolumn = board.appendChild(newDiv());
    squarecolumn.className = 'table-row';
    for (let index2 = 0; index2 < line; index2 += 1) {
      const squareLine = squarecolumn.appendChild(newDiv());
      squareLine.className = 'pixel';
      squareLine.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

function deletePixelBoard(board) {
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

function deselectColor() {
  const currentColor = document.querySelector('.selected');
  currentColor.className = 'color';
}

function selectColor(event) {
  const selectedColor = event.target;
  deselectColor();
  selectedColor.className += ' selected';
}

function paintPixel(event) {
  const selectedSquare = event.target;
  if (selectedSquare !== document.querySelector('#pixel-board')) {
    const currentColor = document.querySelector('.selected');
    selectedSquare.style.backgroundColor = currentColor.style.backgroundColor;
  }
}

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
  clearButton.className = 'clear-button';
}

function createForm(section) {
  const newForm = document.createElement('form');
  const newInput = document.createElement('input');
  section.appendChild(newForm);
  newForm.appendChild(newInput);
  return newForm;
}

function clearBoard() {
  const squares = document.querySelectorAll('.pixel');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = 'white';
  }
}

function inputsForm(section) {
  const form = createForm(section);
  const inputButton = createButton(form);
  const formInput = form.firstChild;
  form.id = 'board-form';
  formInput.id = 'board-size';
  formInput.type = 'number';
  formInput.min = 1;
  formInput.max = 50;
  inputButton.innerText = 'VQV';
  inputButton.id = 'generate-board';
  inputButton.className = 'resize-button';
  inputButton.type = 'button';
}

function resizeBoard() {
  const board = document.querySelector('#pixel-board');
  const inputBoardSize = document.querySelector('#board-size');
  if (inputBoardSize.value === '') {
    return alert('Board inválido!');
  } else if (inputBoardSize.value < 5) {
    inputBoardSize.value = 5;
  } else if (inputBoardSize.value > 50) {
    inputBoardSize.value = 50;
  }
  deletePixelBoard(board);
  createPixelBoard(board, (inputBoardSize.value * inputBoardSize.value));
  return true;
}

  const paletteColor = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  const amountColors = 4;
  const amountSquares = 25;
  const buttonSection = document.querySelector('.section-form');
  newPaletteColorSquares(paletteColor, amountColors);
  createPixelBoard(pixelBoard, amountSquares);
  createClearButton(buttonSection);
  inputsForm(buttonSection);
  paletteColor.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', paintPixel);
  document.querySelector('#generate-board').addEventListener('click', resizeBoard);
  document.querySelector('#clear-board').addEventListener('click', clearBoard);
