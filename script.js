const black = document.getElementsByTagName('div')[0];
const red = document.getElementsByTagName('div')[1];
const green = document.getElementsByTagName('div')[2];
const blue = document.getElementsByTagName('div')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';

window.onload = function () {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
};

function selectedColor(color) {
  const previousSelected = document.querySelector('.selected');
  const newSelected = color.target;
  previousSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

document.getElementById('color-palette').addEventListener('click', selectedColor);

function paintPixel (paint) {
  const paintColor = document.querySelector('.selected').style.backgroundColor;
  if (paint.target.className === 'pixel') {
    paint.target.style.backgroundColor = paintColor;
  }
}

document.querySelector('#pixel-board').addEventListener('click', paintPixel);
