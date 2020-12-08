window.onload = function () {
  document.querySelector('#color1').className += ' selected';
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = 'red';
  document.querySelector('#color3').style.backgroundColor = 'green';
  document.querySelector('#color4').style.backgroundColor = 'blue';
};
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('.colorPalette');
const palette1 = document.querySelector('#color1');
const palette2 = document.querySelector('#color2');
const palette3 = document.querySelector('#color3');
const palette4 = document.querySelector('#color4');
const btnErase = document.querySelector('#clear-board');
const numberSquare = document.querySelector('#board-size');
const generateSquare = document.querySelector('#generate-board');
let atualNumber = 5;

function isInside(size) {
  let rightSize = size;
  if (size < 5) {
    rightSize = 5;
  } else if (size > 50) {
    rightSize = 50;
  }
  return rightSize;
}

function makeSquare() {
  let widthSquare = parseInt(numberSquare.value);
  if (widthSquare == NaN) {
    alert('Board inválido!');
  } else {
    widthSquare = isInside(widthSquare);
  }
  return widthSquare;
}

function makeLinePixels(line) {
  let numberOfSquare = makeSquare();
  for (let index = 0; index < numberOfSquare; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
  atualNumber = makeSquare();
}

function reposeSquare() {
  const pixelBoard = document.querySelector('#pixel-board');
  let childrenPixel = document.querySelectorAll('.linePixel');
  for (let index = 0; index < atualNumber; index += 1){
    pixelBoard.removeChild(childrenPixel[index]);
  }
  makePixels();
}

function makePixels() {
  let numberOfSquare = makeSquare();
  for (let index = 0; index < numberOfSquare; index += 1) {
    const pixelLine = document.createElement('div');
    makeLinePixels(pixelLine);
    pixelLine.className = 'linePixel';
    pixelBoard.appendChild(pixelLine);
  }
}

function setNumbersOfSquares() {
  generateSquare.addEventListener('click', reposeSquare);
}

function makePixelColorized(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function colorizePixels() {
  pixelBoard.addEventListener('click', makePixelColorized);
}

function selectPalette(event) {
  palette1.className = 'color';
  palette2.className = 'color';
  palette3.className = 'color';
  palette4.className = 'color';
  event.target.className = 'color selected';
}

function setSelected() {
  colorPalette.addEventListener('click', selectPalette);
}

function eraseAll() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function eraseScrean() {
  btnErase.addEventListener('click', eraseAll);
}


makePixels();
colorizePixels();
setSelected();
eraseScrean();
setNumbersOfSquares();
