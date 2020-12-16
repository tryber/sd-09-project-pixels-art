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
    const palette = document.querySelector('#color-palette');
    const colorBlock = document.createElement('div');
    colorBlock.className = 'color';
    if (index === 0) {
      colorBlock.style.backgroundColor = 'black';
      colorBlock.classList.add('selected');
    } else {
      // Utilizei a solução de Henrique Brito para gerar aleatoriamente cores
        colorBlock.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`;
    }
    palette.appendChild(colorBlock);
  }
}

function paint(evt) {
  const pastSelected = document.querySelector('.selected');
  const evtColor = evt.target;
  evtColor.style.backgroundColor = pastSelected.style.backgroundColor;
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
  sizeButton.innerHTML = 'VQV';
  const sizeInput = document.createElement('input');
  sizeInput.id = 'board-size';
  sizeInput.type = 'number';
  sizeInput.min = '1';
  const sizeDiv = document.createElement('div');
  sizeDiv.id = 'size-container';
  sizeDiv.appendChild(sizeInput);
  sizeDiv.appendChild(sizeButton);
  main.insertBefore(sizeDiv, pixelBoard);
}

function recreatePixelBoard(userInputSize) {
  const pixelBoard = document.querySelector('#pixel-board');
  const numberOfPixels = userInputSize * userInputSize;
  const pixelbordersize = userInputSize * 2;
  const pixelside = (userInputSize * 40) + pixelbordersize;
  pixelBoard.remove();
  createPixelBoard(pixelside);
  createPixel(numberOfPixels);
}

function boardSize() {
  const sizeInput = document.querySelector('#board-size');
  let userInputSize = sizeInput.value;
  if (userInputSize === '' || userInputSize <= 0) {
    return alert('Board inválido!');
  } else if (userInputSize < 5 && userInputSize > 0) {
    userInputSize = 5;
    return recreatePixelBoard(userInputSize);
  } else if (userInputSize > 50) {
    userInputSize = 50;
    return recreatePixelBoard(userInputSize);
  } else {
    recreatePixelBoard(userInputSize);
  }
}

window.onload = function () {
  const numberOfPixels = 25;
  const pixelside = 210;
  createHeader();
  createMain();
  createPalette();
  createColorBlocks();
  createPixelBoard(pixelside);
  createPixel(numberOfPixels);
  createPixelBoardSize();
  const palette = document.querySelector('#color-palette');
  palette.addEventListener('click', colorSelect);
  createClearButton();
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clear);
  const sizeButton = document.querySelector('#generate-board');
  sizeButton.addEventListener('click', boardSize);
};
