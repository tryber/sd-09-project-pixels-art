//pega o quadrado de pixel:

const pixelBoard = document.getElementById('pixel-board');

//cria os 25 pixels:

function makeLinePixels() {
  for (let index = 0; index <= 24; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
  }
}

//esta chamando a função acima:

makeLinePixels();

//mudar cor da paleta:

function changeSelectedColor(event) {
  const getOldSelectedColor = document.querySelector('.selected');
  const targetSelectedColor = event.target;
  if (targetSelectedColor !== getOldSelectedColor) {
    getOldSelectedColor.classList.remove('selected');
    targetSelectedColor.classList.add('selected');
  }
}

function getSelectedColor() {
  for (let index = 0; index < 4; index += 1) {
    const getColorPallete = document.querySelectorAll('.color')[index];
    getColorPallete.addEventListener('click', changeSelectedColor);
  }
}

getSelectedColor();

//adicionar eventos ao quadrado:


function pixelEvents() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.addEventListener('click', pixelColoring);
  }
}

function pixelColoring(event) {
  let cor = 'black';
  const getColorSelected = document.querySelector('.selected'); 

  const getClassColorsBlack = document.querySelector('.colorBlack');
  const getClassColorsRed = document.querySelector('.colorRed');
  const getClassColorsGreen= document.querySelector('.colorGreen');
  const getClassColorsYellow = document.querySelector('.colorYellow');

  const targetSelectedPixel = event.target;

  for (let index = 0; index < 4; index += 1){
    if (getColorSelected === getClassColorsBlack) {
      cor = 'black';
    } else if (getColorSelected === getClassColorsRed) {
      cor = 'red';
    } else if (getColorSelected === getClassColorsGreen) {
      cor = 'green';
    } else if (getColorSelected === getClassColorsYellow){
      cor = 'yellow';
    }
  }

  targetSelectedPixel.style.backgroundColor = cor;
}

pixelEvents();

//colorir quadrados:

//limpa todos os quadrados:

function clearAllPixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAllPixels);
