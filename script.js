window.onload = function () {
  const classPixel = document.getElementsByClassName('pixel');

  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].style.backgroundColor = 'white';
  }
};

const colorBlack = document.getElementsByClassName('color black')[0];
colorBlack.className = 'color black selected';

function addPixels(size) {
  for (let index = 1; index <= size; index += 1) {
    const divPrincipal = document.createElement('div');
    const pixelBoard = document.getElementsByClassName('pixel-board')[0];
    pixelBoard.appendChild(divPrincipal);
    for (let j = 1; j <= size; j += 1) {
      const divFilha = document.createElement('div');
      divFilha.className = 'pixel';
      divPrincipal.appendChild(divFilha);
    }
  }
}

addPixels(5);

function verifySelectedClassesBlack() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className.includes('black selected')) {
      colors[index].className = 'color black';
    }
  }
}

function verifySelectedClassesLightblue() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className.includes('lightblue selected')) {
      colors[index].className = 'color lightblue';
    }
  }
}

function verifySelectedClassesMarineblue() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className.includes('marineblue selected')) {
      colors[index].className = 'color marineblue';
    }
  }
}

function verifySelectedClassesGreen() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className.includes('green selected')) {
      colors[index].className = 'color green';
    }
  }
}

const colorLightblue = document.getElementsByClassName('color lightblue')[0];
const colorMarineblue = document.getElementsByClassName('color marineblue')[0];
const colorGreen = document.getElementsByClassName('color green')[0];

function selectBlack() {
  verifySelectedClassesBlack();
  verifySelectedClassesLightblue();
  verifySelectedClassesMarineblue();
  verifySelectedClassesGreen();
  colorBlack.className = 'color black selected';
}

function selectLightblue() {
  verifySelectedClassesBlack();
  verifySelectedClassesLightblue();
  verifySelectedClassesMarineblue();
  verifySelectedClassesGreen();
  colorLightblue.className = 'color lightblue selected';
}

function selectMarineblue() {
  verifySelectedClassesBlack();
  verifySelectedClassesLightblue();
  verifySelectedClassesMarineblue();
  verifySelectedClassesGreen();
  colorMarineblue.className = 'color marineblue selected';
}

function selectGreen() {
  verifySelectedClassesBlack();
  verifySelectedClassesLightblue();
  verifySelectedClassesMarineblue();
  verifySelectedClassesGreen();
  colorGreen.className = 'color green selected';
}

colorBlack.addEventListener('click', selectBlack);
colorLightblue.addEventListener('click', selectLightblue);
colorMarineblue.addEventListener('click', selectMarineblue);
colorGreen.addEventListener('click', selectGreen);

function colorFillToBlack(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (selectedColor.className.includes('black')) {
    event.target.style.backgroundColor = 'black';
  }
}

function colorFillToLightblue(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (selectedColor.className.includes('lightblue')) {
    event.target.style.backgroundColor = 'rgb(154, 172, 192)';
  }
}

function colorFillToMarineblue(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (selectedColor.className.includes('marineblue')) {
    event.target.style.backgroundColor = 'rgb(16, 40, 72)';
  }
}

function colorFillToGreen(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (selectedColor.className.includes('green')) {
    event.target.style.backgroundColor = 'rgb(59, 113, 64)';
  }
}

function colorFill(event) {
  colorFillToBlack(event);
  colorFillToLightblue(event);
  colorFillToMarineblue(event);
  colorFillToGreen(event);
}

function addEventListenerOnPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorFill);
  }
}

addEventListenerOnPixels();
