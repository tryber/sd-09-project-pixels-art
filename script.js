let colorselected = 'black';
function generatePixelBoard(size) {
  const boardPixel = document.querySelector('#pixel-board');
  for (let i = 0; i < size; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    boardPixel.appendChild(row);
    for (let ii = 0; ii < size; ii += 1) {
      const elementPixel = document.createElement('div');
      elementPixel.className = 'pixel';
      row.appendChild(elementPixel);
    }
  }
}

generatePixelBoard(5);

function createPallets(qty) {
  const colorpalet = document.querySelector('#color-palette');
  for (let i = 0; i < qty.length; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = qty[i];
    colorpalet.appendChild(color);
    if (qty[i] === 'black') {
      color.className += ' selected';
    }
  }
}

function createAleatoryColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r} , ${g} , ${b})`;
}

createPallets([
  'black',
  createAleatoryColor(),
  createAleatoryColor(),
  createAleatoryColor(),
]);

function selectedcolor(event) {
  const p = document.querySelector('.selected');
  p.classList.remove('selected');
  event.target.classList.add('selected');
  colorselected = event.target.style.backgroundColor;
}

let searchbuttons = document.querySelectorAll('.color');

for (let i = 0; i < searchbuttons.length; i += 1) {
  searchbuttons[i].addEventListener('click', selectedcolor);
}

function printcolor(event) {
  event.target.style.backgroundColor = colorselected;
}

const colorize = document.querySelectorAll('.pixel');

for (let i = 0; i < colorize.length; i += 1) {
  colorize[i].addEventListener('click', printcolor);
}
