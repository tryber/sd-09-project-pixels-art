function createColorPalette(colorsArray) {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < colorsArray.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = colorsArray[index];
    colorPalette.appendChild(colorDiv);
    if (colorsArray[index] === 'black') {
      colorDiv.className += ' selected';
    }
  }
}
createColorPalette(['black', 'red', 'green', 'blue']);

function createPixelBoard(line, column) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let indexOfLine = 0; indexOfLine < column; indexOfLine += 1) {
    const lineOfPixels = document.createElement('div');
    lineOfPixels.className = 'line';
    pixelBoard.appendChild(lineOfPixels);
    for (let indexOfPixel = 0; indexOfPixel < line; indexOfPixel += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      lineOfPixels.appendChild(pixel);
    }
  }
}
createPixelBoard(5, 5);

function setSelectedColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.className = 'color';
      color[index].className += ' selected';
    });
  }
}
setSelectedColor();

function setPixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function () {
      const color = document.querySelector('.selected').style.backgroundColor;
      pixel[index].style.backgroundColor = color;
    });
  }
}
setPixelColor();

function clearPixelBoard() {
  const clearBoard = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');
  clearBoard.addEventListener('click', function () {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
clearPixelBoard();
