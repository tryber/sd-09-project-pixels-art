const color1 = document.getElementsByClassName('first-color')[0];
const color2 = document.getElementsByClassName('second-color')[0];
const color3 = document.getElementsByClassName('third-color')[0];
const color4 = document.getElementsByClassName('fourth-color')[0];

const paletaCores = [color1, color2, color3, color4];

function changinColor() {
  const clrR = Math.floor(Math.random() * 256);
  const clrG = Math.floor(Math.random() * 256);
  const clrB = Math.floor(Math.random() * 256);
  const colorRGB = "rgb(" + clrR + ", " + clrG + ", " + clrB +")";
  return colorRGB;
}

color2.style.backgroundColor = changinColor();
color3.style.backgroundColor = changinColor();
color4.style.backgroundColor = changinColor();

function selectingColor(event) {
  for (let index = 0; index < paletaCores.length; index += 1 ) {
    if (paletaCores[index].classList.contains('selected')) {
      paletaCores[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

color1.addEventListener('click', selectingColor);
color2.addEventListener('click', selectingColor);
color3.addEventListener('click', selectingColor);
color4.addEventListener('click', selectingColor);


function paintingPixel(event) {
  const corAtual = document.querySelector('.selected');
  event.target.style.backgroundColor = getComputedStyle(corAtual).backgroundColor;
}

function createListener() {
  const arrayDePixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrayDePixels.length; index += 1 ) {
    arrayDePixels[index].addEventListener('click', paintingPixel);
  }
}

createListener();

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index +=1 ) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', clearBoard);

function createTabPixels() {
  const valueFromInput = document.getElementById('board-size');
  if (valueFromInput.value === ''){
    alert('Board inválido!');
    return null;
  }
  const tabela = document.getElementById('pixel-board');
  tabela.innerHTML = '';
  for (let indexTR = 0; indexTR < valueFromInput.value; indexTR += 1) {
    const elementByTable = document.createElement('tr');
    tabela.appendChild(elementByTable);
    for (let index = 0; index < valueFromInput.value; index += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      elementByTable.appendChild(td);
    }
  }
  createListener();
}

const btGenBoard = document.getElementById('generate-board');
btGenBoard.addEventListener('click', createTabPixels);
