let pickedColor = 'black';

document.getElementById('first-color').classList.add('selected');

let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', pickPaint);


let pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', paintPixel);

function drawBoard(rows, cols) {
  pixelBoard.style.setProperty('--rows', rows);
  pixelBoard.style.setProperty('--cols', cols);
  for (let i = 0; i < (rows * cols); i += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

drawBoard(5, 5);


function pickPaint(event) {
  if (event.target.id === 'color-palette') {
    return pickedColor;
  } else {
    let oldPaint = document.querySelector('.selected');
    let currentPaint = event.target;
    oldPaint.classList.remove('selected');
    currentPaint.classList.add('selected');

    pickedColor = currentPaint.style.backgroundColor;
    console.log(currentPaint.style.backgroundColor)
  }
}

function paintPixel(event) {
  event.target.style.backgroundColor = pickedColor;
}

let clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', clearBoard);

function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');

  for(let index in pixels) {
    pixels[index].style.backgroundColor = 'white';
  }
}
