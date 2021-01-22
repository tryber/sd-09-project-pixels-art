const color1 = document.getElementsByClassName('first-color')[0];
const color2 = document.getElementsByClassName('second-color')[0];
const color3 = document.getElementsByClassName('third-color')[0];
const color4 = document.getElementsByClassName('fourth-color')[0];

const paletaCores = [color1, color2, color3, color4];

//color2.style.backgroundColor = 'rgb(128, 128, 128)';

function changinColor() {
  const clrR = Math.floor(Math.random() * 256);
  const clrG = Math.floor(Math.random() * 256);
  const clrB = Math.floor(Math.random() * 256);
  const colorRGB = "rgb(" + clrR + ", " + clrG + ", " + clrB +")";
  return colorRGB;
}
//let addColor = changinColor();
//console.log(addColor, color2);
color2.style.backgroundColor = changinColor();
color3.style.backgroundColor = changinColor();
color4.style.backgroundColor = changinColor();

function selectingColor(event) {
  for (let index = 0; index < paletaCores.length; index += 1) {
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

const arrayDePixels = document.getElementsByClassName('pixel');

function paintingPixel(event) {
  const corAtual = document.querySelector('.selected');
  event.target.style.backgroundColor = getComputedStyle(corAtual).backgroundColor;
}

for (let index = 0; index < arrayDePixels.length; index += 1) {
  arrayDePixels[index].addEventListener('click', paintingPixel);
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index +=1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', clearBoard);

function createTabPixels() {
  
}
