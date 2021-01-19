const black = document.getElementsByTagName('div')[0];
const red = document.getElementsByTagName('div')[1];
const green = document.getElementsByTagName('div')[2];
const blue = document.getElementsByTagName('div')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';

function boardPixels(number) {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
}

boardPixels(5);

function selectedColor(color) {
  const previousSelected = document.querySelector('.selected');
  const newSelected = color.target;
  previousSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

document.getElementById('color-palette').addEventListener('click', selectedColor);

function paintPixel(paint) {
  if (paint.target.className === 'pixel') {
    const paintColor = document.querySelector('.selected').style.backgroundColor;
    paint.target.style.backgroundColor = paintColor;
  }
}

document.getElementById('pixel-board').addEventListener('click', paintPixel);

function clearButton() {
  const pixels = document.querySelectorAll('div');
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].className === 'pixel') {
      pixels[i].style.backgroundColor = 'white';
    }
  }
}

document.getElementById('clear-board').addEventListener('click', clearButton);

function generatePixels() {
  const pixels = document.querySelectorAll('div');
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].className === 'pixel') {
      pixels[i].remove();
    }
  }
  const board = document.querySelector('.board');
  const size = document.getElementById('board-size');
  if (size.value === '') {
    alert('Board inválido!');
  } if (size.value < 5) {
    size.value = 5;
  } if (size.value > 50) {
    size.value = 50;
  }
  let calculation = 2.625 * size.value;
  board.style.height = `${calculation}em`;
  board.style.width = `${calculation}em`;
  boardPixels(size.value)
  clearButton();
}

document.getElementById('generate-board').addEventListener('click', generatePixels);
