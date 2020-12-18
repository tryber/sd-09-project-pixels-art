// creating squares for palette
function createPalette() {
  const palette = [1, 2, 3, 4];
  for (const _index of palette) {
    const squareColor = document.createElement('div');
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor);
  }
}
let base = 5;
const pixelBoard = document.getElementById('pixel-board');
function createBoardLine() {
  pixelBoard.innerHTML = '';
  for (let line = 0; line < base; line += 1) {
    const div = document.createElement('div');
    for (let colum = 0; colum < base; colum += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);
    }
    document.getElementById('pixel-board').appendChild(div);
  }
}
// create function to set limits on size or alert when lower or highter than choosed param
// this function set board size too
function VQV() {
  document.getElementById('generate-board');
  const inputSize = document.getElementById('board-size').value;
  if(inputSize === '') {  alert("Board inválido!");  }
  if(inputSize < 5) {  document.getElementById('board-size').value = 5;  }
  if(inputSize > 50) {  document.getElementById('board-size').value = 50; }
  base = document.querySelector('#board-size').value
  createBoardLine()
}
// creating random rgb to set on palette
function getRandomRgb() {
  const num = Math.round(0xffffff * Math.random());
  const r = num >> 8;
  const g = num >> 8 & 250;
  const b = num & 250;
  return `rgb(${r}, ${g}, ${b})`;
}
// setting colors to palette without equal colors
function paletteColors() {
  let color1 = document.querySelectorAll('.color')[1];
  let color2 = document.querySelectorAll('.color')[2];
  let color3 = document.querySelectorAll('.color')[3];
  color1.style.backgroundColor = getRandomRgb();
  color2.style.backgroundColor = getRandomRgb();
  color3.style.backgroundColor = getRandomRgb();
  if(color1 = color2 || color3 || rgb(255, 255, 255)) { color1 = getRandomRgb();  }
  if(color2 = color3 || rgb(255, 255, 255)) { color2 = getRandomRgb();  }
}
// class add and remover to setup class and get choosed color
function choosePaletteColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
//  create buttom clear for pixel board color
function buttonClear() {
  const append = document.getElementById('color-palette');
  const divButton = document.createElement('div');
  append.appendChild(divButton);  
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = 'clear-board';
  button.classList = 'allButtons';
  append.appendChild(button);
}
// add function clear to button
function clear() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].setAttribute('style', 'backgroundColor = rgb(255 , 255 , 255)');
  }
}
// created "class mover" to choose colors
function setChoosedColor() {
  const classMover = document.querySelector('.selected');
  const colorSelected = getComputedStyle(classMover);
  return colorSelected.backgroundColor;
}
//  open pixel board to accept color by class mover
function setPixelBoardColor(event) {
  const pixelColor = event.target;
  pixelColor.style.backgroundColor = setChoosedColor();
}
// create and append buttom choose size
function chooseSize() {
  const append = document.getElementById('color-palette');
  const divButton = document.createElement('div');
  append.appendChild(divButton);
  const inputNumber = document.createElement('input');
  inputNumber.setAttribute('type', 'number')
  inputNumber.setAttribute('min', 1);
  inputNumber.id = 'board-size';
  inputNumber.classList = 'allButtons';
  append.appendChild(inputNumber);
}
// create and append buttom board size
function buttonSize() {
  const append = document.getElementById('color-palette');  
  const divButton = document.createElement('div');
  append.appendChild(divButton);
  const button = document.createElement('button');
  button.innerText = 'VQV';
  button.id = 'generate-board';
  button.classList = 'allButtons';
  append.appendChild(button);
}
// function to append all listeners
function listenersOnClick() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', choosePaletteColor);
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', setPixelBoardColor);
  const buttonClearPixel = document.querySelector('#clear-board');
  buttonClearPixel.addEventListener('click', clear); 
  const buttonBoardSize = document.querySelector('#generate-board');
  buttonBoardSize.addEventListener('click', VQV);
}
// invoke assigned functions when open page
window.onload = function() {
  createPalette();
  document.querySelector('#color-palette').firstElementChild.classList.add('selected'); // aply class selected to first child
  document.querySelector('#color-palette').firstElementChild.classList.add('black'); //  aply class black to first child start with bg black
  createBoardLine();
  getRandomRgb();
  paletteColors();
  setChoosedColor();
  buttonClear();  
  chooseSize ();
  buttonSize ();
  listenersOnClick();
}
