window.onload = function () {
};
function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  const numOfColors = 4;
  for (let index = 0; index < numOfColors; index += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    colorPalette.appendChild(color);
  }
  document.querySelector('.color').classList.add('selected');
}
function randomNumbers() {
  return Math.round(Math.random()*255)
}
function colorizePalette() {
  const paletteColor = document.querySelectorAll('.color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[2].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[3].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
}
function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  const numOfCol = 5;
  for (let line = 0; line < numOfCol; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let col = 0; col < numOfCol; col += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
}
function selectedColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      for (let others = 0; others < colors.length; others += 1) {
        colors[others].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      const classSelected = document.querySelector('.color.selected');
      const classSelectedColor = window.getComputedStyle(classSelected).getPropertyValue('background-color');
      this.style.backgroundColor = classSelectedColor;
    });
  }
}
function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  document.querySelector('#clear-board').addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
function paletteRandomizer() {
  document.querySelector('#randomize-palette').addEventListener('click', colorizePalette)
}
createPalette();
colorizePalette();
createPixelBoard();
selectedColor();
paintPixel();
clearPixelBoard();
randomNumbers();
paletteRandomizer();
