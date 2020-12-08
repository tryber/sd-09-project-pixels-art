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

//limpa todos os quadrados:
function clearAllPixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixels = document.querySelectorAll('.pixel')[index];
    getPixels.style.backgroundColor = 'white';
  }
}

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAllPixels);
