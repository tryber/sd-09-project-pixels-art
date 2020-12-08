const reedColors = document.querySelectorAll('#color-palette>div');
const boardOfPixel = document.querySelector('#pixel-board');

function coloPalette() {
    reedColors[0].style.backgroundColor = 'black';
    reedColors[1].style.backgroundColor = 'red';
    reedColors[2].style.backgroundColor = 'green';
    reedColors[3].style.backgroundColor = 'blue';
}
coloPalette();

function GeneratePixelBoard() {
  for (let index = 0; index < 25; index += 1) {
  const divPixels = document.createElement('div');
  divPixels.className = 'pixel';
  boardOfPixel.appendChild(divPixels)
  }
}
GeneratePixelBoard()