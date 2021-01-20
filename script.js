function generatingColors() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    const randomColor = `rgb(${r}, ${g} , ${b})`;
    color[i].style.backgroundColor = randomColor;
  }
  color[0].style.backgroundColor = 'rgb(0 , 0 , 0)';
}

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

function selectedColor(selected) {
  const previousSelected = document.querySelector('.selected');
  const newSelected = selected.target;
  previousSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

function paintPixel(paint) {
  if (paint.target.classList.contains('pixel')) {
    const paintColor = document.querySelector('.selected').style.backgroundColor;
    paint.target.style.backgroundColor = paintColor;
  }
}

function clear() {
  const pixels = document.querySelectorAll('div');
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].classList.contains('pixel')) {
      pixels[i].style.backgroundColor = 'rgb(255 , 255 , 255)';
    }
  }
}

function removeTable() {
  const pixels = document.querySelectorAll('div');
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].classList.contains('pixel')) {
      pixels[i].remove();
    }
  }
}

function generatePixels() {
  removeTable();
  const board = document.querySelector('.board');
  const size = document.getElementById('board-size');
  if (size.value === '') {
    alert('Board inválido!');
  } if (size.value < 5) {
    size.value = 5;
  } if (size.value > 50) {
    size.value = 50;
  }
  const calculation = 2.625 * size.value;
  board.style.height = `${calculation}em`;
  board.style.width = `${calculation}em`;
  boardPixels(size.value);
  clear();
}

generatingColors();
boardPixels(5);
document.getElementById('color-palette').addEventListener('click', selectedColor);
document.getElementById('pixel-board').addEventListener('click', paintPixel);
document.getElementById('clear-board').addEventListener('click', clear);
document.getElementById('generate-board').addEventListener('click', generatePixels);
