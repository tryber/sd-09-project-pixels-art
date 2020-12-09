// Referencia Random Color:
// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBox(classN, color, father, number) {
  for (let index = 0; index < number; index += 1) {
    const boxColor = document.createElement('div');
    boxColor.className = classN;
    boxColor.style.backgroundColor = color;
    father.appendChild(boxColor);
  }
}

function selectedColorClear() {
  const selectedClear = document.querySelectorAll('.color');
  for (let index = 0; index < selectedClear.length; index += 1) {
    selectedClear[index].className = 'color';
  }
}

function selectedColor(origin) {
  if (origin.target.className !== 'color selected') {
    selectedColorClear();
    origin.target.className = 'color selected';
  } else {
    origin.target.className = 'color';
    document.querySelectorAll('.color')[0].className = 'color selected';
  }
}

function selectedColorLoop() {
  const colorSelect = document.querySelectorAll('.color');
  for (let index = 0; index < colorSelect.length; index += 1) {
    colorSelect[index].addEventListener('click', selectedColor);
  }
}

function palette(number) {
  const divFather = document.querySelector('#color-palette');
  createBox('color selected', 'rgb(0, 0, 0)', divFather, 1);
  for (let index = 0; index < number; index += 1) {
    createBox('color', getRandomColor(), divFather, 1);
  }
  selectedColorLoop();
}

function createBoard(size) {
  const divFather = document.querySelector('#pixel-board');
  for (let indexS = 0; indexS < size; indexS += 1) {
    const board = document.createElement('section');
    board.className = 'line';
    divFather.appendChild(board);
    const fatherBox = document.querySelectorAll('.line');
    for (let index = 0; index < size; index += 1) {
      createBox('pixel', 'white', fatherBox[indexS], 1);
    }
  }
}

function colorChange(origin) {
  const boxColor = document.querySelector('.color.selected');
  if (origin.target.style.backgroundColor !== boxColor.style.backgroundColor) {
    origin.target.style.backgroundColor = boxColor.style.backgroundColor;
  } else {
    origin.target.style.backgroundColor = 'white';
  }
}

function boxLoop() {
  const boxL = document.querySelectorAll('.pixel');
  for (let index = 0; index < boxL.length; index += 1) {
    boxL[index].addEventListener('click', colorChange);
  }
}

function createButton(idC, name, father) {
  const buttonClear = document.createElement('button');
  buttonClear.id = idC;
  buttonClear.innerText = name;
  const buttonFather = document.querySelector(father);
  buttonFather.appendChild(buttonClear);
}

createButton('clear-board', 'Limpar', '.button-clear');

function clearBoard() {
  const totalPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < totalPixels.length; index += 1) {
    totalPixels[index].style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);

createButton('generate-board', 'VQV', '.size');

function generateBoard() {
  if (textInput.value === '') {
    alert('Board inválido!');
  }
  const sizeValor = textInput.value;
  textInput.value = '';

  removeBoard();
  createBoard(checkNumber(sizeValor));
  boxLoop();
}

const textInput = document.querySelector('#board-size');
const buttonGenerate = document.querySelector('#generate-board');
buttonGenerate.addEventListener('click', generateBoard);

function removeBoard() {
  const board = document.querySelectorAll('.line');
  for (let indexS = 0; indexS < board.length; indexS += 1) {
    let boardRemove = board[indexS];
    boardRemove.remove();
  }
}

function checkNumber(number) {
  if (number < 5) {
    number = 5;
    return number;
  } else if (number > 50) {
    number = 50;
    return number;
  }
  return number;
}

palette(3);
createBoard(5);
boxLoop();
