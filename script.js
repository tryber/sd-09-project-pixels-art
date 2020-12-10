const color = 'rgb(0 , 0 , 0)';

function aleatoryColor() {
  let newColor = 'rgb(';
  newColor += `${Math.round(Math.random() * 255)} , `;
  newColor += `${Math.round(Math.random() * 255)} , `;
  newColor += `${Math.round(Math.random() * 255)})`;
  return newColor;
}

function createPalette(numberOfColors) {
  for (let index = 0; index < numberOfColors; index += 1) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    document.getElementsByClassName('color-palette')[0].appendChild(paletteColor);
    const allPaletColors = document.querySelectorAll('.color');
    if (index === 0) {
      allPaletColors[0].style.backgroundColor = color;
      allPaletColors[0].className += ' selected';
    } else {
      allPaletColors[index].style.backgroundColor = aleatoryColor();
    }
  }
}

function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.className = 'clear';
  button.id = 'clear-board';
  document.querySelector('.button-place').appendChild(button);
}

function pixelBoard(matrix) {
  for (let index = 0; index < matrix; index += 1) {
    const pixelsLine = document.createElement('div');
    pixelsLine.className = 'pixel-line';
    document.getElementsByClassName('pixel-board-inside')[0].appendChild(pixelsLine);
    for (let index2 = 0; index2 < matrix; index2 += 1) {
      const pixelsColumn = document.createElement('div');
      pixelsColumn.className = 'pixel';
      document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
    }
  }
}

function paint(coloring) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  coloring.target.style.backgroundColor = selectedColor;
}

function theColors() {
  const colors = document.querySelectorAll('.color');
  function changeColor(event) {
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].className = 'color';
    }
    event.target.className = 'color selected';
  }
  document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', changeColor);
  });
}

function clearning() {
  const onclickPixelBoard = document.getElementsByClassName('pixel-board-inside')[0];
  onclickPixelBoard.addEventListener('click', paint);
  const clear = document.querySelectorAll('.pixel');
  function cleaner() {
    for (let index = 0; index < clear.length; index += 1) {
      clear[index].style.backgroundColor = 'white';
    }
  }
  document.getElementsByClassName('clear')[0].addEventListener('click', cleaner);
}

window.onload = function start() {
  createPalette(4);
  createButton();
  pixelBoard(5);
  theColors();
  clearning();
};
