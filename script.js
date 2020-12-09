const blackColor = document.querySelector('#black');
const redColor = document.querySelector('#red');
const cyanColor = document.querySelector('#cyan');
const yellowColor = document.querySelector('#yellow');
let bgColor = 'black'


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
  console.log(bgColor)
}

function clickColor() {
  const squade = document.querySelector('#color-palette');
  squade.addEventListener('click', selectedClass);
}

function paintSquare() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = bgColor;
}

function button() {
  const button = document.createElement('button');
  const buttoncontainer = document.querySelector('#button-container');
  button.id = 'clear-board';
  button.innerText = 'Clear';
  button.addEventListener('click', clearPixel)
  buttoncontainer.appendChild(button);
}

function clearPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}


window.onload = function () {
  palletColor();
  clickColor();
  paintSquare();
  button();
};
