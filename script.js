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

function createPixelBoard(pixelside) {
  const pixelBoard = document.createElement('div');
  const main = document.querySelector('main');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.width = `${pixelside}px`;
  pixelBoard.style.height = `${pixelside}px`;
  main.appendChild(pixelBoard);
  pixelBoard.addEventListener('click', paint);
}

function createPixel(numberOfPixels) {
  for (let index = 0; index < numberOfPixels; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(pixel);
  }
}

function colorSelect(evt) {
  const evtId = evt.target.id;
  if (evtId !== 'color-palette') {
    const pastSelected = document.querySelector('.selected');
    pastSelected.className = 'color';
    evt.target.className = 'color selected';
  }
}

function paint(evt) {
  const pastSelected = document.querySelector('.selected');
  const evtColor = evt.target;
  evtColor.style.backgroundColor = pastSelected.style.backgroundColor;
}

function createClearButton() {
  // Used insertBefore documentation https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
  const pixelBoard = document.querySelector('#pixel-board');
  const clearButton = document.createElement('button');
  clearButton.id = 'clear-board';
  clearButton.innerText = 'Limpar';
  const main = pixelBoard.parentElement;
  main.insertBefore(clearButton, pixelBoard);
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function createPixelBoardSize() {
  const pixelBoard = document.querySelector('#pixel-board');
  const main = pixelBoard.parentElement;
  const sizeButton = document.createElement('input');
  sizeButton.type = 'submit';
  sizeButton.id = 'generate-board';
  sizeButton.value = 'VQV';
  const sizeInput = document.createElement('input');
  sizeInput.id = 'board-size';
  sizeInput.type = 'number';
  sizeInput.min = '5';
  sizeInput.max = '50';
  const sizeDiv = document.createElement('div');
  sizeDiv.id = 'size-container';
  sizeDiv.appendChild(sizeInput);
  sizeDiv.appendChild(sizeButton);
  main.insertBefore(sizeDiv, pixelBoard);
}

function boardSize() {
  const sizeInput = document.querySelector('#board-size');
  const pixelBoard = document.querySelector('#pixel-board');
  if (sizeInput.validity.rangeUnderflow || sizeInput.validity.rangeOverflow || sizeInput.value === '') {
    alert('Board inválido!');
  } else {
    let numberOfPixels = sizeInput.value * sizeInput.value;
    let pixelbordersize = sizeInput.value * 2;
    let pixelside = (sizeInput.value * 40) + pixelbordersize;
    pixelBoard.remove();
    createPixelBoard(pixelside);
    createPixel(numberOfPixels);
  }
}

window.onload = function () {
  let numberOfPixels = 25;
  let pixelside = 210;
  createHeader();
  createMain();
  createPalette();
  createColorBlocks();
  createPixelBoard(pixelside);
  createPixel(numberOfPixels);
  createPixelBoardSize();
  const palette = document.querySelector('#color-palette');
  palette.addEventListener('click', colorSelect);
  const pixelBoard = document.querySelector('#pixel-board');
  createClearButton();
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clear);
  const sizeButton = document.querySelector('#generate-board');
  sizeButton.addEventListener('click', boardSize);
};
