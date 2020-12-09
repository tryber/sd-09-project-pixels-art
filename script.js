window.onload = function() {
  paletteColor();
  pixelFrame();
  selectColor();
}

function paletteColor() {
  const palette = document.querySelector('#color-palette');
  const color = ['black', 'blue', 'yellow', 'red'];
  for (let index = 0; index < color.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    divColor.classList.add(color[index]);
    palette.appendChild(divColor);
  }
}

function pixelFrame() {
  const container = document.querySelector('.container');
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.classList.add('pixel-board');
  for (let index = 1; index < 26; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
  container.appendChild(pixelBoard);
}

function selectColor() {
  const select = document.querySelector('.black');
  select.classList.add('selected');
}
