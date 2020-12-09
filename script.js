const blackColor = document.querySelector('#black');
const redColor = document.querySelector('#red');
const cyanColor = document.querySelector('#cyan');
const yellowColor = document.querySelector('#yellow');

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
}
function clickColor() {
  const squade = document.querySelector('#color-palette');
  squade.addEventListener('click', selectedClass);
}

function clearbutton() {
  const buttonClear = document.createElement('button');
  const pixelBoard = document.querySelector('#button-container');
  buttonClear.innerText = 'Clear';
  pixelBoard.appendChild(buttonClear);
}

window.onload = function () {
  palletColor();
  clickColor();
  clearbutton();
};
