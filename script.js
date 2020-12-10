// Variáveis Globais
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const colors = ['black'];
let colorSelected = '';
let size = 5;

function randomColor(maxSize) {
  for (let indexColor = 0; indexColor < maxSize; indexColor += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    colors.push(`rgb(${red}, ${green}, ${blue})`);
  }
  return colors;
}

// Criando Elementos via JavaScript
function addElementHTML(element, classes, parentID) {
  const elementHTML = document.createElement(element);

  for (let index = 0; index < classes.length; index += 1) {
    elementHTML.classList.add(classes[index]);
  }

  parentID.appendChild(elementHTML);
  return elementHTML;
}

// Criando Paleta de Cores
function createColorPalette(blocks) {
  colorSelected = '';
  randomColor(3);

  for (let index = 0; index < colors.length; index += 1) {
    const colorDiv = addElementHTML('div', ['block', 'color'], blocks);
    colorDiv.style.backgroundColor = colors[index];

    if (index === 0) {
      colorSelected = colors[index];
      colorDiv.classList.add('selected');
    }
  }

  return colorSelected;
}

// Removendo Classe de Cores
function removeColorClasses(pixelElement) {
  for (let indexColor = 0; indexColor < colors.length; indexColor += 1) {
    pixelElement.removeAttribute('style');
  }
}

// Criando Tabela de Pixel
function createPixelBoard(sizeGrid) {
  for (let indexLine = 0; indexLine < sizeGrid; indexLine += 1) {
    const linePixel = addElementHTML('div', ['line-pixel'], pixelBoard);

    for (let indexColumn = 0; indexColumn < sizeGrid; indexColumn += 1) {
      addElementHTML('div', ['pixel', 'block'], linePixel);
    }
  }
}

// Removendo Tabela
function removePixelBoard() {
  const qtdChildNodes = document.querySelectorAll('.line-pixel');
  for (let indexChild = 0; indexChild < qtdChildNodes.length; indexChild += 1) {
    pixelBoard.removeChild(qtdChildNodes[indexChild]);
  }
}

function delimitSize(number) {
  if (number < 5) {
    size = 5;
  } else if (number > 50) {
    size = 50;
  } else {
    size = number;
  }
}

// Estrutura
createPixelBoard(size);
colorSelected = createColorPalette(colorPalette);

// AddEventListeners
colorPalette.addEventListener('click', function (event) {
  const divSelect = event.target;
  const colorDiv = divSelect.style.backgroundColor;

  if (event.target.className !== 'color-palette') {
    for (let index = 0; index < colorPalette.children.length; index += 1) {
      colorPalette.children[index].classList.remove('selected');
    }
    divSelect.classList.add('selected');
    colorSelected = colorDiv;
  }
});

pixelBoard.addEventListener('click', function (event) {
  const classes = event.target;

  removeColorClasses(classes);

  if (classes.className !== 'line-pixel') {
    classes.style.backgroundColor = colorSelected;
  }
});

const clearButton = document.querySelector('#clear-board');
const pixelDiv = document.querySelectorAll('#pixel-board .pixel');
clearButton.addEventListener('click', function () {
  for (let index = 0; index < pixelDiv.length; index += 1) {
    removeColorClasses(pixelDiv[index]);
  }
});

const inputBoardSize = document.querySelector('#board-size');
let inputSize;
inputBoardSize.addEventListener('input', function (event) {
  inputSize = event.target.value;
});

const buttonGenerateBoard = document.querySelector('#generate-board');
buttonGenerateBoard.addEventListener('click', function () {
  if ((inputSize === undefined) || (inputSize === '')) {
    alert('Board inválido!');
  } else {
    delimitSize(inputSize);
    removePixelBoard();
    createPixelBoard(size);
  }
});
