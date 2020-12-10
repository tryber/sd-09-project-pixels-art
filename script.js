const colorPalette = document.querySelector('#color-palette');
const blackBox = document.querySelector('.black');
const cyanBox = document.querySelector('.cyan');
const blueVioletBox = document.querySelector('.blueviolet');
const greenBox = document.querySelector('.green');
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

function cleanBoard() {
  clearBoard.addEventListener('click', function () {
    for (let index = 0; index < pixelElement.length; index += 1) {
      pixelElement[index].style.backgroundColor = 'white';
    }
  });
}
cleanBoard();

function changeColor() {
  blackBox.style.backgroundColor = 'black';
  cyanBox.style.backgroundColor = 'cyan';
  blueVioletBox.style.backgroundColor = 'blueviolet';
  greenBox.style.backgroundColor = 'green';
  pixelBoard.addEventListener('click', function (event) {
    if (blackBox.classList.contains('selected')) {
      event.target.style.backgroundColor = blackBox.style.backgroundColor;
    } else if (cyanBox.classList.contains('selected')) {
      event.target.style.backgroundColor = cyanBox.style.backgroundColor;
    } else if (blueVioletBox.classList.contains('selected')) {
      event.target.style.backgroundColor = blueVioletBox.style.backgroundColor;
    } else if (greenBox.classList.contains('selected')) {
      event.target.style.backgroundColor = greenBox.style.backgroundColor;
    }
  });
}
changeColor();
