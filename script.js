const colorPalette = document.querySelector('#color-palette');
const blackBox = document.querySelector('.black');
const pixelBoard = document.querySelector('#pixel-board');
const clearBoard = document.querySelector('#clear-board');
const pixelElement = document.querySelectorAll('.pixel');
const boardSize = document.querySelector('#board-size');
const generateBoardBt = document.querySelector('#generate-board');

function chooseColor() {
  colorPalette.addEventListener('click', function (event) {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      const selected = document.querySelector('.selected');
      if (selected.classList.contains('selected')) {
        selected.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
chooseColor();

function generateColor() {
  const color = `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`
  return color;
}

function createBox() {
  color = generateColor();
  const coloredBox = document.createElement('div');
  coloredBox.style.backgroundColor = color;
  coloredBox.className = 'color';
  colorPalette.appendChild(coloredBox);
}
createBox();
createBox();
createBox();

function changeColor() {
  let boxOne = document.getElementsByClassName('color')[1];
  let boxTwo = document.getElementsByClassName('color')[2];
  let boxThree = document.getElementsByClassName('color')[3];
  blackBox.style.backgroundColor = 'black';
  pixelBoard.addEventListener('click', function (event) {
    if (blackBox.classList.contains('selected')) {
      event.target.style.backgroundColor = blackBox.style.backgroundColor;
    } else if (boxOne.classList.contains('selected')) {
      event.target.style.backgroundColor = boxOne.style.backgroundColor;
    } else if (boxTwo.classList.contains('selected')) {
      event.target.style.backgroundColor = boxTwo.style.backgroundColor;
    } else if (boxThree.classList.contains('selected')) {
      event.target.style.backgroundColor = boxThree.style.backgroundColor;
    }
  });  
}
changeColor();

function cleanBoard() {
  clearBoard.addEventListener('click', function () {
    for (let index = 0; index < pixelElement.length; index += 1) {
      pixelElement[index].style.backgroundColor = 'white';
    }
  });
}
cleanBoard();

function createBoard() {
  generateBoardBt.addEventListener('click', function () {
    pixelBoard.innerHTML = '';
    if (boardSize.value === '') {
      alert('Board inválido!');
    } else if (boardSize.value > 50) {
      boardSize.value = 50;
    } else if (boardSize.value < 5) {
      boardSize.value = 5;
    }
    for (let index = 0; index < boardSize.value; index += 1) {
      const tr = document.createElement('div');
      tr.className = 'tr';
      pixelBoard.appendChild(tr);
      for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
        const td = document.createElement('div');
        td.className = 'pixel td';
        tr.appendChild(td);
      }
    }
  });
}
createBoard();
