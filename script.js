const pixelBoard = document.querySelector('#pixel-board');
const colorPaletteOne = document.querySelector('#color-one').style.backgroundColor = 'black';
const numberPixel = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');

function colorRandom() {
  let random = 'rgb('
  random += `${Math.ceil(Math.random() * 255)}, `;
  random += `${Math.ceil(Math.random() * 255)}, `;
  random += `${Math.ceil(Math.random() * 255)}) `;
  return random;
}
colorRandom()

function colorPalette() {
  document.querySelector('#color-two').style.backgroundColor = colorRandom();
  document.querySelector('#color-three').style.backgroundColor = colorRandom();
  document.querySelector('#color-four').style.backgroundColor = colorRandom();
}
colorPalette()

function maxPixel() {
  let number = numberPixel.value
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50
  }
  createdPixelColumn(number)
}


function createdPixelLine(line, number) {
  for (let index = 0; index < number; index += 1) {
    const createdElement = document.createElement('div');
    createdElement.className = 'pixel';
    line.appendChild(createdElement);
  }
}

function createdPixelColumn(number) {
  console.log(number)
  for (let index = 0; index < number; index += 1) {
    const line = document.createElement('div');
    pixelBoard.appendChild(line, number);
    line.className = 'line';
    createdPixelLine(line);
  }
}

const paletteColor = document.querySelector('#color-palette').children;

function clickPaletteColor() {
  for (let index = 0; index < paletteColor.length; index += 1) {
    paletteColor[index].addEventListener('click', function (event) {
      const change = document.querySelector('.selected');
      change.className = 'color';
      event.target.className = 'color selected';
    });
  }
}


function fillColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      const selectedClass = document.querySelector('.selected');
      const colorSelected = selectedClass.style.backgroundColor;

      event.target.style.backgroundColor = colorSelected;
    });
  }
}

function createButtonClearAllColor() {
  let buttonClearAllColor = document.createElement('button');
  let containerButton = document.querySelector('.container-button')
  buttonClearAllColor.id = 'clear-board'
  buttonClearAllColor.innerText = 'Limpar'
  containerButton.appendChild(buttonClearAllColor)
}

function usingButtonClearAllColor() {
  const pixel = document.querySelectorAll('.pixel');
  let buttonClear = document.querySelector('#clear-board')
  buttonClear.addEventListener('click', function () {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white'
    }
  })
}
