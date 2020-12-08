window.onload = function () {
  document.querySelector('#color1').className += ' selected';
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = 'red';
  document.querySelector('#color3').style.backgroundColor = 'green';
  document.querySelector('#color4').style.backgroundColor = 'blue';
};
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('.colorPalette')
const palette1 = document.querySelector('#color1');
const palette2 = document.querySelector('#color2');
const palette3 = document.querySelector('#color3');
const palette4 = document.querySelector('#color4');

function makeLinePixels(line) {
  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
}

function makePixels() {
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    makeLinePixels(pixelLine);
    pixelLine.className = 'linePixel';
    pixelBoard.appendChild(pixelLine);
  }
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

makePixels();
colorizePixels();
setSelected();
