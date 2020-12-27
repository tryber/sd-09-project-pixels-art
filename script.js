function paintPixel(event) {
  event.target.style.backgroundColor = chosenColor; //refefine a cor de fundo do pixel clicado
}
function generateBoard(x) {
  for (let i = 0; i < x; i += 1) {
    const row = document.createElement('div');
    row.className = 'line';
    for (let j = 0; j < x; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixel);
      row.appendChild(pixel);
    }
  pixelRow.appendChild(row);
  }
}

function selectedColor(event) {
  const actualColor = event.target;
  const lastSelectedColor = document.querySelector('.selected');
  lastSelectedColor.classList.remove('selected');
  chosenColor = actualColor.id; // altera o valor da cor selecionada
  actualColor.classList.add('selected');
}

function startPalette() {
  const colorOptions = document.querySelectorAll('.color');
  for (let i = 0; i < colorOptions.length; i += 1) {
    colorOptions[i].addEventListener('click', selectedColor);
  }
}

function clearBoard() {
  const clearPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearPixels.length; i += 1) {
    clearPixels[i].style.backgroundColor = clearPixel;
  }
}

function deleteCanvas() {
  const canvas = document.querySelector('#pixel-board');
  const canvasRows = document.querySelectorAll('.line');
  for (let i = 0; i < canvasRows.length; i += 1) {
    canvas.removeChild(canvasRows[i]);
  }
}
function genCustomBoard(size) {
  let userInput = document.querySelector('#board-size').value;
  size = userInput;
  if (!userInput) {
    alert('Board inválido!');
  }
  if (userInput < 5) {
    userInput = 5;
  }
  if (userInput > 50) {
    userInput = 50;
  }
  if (userInput) {
    deleteCanvas();
    generateBoard(userInput);
  }
}

  // function randomColors() {
  //   let color = round(Math.random() * 255);
  //   return color;
  // }

let pixelRow = document.getElementById('pixel-board');
let chosenColor = 'black';
let clearPixel = 'white';
const genBoardButton = document.querySelector('#generate-board');
genBoardButton.addEventListener('click', genCustomBoard);
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearBoard);

window.onload = function() {
  startPalette();
  generateBoard(5);
}
