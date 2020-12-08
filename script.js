window.onload = function() {
  document.querySelector('#color1').className += ' selected';
  document.querySelector('#color1').style.backgroundColor = 'black'
  document.querySelector('#color2').style.backgroundColor = 'red'
  document.querySelector('#color3').style.backgroundColor = 'green'
  document.querySelector('#color4').style.backgroundColor = 'blue'
}
const pixelBoard = document.querySelector('#pixel-board');

function makeLinePixels(line) {
  for (let index = 0; index < 5; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel)
  }
}

function makePixels() {
  for (let index = 0; index < 5; index += 1) {
    let pixelLine = document.createElement('div');
    makeLinePixels(pixelLine);
    pixelLine.className = 'linePixel';
    pixelBoard.appendChild(pixelLine)
  }
}

function makePixelColorized(event) {
  let color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function colorizePixels() {
  pixelBoard.addEventListener('click', makePixelColorized);
}

makePixels();
colorizePixels();