function addColors() {
  const getColor1 = document.querySelector('#color-palette');
  const getColor2 = document.querySelector('#color-palette');
  const getColor3 = document.querySelector('#color-palette');
  const getColor4 = document.querySelector('#color-palette');

  const colorOne = document.createElement('div');
  const colorTwo = document.createElement('div');
  const colorThree = document.createElement('div');
  const colorFour = document.createElement('div');

  colorOne.className = 'color';
  colorOne.style.background = 'black';
  colorTwo.className = 'color';
  colorThree.className = 'color';
  colorFour.className = 'color';

  getColor1.appendChild(colorOne);
  getColor2.appendChild(colorTwo);
  getColor3.appendChild(colorThree);
  getColor4.appendChild(colorFour);
}
addColors();

function addPixels() {
  const getPixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.innerHTML = 'Vivo?';
    pixel.className = 'pixel';
    getPixelBoard.appendChild(pixel);
  }
}
addPixels();

function rgbGenerate() {
  const red = Math.round((Math.random() * 255));
  const green = Math.round((Math.random() * 255));
  const blue = Math.round((Math.random() * 255));
  return `rgb(${red}, ${green}, ${blue})`;
}
rgbGenerate();

function paintPaletteColor() {
  const palette = document.querySelectorAll('.color');
  for (let index = 1; index <= palette.length - 1; index += 1) {
    palette[index].style.backgroundColor = rgbGenerate();
  }
}
paintPaletteColor();

function pixelWhiteColor() {
  const getPixel = document.querySelectorAll('#pixel-board>.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    const addWhiteColor = getPixel[index];
    addWhiteColor.style.background = 'rgb(255, 255, 255)';
  }
}
pixelWhiteColor();

function selectColorPalette() {
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      let element = colors[0];
      while (element) {
        if (element.className === 'color selected') {
          element.classList.remove('selected');
        }
        element = element.nextElementSibling;
  }
      event.target.classList.add('selected');
      sessionStorage.setItem('color', colors[index].style.backgroundColor);
    });
  }
}
selectColorPalette();

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      event.target.style.backgroundColor = sessionStorage.color;
    });
  }
}
paintPixel();

function clearPixels() {
    const btnClear = document.querySelector('#clear-board');
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      btnClear.addEventListener('click', function () {
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
      });
    }
  }
clearPixels();
