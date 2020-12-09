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

// Step 4 & 5
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

function setNewMatrix() {
  const myButton = document.querySelector('#generate-board');
  const inputNumber = document.querySelector('#board-size');
  myButton.addEventListener('click', () => {
    const maxNumberOfPixels = Number(inputNumber.value**2);
    removePixelBoard(maxNumberOfPixels);
    fillPixelBoard(maxNumberOfPixels);
    changePixelColor();
    selectColor();
    resetButton();
  });
}

setNewMatrix();

function fillPixelBoard(maxNumberOfPixels) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let pixelIndex = 0; pixelIndex < maxNumberOfPixels; pixelIndex += 1) {
    pixelBoard.appendChild(createPixel('pixel'));
  }
}

function removePixelBoard(maxNumberOfPixels) {
  const pixel = document.querySelectorAll('.pixel')
  if (pixel.length > maxNumberOfPixels) {
    maxNumberOfPixels = pixel.length
  }
  for (let pixelIndex = 0; pixelIndex < maxNumberOfPixels; pixelIndex += 1) {
    if (pixel[pixelIndex]) {
      pixel[pixelIndex].remove();
    }
  }
}

// Step 6 & 7
function selectColor() {
  const myColors = document.querySelectorAll('.color');
  let colorSelected = myColors[0];
  for (const color of myColors) {
    color.addEventListener('click', (event) => {
      colorSelected.className = 'color';
      event.target.className = 'color selected';
      return (colorSelected = event.target);
    });
  }
}

// Step 8
function changePixelColor() {
  const myPixelArray = document.querySelectorAll('.pixel');
  for (const pixel of myPixelArray) {
    pixel.addEventListener('click', (event) => {
      const colorSelected = document.getElementsByClassName('color selected')[0].style.background;
      return (event.target.style.background = colorSelected);
    });
  }
}

// Step 9
function resetColors(pixelArray) {
  for (const pixel of pixelArray) {
    pixel.style.background = 'white';
  }
}

function resetButton() {
  const myButton = document.querySelector('#clear-board');
  const pixelArray = document.querySelectorAll('.pixel');
  myButton.addEventListener('click', () => {
    resetColors(pixelArray);
  });
}
