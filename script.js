function colorPalette() {
  const color = document.querySelectorAll('.color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'steelblue';
  color[2].style.backgroundColor = 'red';
  color[3].style.backgroundColor = 'yellow';
}

const pixelBoard = document.querySelector('#pixel-board');

function createdPixelLine(line) {
  for (let index = 0; index < 5; index += 1) {
    const createdElement = document.createElement('div');
    createdElement.className = 'pixel';
    line.appendChild(createdElement);
  }
}

function createdPixelColumn() {
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
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

window.onload = function () {
  colorPalette();
  createdPixelColumn();
  clickPaletteColor();
  clickPaletteColor();
  fillColor();
  createButtonClearAllColor();
  usingButtonClearAllColor();
};
