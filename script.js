const reedColors = document.querySelectorAll('#color-palette>div');
const boardOfPixel = document.querySelector('#pixel-board');
const input = document.createElement('input');
input.type = 'number';
input.id = 'board-size';
input.className = 'board-size';
const buttonPixel = document.createElement('button');
buttonPixel.innerHTML = 'VQV';
buttonPixel.id = 'generate-board';
buttonPixel.className = 'button';
const sectionsOfButtons = document.querySelector('#buttons');
sectionsOfButtons.appendChild(input);
sectionsOfButtons.appendChild(buttonPixel);
const button = document.createElement('button');
button.id = 'clear-board';
button.className = 'button';
button.innerHTML = 'Limpar';
const buttonsSection = document.querySelector('#buttons');
buttonsSection.appendChild(button);

// Classifica as cores da paleta
function coloPalette() {
  reedColors[1].style.backgroundColor = 'red';
  reedColors[2].style.backgroundColor = 'green';
  reedColors[3].style.backgroundColor = 'blue';
}

function removeAllChildFromPixelBoard() {
  const pix = document.querySelector('#pixel-board');
  while (pix.hasChildNodes()) {
    pix.removeChild(pix.firstChild);
  }
}
removeAllChildFromPixelBoard();


function getInputValue() {
  let inputPixels = document.querySelector('#board-size');
  inputPixels = parseInt(inputPixels.value);
    if (inputPixels >= input.min && inputPixels < 5) {
      inputPixels = 5;
    } else if (inputPixels > 50) {
      inputPixels = 50;
    } else if (inputPixels.value === "" || isNaN(inputPixels)) {
      inputPixels = false;
    }
  return inputPixels;
}

// Cria a tabela de pixels
function GeneratePixelBoard(number) {
  const pixels = number * number;
  for (let index = 0; index < pixels; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    boardOfPixel.appendChild(divPixel);
    boardOfPixel.style.gridTemplateColumns = `repeat(${number}, auto)`;
  }
}
GeneratePixelBoard(5);

// Seta a cor preta no primeiro item da paleta de cores
function getBlackColor() {
  const colorBlack = document.querySelector('.selected');
  const black = 'black';
  colorBlack.style.backgroundColor = black;
  localStorage.setItem('backgroundColor', black);
}

function blackColor() {
  const selected = document.querySelectorAll('#color-palette .color')[0];
  const pixelBoard = document.querySelectorAll('#pixel-board>.pixel');
  const color = selected.style.backgroundColor;

  for (let index = 0; index < pixelBoard.length; index += 1) {
    const colorPixel = pixelBoard[index];
    colorPixel.addEventListener('click', function (event) {
      if (selected.classList.contains('selected')) {
        event.target.style.backgroundColor = color;
      }
    });
  }
}
blackColor();

function colorOne() {
  const selected = document.querySelectorAll('#color-palette .color')[1];
  const pixelBoard = document.querySelectorAll('.pixel');
  const color = selected.style.backgroundColor;

  for (let index = 0; index < pixelBoard.length; index += 1) {
    const colorPixel = pixelBoard[index];
    colorPixel.addEventListener('click', function (event) {
      if (selected.classList.contains('selected')) {
        event.target.style.backgroundColor = color;
      }
    });
  }
}
colorOne();

function colorTwo() {
  const selected = document.querySelectorAll('#color-palette .color')[2];
  const pixelBoard = document.querySelectorAll('.pixel');
  const color = selected.style.backgroundColor;

  for (let index = 0; index < pixelBoard.length; index += 1) {
    const colorPixel = pixelBoard[index];
    colorPixel.addEventListener('click', function (event) {
      if (selected.classList.contains('selected')) {
        event.target.style.backgroundColor = color;
      }
    });
  }
}
colorTwo();

function colorThree() {
  const selected = document.querySelectorAll('#color-palette .color')[3];
  const pixelBoard = document.querySelectorAll('.pixel');
  const color = selected.style.backgroundColor;

  for (let index = 0; index < pixelBoard.length; index += 1) {
    const colorPixel = pixelBoard[index];
    colorPixel.addEventListener('click', function (event) {
      if (selected.classList.contains('selected')) {
        event.target.style.backgroundColor = color;
      }
    });
  }
}
colorThree();

function selectedActivate() {
  const select = document.querySelector('#color-palette');
  select.addEventListener('click', function (event) {
    if (event.target.className === 'color') {
      event.target.className = 'color selected';
    }
  });
}

// SOURCE:
// https://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript

function selectedDesactivate() {
  const pix = document.querySelectorAll('.color');
  const select = document.querySelector('#color-palette');
  select.addEventListener('click', function () {
    for (let index = 0; index < pix.length; index += 1) {
      pix[index].classList.remove('selected');
    }
  });
}

function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  button.addEventListener('click', function () {
    for (let index = 0; index < pixelBoard.length; index += 1) {
      const colorsBoard = pixelBoard[index];
      colorsBoard.style.backgroundColor = 'white';
    }
  });
}

function generateUserBoard() {
  const inputNumber = getInputValue();
  if (inputNumber === false) {
    alert('Board inválido!');
  } else {
    removeAllChildFromPixelBoard();
    GeneratePixelBoard(inputNumber);
    clearBoard();
    blackColor();
    colorOne();
    colorTwo();
    colorThree();
  }
}

buttonPixel.addEventListener('click', generateUserBoard);

window.onload = function () {
  GeneratePixelBoard();
  coloPalette();
  getBlackColor();
  blackColor();
  colorOne();
  colorTwo();
  colorThree();
  selectedDesactivate();
  clearBoard();
  selectedActivate();
};
