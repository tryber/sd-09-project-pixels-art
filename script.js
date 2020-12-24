window.onload = function() {
  let colorsArray = ['black', 'red', 'green', 'blue'];
  createColorPalette(colorsArray);
  createPixelBoard(5, 5);
  setSelectedClass();
};

function createColorPalette(colorsArray) {
  const colorPalette = document.querySelector('#color-palette');
  for (let color of colorsArray) {
    colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    colorPalette.appendChild(colorDiv);
    if (color === 'black') {
      colorDiv.className += ' selected';
    };
  };
};

function createPixelBoard(line, column) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < column; index += 1) {
    lineOfPixels = document.createElement('div');
    lineOfPixels.className = 'line';
    pixelBoard.appendChild(lineOfPixels);
    for (let index = 0; index < line; index += 1) {
      pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      lineOfPixels.appendChild(pixel);
    };
  };
};
