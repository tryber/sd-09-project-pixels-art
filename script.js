const pixelBoard = document.querySelector('#pixel-board');
console.log(pixelBoard)
let bgColor = 'black';

function randomColors() {
  let rgbColor = 'rgb(';
  rgbColor += Math.random() * 255;
  rgbColor += Math.random() * 255;
  rgbColor += Math.random() * 255;
  return rgbColor += ')';
}

function palletColor() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#colorRandom1').style.backgroundColor = randomColors();
  document.querySelector('#colorRandom2').style.backgroundColor = randomColors();
  document.querySelector('#colorRandom3').style.backgroundColor = randomColors();
}

function makingSquares() {
  for (let index = 0; index < 25; index += 1) {
    const creatSquare = document.createElement('div');
    creatSquare.classList.add('pixel');
    pixelBoard.appendChild(creatSquare);
  }
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
  buttonCreate.innerText = 'Limpar';
  buttonCreate.addEventListener('click', clearPixel);
  buttoncontainer.appendChild(buttonCreate);
}

window.onload = function () {
  palletColor();
  makingSquares();
  clickColor();
  paintSquare();
  button();

};
