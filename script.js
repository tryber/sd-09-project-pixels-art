function rgbGenerator() {
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    rgb[index] = Math.random() * ((255 - 50) + 50);
    if (index === 2) {
      const colorValue = rgb.reduce((total, currentElement) => total + currentElement);
      if (colorValue > 150 && colorValue < 700) {
        index += 1;
      } else {
        index = 0;
      }
    }
  }
  return `rgb(${rgb[0]} , ${rgb[1]} , ${rgb[2]})`;
}

function paletteGenerator(numColors) {
  const paletteColors = document.getElementById('color-palette');
  paletteColors.style.maxWidth = `${(10 * 44)}px`;
  paletteColors.style.width = `${(numColors * 44)}px`;
  // paletteColors.style.height = 'fit-content';
  for (let index = 0; index < numColors; index += 1) {
    const makeDiv = document.createElement('div');
    if (index === 0) {
      makeDiv.className = 'color selected';
      makeDiv.style.backgroundColor = 'rgb(0 , 0 , 0)';
    } else {
      makeDiv.className = 'color';
      makeDiv.style.backgroundColor = rgbGenerator();
    }
    paletteColors.appendChild(makeDiv);
  }
}

function generateFrames(num) {
  const panel = document.body.querySelector('#pixel-board');
  panel.style.width = `${(num * 40)}px`;
  panel.style.marginTop = '5px';
  for (let index = 0; index < num; index += 1) {
    for (let indexC = 0; indexC < num; indexC += 1) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'pixel';
      panel.appendChild(emptyBox);
    }
  }
}

function selectColor() {
  function getColor(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').classList.remove('selected');
      event.target.className = 'color selected';
      const titleH1 = document.querySelector('#title');
      const rgb = document.querySelector('.selected').style.backgroundColor;
      titleH1.style.color = rgb;
      titleH1.style.border = `4px solid ${rgb}`;
    }
  }
  const coloredPalette = document.querySelector('#color-palette');
  coloredPalette.addEventListener('click', getColor);
}

function coloring(paintStyle) {
  function coloringFrame(event) {
    const rgb = document.querySelector('.selected').style.backgroundColor;
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = rgb;
    }
  }
  const emptyFrame = document.querySelector('#pixel-board');
  emptyFrame.addEventListener(paintStyle, coloringFrame);
}

function clearFrames() {
  function clear() {
    const panelToClear = document.querySelectorAll('.pixel');
    for (let index = 0; index < panelToClear.length; index += 1) {
      panelToClear[index].style.backgroundColor = 'white';
    }
  }
  const clearButton = document.querySelector('#clear-board');
  clearButton.style.display = 'inline-block';
  clearButton.innerHTML = 'Limpar';
  clearButton.addEventListener('click', clear);
}

function redefineSize() {
  function setFrames() {
    let newSize = document.getElementById('board-size').value;
    const pixelBoard = document.getElementById('pixel-board');
    if (newSize === '') {
      return alert('Board inválido!');
    }
    if (newSize < 5) {
      alert('Tamanho mínimo: 5');
      newSize = '5';
    } else if (newSize > 50) {
      alert('Tamanho Máximo: 50');
      newSize = '50';
    }
    while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild);
    }
    document.getElementById('board-size').value = newSize;
    return generateFrames(newSize);
  }
  const buttonVqv = document.getElementById('generate-board');
  buttonVqv.addEventListener('click', setFrames);
}

function eraser() {
  function eraserFrame(event) {
    event.preventDefault();
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = 'white';
    }
  }
  const coloredFrame = document.querySelector('#pixel-board');
  coloredFrame.addEventListener('contextmenu', eraserFrame);
}

window.onload = function () {
  document.querySelector('#title').style.border = '4px solid black';
  document.querySelector('#title').style.margin = '10px auto';
  document.querySelector('#title').style.padding = '0 7px';
  document.querySelector('#title').style.width = 'fit-content';
  paletteGenerator(4);
  generateFrames(5);
};
selectColor();
coloring(document.querySelector('input:checked').value);
clearFrames();
redefineSize();
eraser();
