// Grid Creation
function gridCreation(size) {
  const table = document.querySelector('.table');
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    for (let j = 0; j < size; j += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      line.appendChild(column);
    }
    table.appendChild(line);
  }
}

// Random the 4 colors
function getRandomColors() {
  return (Math.floor(Math.random()*256) + ', ' + Math.floor(Math.random()*256) + ', ' + Math.floor(Math.random()*256));
}

function defineColorsBackground() {
  const buttons = document.querySelectorAll('.color');
  buttons[0].style.backgroundColor = 'black';
  buttons[0].classList.add('selected');
  let helper = ['0, 0, 0'];
  for (let i = 1; i < buttons.length; i += 1) {
    helper[i] = getRandomColors();
    for (let j = 0; j < helper.length; j += 1) {
      if (helper[j] === helper[i]) {
        helper[i] = getRandomColors();
      }
    }
    buttons[i].style.backgroundColor = 'rgb(' + helper[i] + ')';
  }
}

// Selected Color Change
function removeSelected () {
  const buttons = document.querySelectorAll('.color');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].classList.remove('selected');
  }
};

const paletaCor = document.querySelector('#color-palette');

function mudarCorEscolhida (event) {
  if (event.target.classList.contains('color')) {
    if (event.target.className !== 'selected') {
      removeSelected();
      event.target.classList.add('selected');
    }
  }
};

paletaCor.addEventListener('click', mudarCorEscolhida);

// Put color in grid
function putColor (event) {
  let selected = document.getElementsByClassName('selected');
  if (event.target.className == 'pixel') {
    event.target.style.backgroundColor = selected[0].style.backgroundColor;
    event.target.className = 'pixel';
  }
}
const grid = document.querySelector('#pixel-board');
grid.addEventListener('click', putColor)

// Clear Button
const clearButton = document.querySelector('#clear-board');

function cleanScreen() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', cleanScreen);

window.onload = function () {
  defineColorsBackground();
  gridCreation(5);
};
