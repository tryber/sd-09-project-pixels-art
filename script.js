let boardSize = 5;

function getValueBoard() {
  boardSize = parseInt(document.querySelector('#board-size').value, 10);
  if (boardSize < 5) {
    boardSize = 5;
  }
  if (boardSize > 50) {
    boardSize = 50;
  }
}

function generateBoard () {
  if (document.querySelectorAll('.pixel').length == 0) {
    for (let index = 1; index <= boardSize; index += 1) {
      const tr = document.createElement('tr');
      document.querySelector('#pixel-board').appendChild(tr);
      for (let index4 = 1; index4 <= boardSize; index4 += 1) {
        const td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
    }
  } else {
    for (let index5 = 0; index5 < document.querySelectorAll('.pixel').length; index5 += 1) {
      const tr = document.querySelector('#pixel-board tr');
      document.querySelector('#pixel-board').removeChild(tr);
    }
    for (let index6 = 1; index6 <= boardSize; index6 += 1) {
      const tr = document.createElement('tr');
      document.querySelector('#pixel-board').appendChild(tr);
      for (let index7 = 1; index7 <= boardSize; index7 += 1) {
        const td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
    }
  }
}

const buttonGenerateBoard = document.querySelector('#generate-board');
buttonGenerateBoard.addEventListener('click', function () {
  if (document.querySelector('#board-size').value === '') {
    alert('Board inválido!');
  } else {
    getValueBoard();
    generateBoard();
    changeBackgroundColor();
  }
});

document.querySelector('.black').classList.add('selected');

function selectedBlack() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.black').classList.add('selected');
}

function selectedRed() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.red').classList.add('selected');
}

function selectedGreen() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.green').classList.add('selected');
}

function selectedBlue() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.blue').classList.add('selected');
}
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
black.addEventListener('click', function () {
  selectedBlack();
});
red.addEventListener('click', function () {
  selectedRed();
});
green.addEventListener('click', function () {
  selectedGreen();
});
blue.addEventListener('click', function () {
  selectedBlue();
});

function changeBackgroundColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index2 = 0; index2 < pixel.length; index2 += 1) {
    pixel[index2].addEventListener('click', function (event) {
      const element = document.querySelector('.selected');
      const backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = backgroundColor;
    });
  }
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index3 = 0; index3 < pixel.length; index3 += 1) {
    pixel[index3].style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', function () {
  clear();
});

window.onload = function () {
  generateBoard();
  changeBackgroundColor();
};
