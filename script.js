// Validate color to not be white in Palette
function verifyColorWrite(sumNumbersColors, rgbArray) {
  const colorWhiteNumber = 765;
  if (sumNumbersColors === colorWhiteNumber) {
    rgbArray.pop();
    rgbArray.push(Math.random() * 255);
  }
  return rgbArray;
}

// Function of random RGB numbers for palette
function randomRgbNumberColor() {
  const numberColorsRgb = 3;
  let rgbArray = [];
  let sumNumbersColors = 0;
  for (let index = 0; index < numberColorsRgb; index += 1) {
    rgbArray.push(Math.random() * 255);
    sumNumbersColors += rgbArray[index];
    rgbArray = verifyColorWrite(sumNumbersColors, rgbArray);
  }
  return rgbArray;
}

// Put color random on the elements on palette
function randomColorsPalette(paletteColorElements) {
  paletteColorElements[0].style.backgroundColor = 'rgb(0, 0, 0)';// frist color black
  for (let index = 1; index < paletteColorElements.length; index += 1) {
    const colorNumber = randomRgbNumberColor();
    paletteColorElements[index].style.backgroundColor = `rgb(${colorNumber[0]}, ${colorNumber[1]}, ${colorNumber[2]})`;
  }
}

// Create Pixel element
function createPixelElement() {
  const pixelBoardElement = document.querySelector('#pixel-board');
  const numberOfElements = 5;
  const widthPixelBoardElement = (numberOfElements * 40) + (numberOfElements * 5);
  for (let index = 0; index < Math.pow(numberOfElements, 2); index += 1) {
    const pixelElement = document.createElement('div');
    pixelElement.className = 'pixel';
    pixelBoardElement.appendChild(pixelElement);
  }
  pixelBoardElement.style.maxWidth = `${widthPixelBoardElement}px`;
}

// Function Checks Selected Class And Remove for toggle class
function checksSelectedClassAndRemove(paletteColorElements) {
  for (let index = 0; index < paletteColorElements.length; index += 1) {
    if (paletteColorElements[index].classList.contains('selected')) {
      paletteColorElements[index].classList.remove('selected');
    }
  }
}

// Function coloring Pixel
function coloringPixel(colorSelected) {
  const pixelsElements = document.querySelectorAll('.pixel');
  pixelsElements.forEach((pixel) => {
    pixel.addEventListener('click', function () {
      pixel.style.backgroundColor = colorSelected;
    });
  });
}

// Function of selecting the desired color
function selectColorPalette(paletteColorElements) {
  coloringPixel('rgb(0, 0, 0)');
  for (let index = 0; index < paletteColorElements.length; index += 1) {
    paletteColorElements[index].addEventListener('click', function (event) {
      checksSelectedClassAndRemove(paletteColorElements);
      event.target.classList.toggle('selected');
      coloringPixel(event.target.style.backgroundColor);
    });
  }
}

function clearBoard() {
  const pixelsElements = document.querySelectorAll('.pixel');
  pixelsElements.forEach((pixel) => {
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
}

window.onload = function () {
  const paletteColorElements = document.querySelectorAll('.color');
  randomColorsPalette(paletteColorElements);
  createPixelElement();
  selectColorPalette(paletteColorElements);
  const buttonClearBoard = document.querySelector('#clear-board');
  buttonClearBoard.addEventListener('click', clearBoard);
};
