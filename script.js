window.onload = function () {
  const blackPixelPalette = document.querySelector('.black');
  blackPixelPalette.className += ' selected';
};

// Pintando o pixel
function changeColor(target, pixelColor) {
  if (target.style.backgroundColor !== pixelColor) {
    target.style.backgroundColor = pixelColor;
  } else {
    target.style.backgroundColor = 'white';
  }
}

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixelClicked = pixels[index];
    pixelClicked.addEventListener('click', function (event) {
      const selectedColor = document.querySelector('.selected');
      changeColor(event.target, window.getComputedStyle(selectedColor, null).getPropertyValue('background-color'));
    });
  }
}

paintPixel();

// Selecionando a cor
function selectColor() {
  const colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.className = selectedColor.className.replace(' selected', '');
      colorPalette[index].className += ' selected';
    });
  }
}

selectColor();

// Limpar pixels
function clearingPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
function clearBoard() {
  const clearPixels = document.querySelector('#clear-board');
  clearPixels.addEventListener('click', function () {
    clearingPixels();
  });
}

clearBoard();

// Personaliza tamanho do quadro
function addPixels(sizeValue) {
  const pixelBoard = document.querySelector('#pixel-board');
  let pixels = document.querySelectorAll('.pixel');
  const pixelSize = 42;
  pixelBoard.style.width = `${sizeValue * pixelSize}px`;
  while (pixels.length < Math.pow(sizeValue,2)) {
    const newdiv = document.createElement('div');
    newdiv.className = 'pixel';
    pixelBoard.appendChild(newdiv);
    pixels = document.querySelectorAll('.pixel');
  }
}

function removePixels(sizeValue) {
  const pixelBoard = document.querySelector('#pixel-board');
  let pixels = document.querySelectorAll('.pixel');
  const pixelSize = 42;
  pixelBoard.style.width = `${sizeValue * pixelSize}px`;
  while (pixels.length > Math.pow(sizeValue,2)) {
    pixelBoard.removeChild(pixels[0]);
    pixels = document.querySelectorAll('.pixel');
  }
}

function resize(sizeValue) {
  if (sizeValue < 5) {
    sizeValue = 5;
  } else if (sizeValue > 50) {
    sizeValue = 50;
  }
  const pixels = document.querySelectorAll('.pixel');
  if (sizeValue < Math.sqrt(pixels.length)) {
    removePixels(sizeValue);
  }
  addPixels(sizeValue);
}

function checkSize(sizeValue) {
  let check = true;
  if (sizeValue === '') {
    check = false;
    alert('Board inválido!');
  } else if (isNaN(sizeValue)) {
    check = false;
    alert('Valor digitado não é um número!');
  }
  return check;
}

function startResizing(sizeValue) {
  if (checkSize(sizeValue)) {
    resize(sizeValue);
  }
}

function changeSize() {
  const changeButton = document.querySelector('#btn-change');
  changeButton.addEventListener('click', function () {
    const newSize = document.querySelector('#board-size').value;
    clearingPixels();
    startResizing(newSize);
  });
  /* const inputBox = document.querySelector('#board-size');
  inputBox.addEventListener('keyDown', function (event) {
    if (event.keyCode === 13) {
      const newSize = document.querySelector('#board-size').value;
      console.log('xablau');
      clearingPixels();
      startResizing(newSize);
    }
  }); */

}

changeSize();