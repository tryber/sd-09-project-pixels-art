// Variáveis Globais
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const colors = ['black', 'blue', 'pink', 'purple'];
let colorSelected = '';

// Funções
function createColorPalette(blocks) {
  colorSelected = '';

  for (let index = 0; index < colors.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('block', 'color', colors[index]);

    if (index === 0) {
      colorSelected = colors[index];
      colorDiv.classList.add('selected');
    }

    blocks.appendChild(colorDiv);
  }

  return colorSelected;
}

function createColumnPixel(repeatColumn, insertPixel) {
  for (let index = 0; index < repeatColumn; index += 1) {
    const columnPixel = document.createElement('div');
    columnPixel.className = 'pixel block';
    insertPixel.appendChild(columnPixel);
  }
}

function createLinePixel(repeatLine, repeatColumn) {
  for (let index = 0; index < repeatLine; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    pixelBoard.appendChild(linePixel);
    createColumnPixel(repeatColumn, linePixel);
  }
}

function createPixelBoard() {
  for (let index = 0; index < 5; index += 5) {
    createLinePixel(5, 5);
  }
}

function removeColorClasses(elementPixel) {
  for (let indexColor = 0; indexColor < colors.length; indexColor += 1) {
    elementPixel.classList.remove(colors[indexColor]);
  }
}

createPixelBoard();

// Estrutura
colorSelected = createColorPalette(colorPalette);

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
    console.log(classes.className);
  }
});

const clearButton = document.querySelector('#clear-board');
const pixelDiv = document.querySelectorAll('#pixel-board .pixel');
clearButton.addEventListener('click', function () {
  for (let index = 0; index < pixelDiv.length; index += 1) {
    removeColorClasses(pixelDiv[index]);
  }
});
