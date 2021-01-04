const pixelBoard = document.getElementById('pixel-board');
const pixelBoard1 = document.getElementsByClassName('pixelBoard');
const btnClear = document.querySelector('#clear-board');
const paletteBoard = document.querySelector('#color-palette');
const cor1 = document.getElementById('color1');
const cor2 = document.getElementById('color2');
const cor3 = document.getElementById('color3');
const cor4 = document.getElementById('color4');

function randonColor(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = randonColor();
cor3.style.backgroundColor = randonColor();
cor4.style.backgroundColor = randonColor();

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

function colorPixels(){
  pixelBoard.addEventListener('click', function(event) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = colorSelected;
  })
}

function clearBoard(){
  btnClear.addEventListener('click', function() {
    for (let i = 0; i < pixelBoard.length; i += 1) {
      pixelBoard1[i].style.backgroundColor = '#fff';
    }
  });
}

createColumPixel(5);
selectedColor();
colorPixels();
clearBoard();