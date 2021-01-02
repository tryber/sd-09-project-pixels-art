const colorTable = ['Gray', 'SlateBlue', 'Navy', 'DeepSkyBlue', 'SteelBlue', 'DarkTurquoise', 'DarkGreen', 'Olive', 'SaddleBrown', 'Indigo', 'HotPink', 'Red', 'Orange', 'Yellow'];
let colorPallet = ['Black'];
let colorAux;

/* Funcoes */

/* Pesquisa se a cor ja foi sorteada */
function findColor (selectedColors, sortColor) {
  let result = false;
  for (let index = 0; index < selectedColors.length; index += 1) {
    if (selectedColors[index] === sortColor) {
      result = true;
    }
  }
  return result;
}

/* Gera o pixel board */ 
function createPixelBoard(pixelsNumber){
  let pixelColumns = '';
  let pixelRows = '';
  for (let count = 0; count < pixelsNumber; count += 1) {
    pixelColumns += '41px ';
    pixelRows += '41px ';
  }
  const board = document.querySelector('#pixel-board');
  const pixelsRemove = document.querySelectorAll('.pixel');
  const mainFrame = document.querySelector('#main-frame');
  for (let indexRemove = 0; indexRemove < pixelsRemove.length; indexRemove += 1) {
    pixelsRemove[indexRemove].remove();
  }
  mainFrame.style.width = 40 * pixelsNumber + 60 + 'px';
  for (let indexPixel = 0; indexPixel < Math.pow(pixelsNumber, 2); indexPixel += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    board.appendChild(pixels);
  }
  board.style.gridTemplateColumns = pixelColumns;
  board.style.gridTemplateRows = pixelRows;
  board.style.width = 40 * pixelsNumber + 'px';
  board.style.marginLeft = 'auto';
  board.style.marginRight = 'auto';
  
}
/* Valida o tamanho do board */
function validateSize (valueSize) {
  let tempValue = valueSize;
  if (valueSize < 5) {
    tempValue = 5;
  }
  else if (valueSize > 50) {
    tempValue = 50;
  }
  return tempValue;
}
/* Inicio do programa */

const colorsPaint = document.querySelector('#color-palette');
for (let colorIndex = 1; colorIndex < 4; colorIndex += 1) {
  do {
    colorAux = colorTable[Math.floor(Math.random() * colorTable.length)];
  } while (findColor(colorPallet, colorAux));
  colorPallet.push(colorAux);
  const colors = document.createElement('div');
  colors.id = colorAux;
  colors.className = 'color';
  colors.style.backgroundColor = colorAux;
  colors.style.border = '1px solid black';
  colorsPaint.appendChild(colors);
}
colorsPaint.style.width = '260px';
colorsPaint.style.marginLeft = 'auto';
colorsPaint.style.marginRight = 'auto';

createPixelBoard(5);

/* Seleciona cor */

const selectColor = document.querySelector('#color-palette');
selectColor.addEventListener('click', function (colorBase) {
  let prevSelectColor = document.querySelector('.selected');
  prevSelectColor.className = 'color';
  colorBase.target.className += ' selected';
});

/* Pinta o pixel */

const selectPixel = document.querySelector('#pixel-board');
selectPixel.addEventListener('click', function (pixelSelected) {
  const  currentColor = document.querySelector('.selected');
  pixelSelected.target.style.backgroundColor = currentColor.id;
});

/* Limpa o pixel board */

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function (pressButton) {
  const clearPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixels.length; index += 1) {
    clearPixels[index].style.backgroundColor = 'white';
  }
});

/* Configura o pixel board */
const btnGenerate = document.querySelector('#generate-board');
const inputSize = document.querySelector('#board-size');
btnGenerate.addEventListener('click', function () {
  if (inputSize.value == '') {
    alert('Board inválido!');
  }
  else {
    let size = validateSize (inputSize.value);

    createPixelBoard(size);
  }
  inputSize.value = '';
});