// This function create new divs elements.
function createDivs() {
  const div = document.createElement('div');
  return div;
}

// This function gerantes random rgb colors.
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

// This function add background-color to squares(divs) in color-palette section.
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

// This function create the squares(divs) in 'color-palette' section.
function createColorsPalette(palette, amount) {
  const palleteArray = [];
  for (let index = 0; index < amount; index += 1) {
    const paletteSquare = palette.appendChild(createDivs());
    paletteSquare.className = 'color';
    palleteArray.push(paletteSquare);
  }
  addColorSquare(palleteArray);
}

// This function create the pixel board.
function createPixelBoard(board, amount) {
  const column = Math.sqrt(amount);
  const line = Math.sqrt(amount);
  for (let index = 0; index < column; index += 1) {
    const squarecolumn = board.appendChild(createDivs());
    squarecolumn.className = 'table-row';
    for (let index2 = 0; index2 < line; index2 += 1) {
      const squareLine = squarecolumn.appendChild(createDivs());
      squareLine.className = 'pixel';
      squareLine.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

// This function delete the pixel board.
function deletePixelBoard(board) {
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

// This function remove class 'selected' from divs in 'color-palette' section.
function deselectColor() {
  const currentColor = document.querySelector('.selected');
  currentColor.className = 'color';
}

// This function add class 'selected' to divs in 'color-palette' section.
function selectColor(event) {
  const selectedColor = event.target;
  deselectColor();
  selectedColor.className += ' selected';
}

// This function add the same background-color of palette with class selected in pixel board.
function fillSquare(event) {
  const selectedSquare = event.target;
  if (selectedSquare !== document.querySelector('#pixel-board')) {
    const currentColor = document.querySelector('.selected');
    selectedSquare.style.backgroundColor = currentColor.style.backgroundColor;
  }
}

// This function create a new element button.
function createButton(section) {
  const newButton = document.createElement('button');
  newButton.type = 'button';
  section.appendChild(newButton);
  return newButton;
}

// This function create the clear button.
function createClearButton(section) {
  const clearButton = createButton(section);
  clearButton.innerText = 'Limpar';
  clearButton.id = 'clear-board';
  clearButton.className = 'red-button';
}

// This function create the elements form and childs.
function createForm(section) {
  const newForm = document.createElement('form');
  const newInput = document.createElement('input');
  section.appendChild(newForm);
  newForm.appendChild(newInput);
  return newForm;
}

// This function add background-color white to pixel board.
function clearBoard() {
  const squares = document.querySelectorAll('.pixel');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// This function add the elements form/input/buttom where the user insert the size of pixel board.
function addSizeForm(section) {
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
  inputButton.className = 'green-button';
  inputButton.type = 'button';
}

// This function update pixel board size with a new size.
function updateBoardSize() {
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

// This function prevent submit of a input in form.
function preventSubmit(event) {
  event.preventDefault();
}

// Function and Event Listeners call.
window.onload = function () {
  const paletteColor = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  const amountColors = 4;
  const amountSquares = 25;
  const buttonSection = document.querySelector('.section-form');
  createColorsPalette(paletteColor, amountColors);
  createPixelBoard(pixelBoard, amountSquares);
  createClearButton(buttonSection);
  addSizeForm(buttonSection);
  paletteColor.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', fillSquare);
  document.querySelector('#generate-board').addEventListener('click', updateBoardSize);
  document.querySelector('#clear-board').addEventListener('click', clearBoard);
  document.querySelector('#board-form').addEventListener('submit', preventSubmit);
};
