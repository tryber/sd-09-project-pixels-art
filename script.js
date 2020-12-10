const pixelBoard = document.getElementById('pixel-board');

function makeLinePixels() {
  for (let index = 0; index <= 24; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
  }
}

makeLinePixels();

function changeSelectedColor(event) {
  const getOldSelectedColor = document.querySelector('.selected');
  const targetSelectedColor = event.target;
  if (targetSelectedColor !== getOldSelectedColor) {
    getOldSelectedColor.classList.remove('selected');
    targetSelectedColor.classList.add('selected');
  }
}

function getSelectedColor() {
  for (let index = 0; index < 4; index += 1) {
    const getColorPallete = document.querySelectorAll('.color')[index];
    getColorPallete.addEventListener('click', changeSelectedColor);
  }
}

getSelectedColor();

function pixelColoring(event) {
  const getColorSelected = document.querySelector('.selected');
  const targetSelectedPixel = event.target;
  targetSelectedPixel.style.backgroundColor = getColorSelected.style.backgroundColor;
}

function pixelEvents() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.addEventListener('click', pixelColoring);
  }
}

pixelEvents();

function clearAllPixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAllPixels);
