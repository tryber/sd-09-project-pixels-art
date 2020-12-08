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

function getSelectedColor() {
  for (let index = 0; index < 4; index += 1) {
    const getColorPallete = document.querySelectorAll('.color')[index];
    getColorPallete.addEventListener('click', changeSelectedColor);
  }
}

function changeSelectedColor(event) {
  const getOldSelectedColor = document.querySelector('.selected');
  let x = event.target;
  
  if (x !== getOldSelectedColor){
    console.log(x);
    getOldSelectedColor.classList.remove('selected');
    console.log(x);
    x.classList.add('selected');
    console.log(x);
  }
}

getSelectedColor();

//adicionar eventos ao quadrado:

/*
function pixelEvents() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.addEventListener('click' falta criar a funçao para pintar)
  }
}
*/

//colorir quadrados:



//limpa todos os quadrados:

function clearAllPixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.style.backgroundColor = 'white';
  }
}

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAllPixels);
