window.onload = function() {
  const colorSelected = document.querySelector('.black');
  colorSelected.classList.add('selected');
}

const getColorPalette = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < colors.length; index += 1){
  let colorsPalette = document.createElement('div');
  colorsPalette.className = 'color ' + colors[index];
  getColorPalette.appendChild(colorsPalette);
}
const getBlackSlotOnPalette = document.querySelector('.black');
const getRedSlotOnPalette = document.querySelector('.red');
const getGreenSlotOnPalette = document.querySelector('.green');
const getBlueSlotOnPalette = document.querySelector('.blue');
getBlackSlotOnPalette.style.backgroundColor = 'black';
getRedSlotOnPalette.style.backgroundColor = 'red';
getGreenSlotOnPalette.style.backgroundColor = 'green';
getBlueSlotOnPalette.style.backgroundColor = 'blue';

function printPixelsFrame() {
  let getPixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < 5; line += 1) {
    let createDivLine = document.createElement('div');
    for (let column = 0; column < 5; column += 1) {
      let createDivColumns = document.createElement('div');
      createDivColumns.className = 'pixel';
      createDivLine.appendChild(createDivColumns);
    }
    getPixelBoard.appendChild(createDivLine);
  }
}
printPixelsFrame();

function changeColorSelected() {
  let getColors = document.querySelector('#color-palette');
  getColors.addEventListener('click', function(event) {
    let getSelectedColor = document.querySelector('.selected');
    getSelectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
changeColorSelected();

function changePixelColor() {
  let getPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', function() {
      let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
      getPixels[index].style.backgroundColor = selectedColor;
    });
  }
}
changePixelColor();

function clearPixelsBoard() {
  let getClearButton = document.querySelector('#clear-board');
  getClearButton.addEventListener('click', function() {
    let getPixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < getPixelBoard.length; index += 1) {
      getPixelBoard[index].style.backgroundColor = 'white';
    }
  })
}
clearPixelsBoard();
