// Variáveis Globais
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const colors = ['black', 'blue', 'pink', 'purple'];
let colorSelected = '';
let size = 5;

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

  for (let index = 0; index < colors.length; index += 1) {
    const colorDiv = addElementHTML('div', ['block', 'color', colors[index]], blocks);

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
    pixelElement.classList.remove(colors[indexColor]);
  }
}

// Criando Tabela de Pixel
function createPixelBoard(sizeGrid) {
  for (let index = 0; index < sizeGrid; index += 1) {
    const linePixel = addElementHTML('div', ['line-pixel'], pixelBoard);

    for (let index = 0; index < sizeGrid; index += 1) {
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

// Estrutura
createPixelBoard(size);
colorSelected = createColorPalette(colorPalette);

// AddEventListeners
colorPalette.addEventListener('click', function (event) {
  const divSelect = event.target;
  const colorDiv = divSelect.classList[2];

  for (let index = 0; index < colorPalette.childNodes.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }

  if (event.target.className) {
    divSelect.classList.add('selected');
    colorSelected = colorDiv;
  }
});

pixelBoard.addEventListener('click', function (event) {
  const classes = event.target;

  removeColorClasses(classes);

  if (classes.className !== 'line-pixel') {
    classes.classList.add(colorSelected);
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
let valueInput = 0;
inputBoardSize.addEventListener('input', function (event) {
  valueInput = event.target.value;
});

const buttonGenerateBoard = document.querySelector('#generate-board');
buttonGenerateBoard.addEventListener('click', function () {
  console.log(valueInput);
  if (valueInput < 0) {
    alert('Digite valores acima de 0.');
  } else if (valueInput === '') {
    alert('Board inválido!');
  } else {
    removePixelBoard();
    createPixelBoard(valueInput);
  }
});
