const myPixelBoard = document.querySelector('#pixel-board');
const inputBoardSize = document.querySelector('#board-size');
let numberOfLinesAndColumns = inputBoardSize.value;
let numberOfPixels = 0;
// inicio das funções de renderização do pixel-board
function createDiv(nameOfTheClass) {
  const myDiv = document.createElement('div');
  myDiv.className = nameOfTheClass;
  if (nameOfTheClass === 'pixel') {
    numberOfPixels += 1;
    myDiv.id = `pixel-${numberOfPixels}`;
  };
  return myDiv;
};
function insertPixel(columnOfTheTable, lineOfTheLoop) {
  for (let index = 0; index < columnOfTheTable; index += 1) {
    const lineOfPixelBoard = document.querySelectorAll('.line')[lineOfTheLoop];
    lineOfPixelBoard.appendChild(createDiv('pixel'));
  };
};
function insertLine(lineOfTheTable) {
  for (let line = 0; line < lineOfTheTable; line += 1) {
    myPixelBoard.appendChild(createDiv('line'));
    insertPixel(numberOfLinesAndColumns, line);
  };
};
window.onload = function () {
  numberOfLinesAndColumns = 5;
  insertLine(numberOfLinesAndColumns);
};
// inicio das funções de renderização do pixel-board
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
let selectedColor = document.getElementsByClassName('selected')[0].innerText;
function clearTheSelection() {
  const selectedDiv = document.getElementsByClassName('selected')[0];
  if (selectedDiv) {
    selectedDiv.classList.remove('selected');
  };
};
colorPalette.addEventListener('click', function (event) {
  const generatorOfEvent = event.target;
  function insertSelectedClassAndReturnColor() {
    const selectedColoredDiv = generatorOfEvent;
    selectedColoredDiv.classList.add('selected');
    selectedColor = selectedColoredDiv.innerText;
  };
  if (generatorOfEvent.id !== 'color-palette') {
    clearTheSelection();
    insertSelectedClassAndReturnColor();
  };
});
pixelBoard.addEventListener('click', function (event) {
  const selectedId = event.target.id;
  if (selectedId !== 'pixel-board') {
    const selectedPixel = document.getElementById(selectedId);
    selectedPixel.style.background = selectedColor;
  };
});
const buttonClearAll = document.querySelector('#clear-board');
buttonClearAll.addEventListener('click', function () {
  const whiteColor = '#fff';
  const pixelsBoard = document.getElementsByClassName('pixel');
  for (let element = 0; element < pixelsBoard.length; element += 1) {
    pixelsBoard[element].style.background = whiteColor;
  };
});
const buttonGenerateCustomPixelBoard = document.querySelector('#generate-board');
buttonGenerateCustomPixelBoard.addEventListener('click', function () {
  const linesOfBoard = document.getElementsByClassName('line');
  numberOfPixels = 0;
  numberOfLinesAndColumns = inputBoardSize.value;
  if (numberOfLinesAndColumns === '') {
    alert('Board inválido!');
  } else if (5 > numberOfLinesAndColumns) {
    numberOfLinesAndColumns = 5;
    alert('Você escolheu um numero muito baixo!!\nMudamos para 5.');
  } else if (parseInt(inputBoardSize.max, 10) < numberOfLinesAndColumns) {
    numberOfLinesAndColumns = 50;
    alert('Você escolheu um numero muito alto!!\nMudamos para 50.');
  };
  while (linesOfBoard.length > 0) {
    if (numberOfLinesAndColumns === '') {
      break
    };
    linesOfBoard[0].remove();
  };
  insertLine(numberOfLinesAndColumns);
});
