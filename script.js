const paletteBoard = document.querySelector('#color-palette');
const cor1 = document.getElementById('color1');
const cor2 = document.getElementById('color2');
const cor3 = document.getElementById('color3');
const cor4 = document.getElementById('color4');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'red';
cor4.style.backgroundColor = 'yellow';



const pixelBoard = document.getElementById('pixel-board');

function createLinePixel(number, pixelLine) {
  for (let i = 0; i < number; i+= 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelLine.appendChild(pixel);
  }
}

function createColumPixel(number) {
  for (let i = 0; i < number; i+= 1) {
    const pixelLineBoard = document.createElement('div');
    createLinePixel(number, pixelLineBoard);
    pixelBoard.appendChild(pixelLineBoard);
  }
}

function selectedColor() {
  paletteBoard.addEventListener('click', function(event) {
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color';
    event.target.className = 'color selected';
  })
}

createColumPixel(5);
selectedColor();