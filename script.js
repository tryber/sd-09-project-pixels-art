const pixelBoard = document.querySelector('#pixel-board');
//black color pre selection
let sselectedColor = 'black';

function allColors() {
  let singColor = '(';
  singColor = `yellow`;
  singColor = `blue`;
  singColor = `red`;
  
  return singColor;
}

// change background color of all color palette squares
function palletColor() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#YellowColor').style.backgroundColor = `yellow`
  document.querySelector('#blueColor').style.backgroundColor = `blue`
  document.querySelector('#RedColor').style.backgroundColor = `red`
}

function selectedClass(event) {
  const selClass = document.querySelector('.selected');
  selClass.className = 'color';
  event.target.className = 'color selected';
  sselectedColor = event.target.style.backgroundColor;
}
//monitors the palette selection click
function clickOnColor() {
  const clickEv = document.querySelector('#color-palette');
  clickEv.addEventListener('click', selectedClass);
}

function backgroundColorChange(event) {
  event.target.style.backgroundColor = sselectedColor;
}
//paint a square with a click
function paintSquare() {
  pixelBoard.addEventListener('click', backgroundColorChange);
}

//notwithstanding the size of painted pictures, it is clean, that is, it makes the white background standard when the function is activated
function clearPixel() {
  const px = document.querySelectorAll('.pixel');
  for (let fill = 0; fill < px.length; fill += 1) {
    px[fill].style.backgroundColor = 'white';
  }
}

//Button connected to the function "clearPixel" calls it and clears everything.
function clearButton() {
  const buttonCreate = document.createElement('button');
  const buttoncontainer = document.querySelector('#button-container');
  buttonCreate.id = 'clear-board';
  buttonCreate.innerText = 'LIMPAR';
  buttonCreate.addEventListener('click', clearPixel);
  buttoncontainer.appendChild(buttonCreate);
}
//Functions to be called as soon as the page is open or updated
window.onload = function () {
  palletColor();
  clickOnColor();
  paintSquare();
  clearButton();
};