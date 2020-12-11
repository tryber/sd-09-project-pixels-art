const pixelBoard = document.querySelector('#pixel-board');
const colorPaletteOne = document.querySelector('#color-one').style.backgroundColor = 'black';
document.querySelector('#color-one').className = 'color selected'
const numberPixel = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const paletteColor = document.querySelector('#color-palette');
let minNumber = 5

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
maxPixel()



function createdPixelLine(number, line) {
  for (let index = 0; index < number; index += 1) {
    let createdPixel = document.createElement('div');
    createdPixel.className = 'pixel';
    line.appendChild(createdPixel);
  }
  minNumber = number;
}

function createdPixelColumn(number) {
  for (let index = 0; index < number; index += 1) {
    const line = document.createElement('div');
    createdPixelLine(number, line);
    line.className = 'line';
    pixelBoard.appendChild(line);
  }
}

function numberBoard() {
  generateBoard.addEventListener('click', clearBoard)
}
numberBoard()

function clearBoard() {
  if (numberPixel.value === '') {
    alert('Board inválido!')
  } else {
    let clearPixel = document.querySelectorAll('.line')
    for (let index = 0; index < minNumber; index += 1) {
      pixelBoard.removeChild(clearPixel[index])
    }
    maxPixel()
  }
}



function clickPaletteColor(event) {
  document.querySelector('#color-one').className = 'color'
  document.querySelector('#color-two').className = 'color'
  document.querySelector('#color-three').className = 'color'
  document.querySelector('#color-four').className = 'color'
  event.target.className = 'color selected'
}

function clickBoard() {
  paletteColor.addEventListener('click', clickPaletteColor);
}
clickBoard()

function fillColor() {
  pixelBoard.addEventListener('click', function (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  })
}
fillColor()


function createButtonClearAllColor() {
  let buttonClearAllColor = document.createElement('button');
  let containerButton = document.querySelector('.container-button')
  buttonClearAllColor.id = 'clear-board'
  buttonClearAllColor.innerText = 'Limpar'
  containerButton.appendChild(buttonClearAllColor)
}
createButtonClearAllColor()

function usingButtonClearAllColor() {
  let buttonClear = document.querySelector('#clear-board')
  buttonClear.addEventListener('click', function () {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white'
    }
  })
}
usingButtonClearAllColor()
