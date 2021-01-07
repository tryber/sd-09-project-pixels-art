// ====== FUNCOES ======
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

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomRGB = 'rgb('.concat(red, ' , ', green, ' , ', blue, ')');
  return randomRGB;
}

function generatePalette() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = randomColor();
  colors[2].style.backgroundColor = randomColor();
  colors[3].style.backgroundColor = randomColor();
}

function clearBoard() {
  const clear = document.querySelectorAll('.pixel');
  for (let indexClear = 0; indexClear < clear.length; indexClear += 1) {
    clear[indexClear].style.backgroundColor = 'white';
  }
}

function newBoard() {
  const newBoardSize = parseInt(document.getElementById('board-size').value);
  if (newBoardSize) {
    if (newBoardSize > 50) {
      document.getElementById('pixel-board').innerHTML = ''
      createBoard(50);
    } else if (newBoardSize >= 5 && newBoardSize <= 50) {
      document.getElementById('pixel-board').innerHTML = ''
      createBoard(newBoardSize);
    } else if (newBoardSize > 0 && newBoardSize < 5) {
      document.getElementById('pixel-board').innerHTML = ''
      createBoard(5);
    }
  } else {
    alert('Board inválido!');
  }
}

let selectedColor = document.querySelector('.selected').style.backgroundColor;
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  selectedColor = event.target.style.backgroundColor;
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
});

const coloredBoard = document.querySelector('#pixel-board');
coloredBoard.addEventListener('click', function (paint) {
  paint.target.style.backgroundColor = selectedColor;
});

// ====== BOTOES ======
document.getElementById('clear-board').addEventListener('click', clearBoard);
document.getElementById('generate-board').addEventListener('click', newBoard);

// ====== ONLOAD ======
window.onload = function () {
  const boardSize = 5;
  generatePalette();
  createBoard(boardSize);
  clearBoard();
  selectedColor = document.querySelector('.selected').style.backgroundColor;
};
