function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(header);
  header.appendChild(title);
}

function createMain() {
  const main = document.createElement('main');
  document.body.appendChild(main);
}

function createPalette() {
  const palette = document.createElement('div');
  palette.id = 'color-palette';
  const main = document.querySelector('main');
  main.appendChild(palette);
}

function createColorBlocks() {
  const numberOfColors = 4;
  for (let index = 0; index < numberOfColors; index += 1) {
    const colorBlock = document.createElement('div');
    const palette = document.querySelector('#color-palette');
    colorBlock.className = 'color';
    if (index === 0) {
      colorBlock.style.backgroundColor = 'black';
      colorBlock.classList.add('selected');
    } else {
        switch (index) {
          case 1:
            colorBlock.style.backgroundColor = 'salmon';
            break;
          case 2:
            colorBlock.style.backgroundColor = 'coral';
            break;
          case 3:
            colorBlock.style.backgroundColor = 'crimson';
            break;
          default:
            // do nothing
        }
      }
    palette.appendChild(colorBlock);
  }
}

function createPixelBoard() {
  const pixelBoard = document.createElement('div');
  const main = document.querySelector('main');
  pixelBoard.id = 'pixel-board';
  main.appendChild(pixelBoard);
}

function createPixel() {
  const numberOfPixels = 25;
  for (let index = 0; index < numberOfPixels; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(pixel);
  }
}

function colorSelect(evt) {
  let  evtId = evt.target.id;
  if (evtId !== 'color-palette') {
  const pastSelected = document.querySelector('.selected');
  pastSelected.className = 'color'; 
  evt.target.className = 'color selected';
  }
}

function paint(evt) {
  const pastSelected = document.querySelector('.selected');
  let evtColor = evt.target;
  evtColor.style.backgroundColor = pastSelected.style.backgroundColor;

}

window.onload = function () {
  createHeader();
  createMain();
  createPalette();
  createColorBlocks();
  createPixelBoard();
  createPixel();
  const palette = document.querySelector('#color-palette');
  palette.addEventListener('click', colorSelect);
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paint);
};
