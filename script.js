function createBoard(entry) {
  for (let index = 1; index <= entry; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    document.getElementById('pixel-board').appendChild(line);
    for (let indexPixel = 1; indexPixel <= entry; indexPixel += 1) {
      const box = document.createElement('div');
      box.className = 'pixel';
      document.getElementById('pixel-board').lastChild.appendChild(box);
    }
  }
}

const boardSize = 5;

function generatePalette() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'green';
  colors[3].style.backgroundColor = 'blue';
}

let selectedColor = document.querySelector('.selected').style.backgroundColor;
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  selectedColor = event.target.style.backgroundColor;
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
});

window.onload = function () {
  generatePalette();
  createBoard(boardSize);
  selectedColor = document.querySelector('.selected').style.backgroundColor;
};

const coloredBoard = document.querySelector('#pixel-board');
coloredBoard.addEventListener('click', function (paint) {
  paint.target.style.backgroundColor = selectedColor;
});

function clearBoard() {
  const clear = document.querySelectorAll('.pixel');
  for (let indexClear = 0; indexClear < clear.length; indexClear += 1) {
    clear[indexClear].style.backgroundColor = 'white';
  }
}
