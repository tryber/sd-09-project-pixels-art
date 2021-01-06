const boxColor = document.getElementsByClassName('color');
boxColor[0].style.backgroundColor = 'black';
boxColor[1].style.backgroundColor = 'cyan';
boxColor[2].style.backgroundColor = 'magenta';
boxColor[3].style.backgroundColor = 'yellow';

const pixelBoard = document.querySelector('#pixel-board');

for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelBoard.appendChild(pixelCell);
  }
  pixelBoard.appendChild(document.createElement('br'));
}

window.onload = onLoadFunction;

let selectedColor = '';

function onLoadFunction() {
  selectedColor = boxColor[0].style.backgroundColor;
  boxColor[0].className = 'color selected';
}

const colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', colorSelector);

function colorSelector(originEvent) {
  for (let index = 0; index < boxColor.length; index += 1) {
    boxColor[index].className = 'color';
  }
  selectedColor = originEvent.target.style.backgroundColor;
  originEvent.target.className = 'color selected';
}

pixelBoard.addEventListener('click', pixelColor);

function pixelColor(originEvent) {
  originEvent.target.style.backgroundColor = selectedColor;
}
