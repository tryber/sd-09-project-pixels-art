// Step 2 & 3
function setPalletColors() {
  const color1 = document.querySelector('.color');
  const color2 = color1.nextElementSibling;
  const color3 = color2.nextElementSibling;
  const color4 = document.querySelector('#color-palette').lastElementChild;

  color1.style.background = 'black';
  color2.style.background = 'darkorange';
  color3.style.background = 'darkviolet';
  color4.style.background = 'deepskyblue';
}

setPalletColors();

// Step 4
function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.className = className;
  return pixel;
}

function createPixelBoard(idName) {
  const pixelBoard = document.createElement('div');
  pixelBoard.id = idName;
  return document.body.appendChild(pixelBoard);
}

createPixelBoard('pixel-board');

function fillPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const maxNumberOfPixels = 25;
  for (let pixelIndex = 0; pixelIndex < maxNumberOfPixels; pixelIndex += 1) {
    pixelBoard.appendChild(createPixel('pixel'));
  }
}

fillPixelBoard();
