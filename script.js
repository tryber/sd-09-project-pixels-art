
window.onload = function () {
const blackPixelPalette = document.querySelector('.black');
blackPixelPalette.className += ' selected';

// Paleta de cores aleatória
const colors = document.querySelectorAll('.color');
for (let index = 1; index < colors.length; index += 1) {
const rComponent = Math.ceil(Math.random() * 255);
const gComponent = Math.ceil(Math.random() * 255);
const bComponent = Math.ceil(Math.random() * 255);
const randomColor = `rgb(${rComponent}, ${gComponent}, ${bComponent})`;
colors[index].style.backgroundColor = randomColor;
}
};

// Pintando o pixel
function changeColor(target, pixelColor) {
if (target.style.backgroundColor !== pixelColor) {
target.style.backgroundColor = pixelColor;
} else {
target.style.backgroundColor = 'white';
}
}

function eventFunction(event) {
const selectedColor = document.querySelector('.selected');
changeColor(event.target, window.getComputedStyle(selectedColor, null).getPropertyValue('background-color'));
}

function paintPixel() {
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
    const pixelClicked = pixels[index];
    pixelClicked.removeEventListener('click', eventFunction);
    pixelClicked.addEventListener('click', eventFunction);
}

}

paintPixel();

// Selecionando a cor
function selectColor() {
  const colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.className = selectedColor.className.replace(' selected', '');
      colorPalette[index].className += ' selected';
    });
  }
}

selectColor();

// Limpar pixels
function clearingPixels() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }

function clearBoard() {
const clearPixels = document.querySelector('#clear-board');
clearPixels.addEventListener('click', function () {
    clearingPixels();
});
}

clearBoard();

// Personaliza tamanho do quadro
function addPixels(sizeValue) {
  const pixelBoard = document.querySelector('#pixel-board');
  let pixels = document.querySelectorAll('.pixel');
  const pixelSize = 42;
  pixelBoard.style.width = `${sizeValue * pixelSize}px`;
  while (pixels.length < sizeValue ** 2) {
    const newdiv = document.createElement('div');
    newdiv.className = 'pixel';
    pixelBoard.appendChild(newdiv);
    pixels = document.querySelectorAll('.pixel');
  }
}

function removePixels(sizeValue) {
const pixelBoard = document.querySelector('#pixel-board');
let pixels = document.querySelectorAll('.pixel');
const pixelSize = 42;
pixelBoard.style.width = `${sizeValue * pixelSize}px`;
  while (pixels.length > sizeValue ** 2) {
    pixelBoard.removeChild(pixels[pixels.length - 1]);
    pixels = document.querySelectorAll('.pixel');
  }
}
