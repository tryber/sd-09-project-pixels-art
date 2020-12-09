const blackColor = document.querySelector('#black');
const redColor = document.querySelector('#red');
const cyanColor = document.querySelector('#cyan');
const yellowColor = document.querySelector('#yellow');
let bgColor = 'black';

function palletColor() {
  blackColor.style.backgroundColor = 'black';
  redColor.style.backgroundColor = 'red';
  cyanColor.style.backgroundColor = 'cyan';
  yellowColor.style.backgroundColor = 'yellow';
}

function selectedClass(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.className = 'color';
  event.target.className = 'color selected';
  bgColor = event.target.style.backgroundColor;
}

function clickColor() {
  const squade = document.querySelector('#color-palette');
  squade.addEventListener('click', selectedClass);
}

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = bgColor;
}

function paintSquare() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', changeBackgroundColor);
}

function clearPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function button() {
  const buttonCreate = document.createElement('button');
  const buttoncontainer = document.querySelector('#button-container');
  buttonCreate.id = 'clear-board';
  buttonCreate.innerText = 'Clear';
  buttonCreate.addEventListener('click', clearPixel);
  buttoncontainer.appendChild(buttonCreate);
}

window.onload = function () {
  palletColor();
  clickColor();
  paintSquare();
  button();
};
