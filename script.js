// Condição de inicio do quadro de pixels.
function firstOrDefault() {
  let table = document.getElementById('pixel-board');
  for(let line = 0; line < 5; line += 1) {
    let tr = document.createElement('tr');
    for(let column = 0; column < 5; column += 1) {
      let td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  paint();
}

//Condição de inicio Pallet-Color
function defaultColors() {
  let colorPalette = document.getElementById('color-palette');
  let black = document.createElement('button');
  black.classList.add('color', 'selected');
  black.style.backgroundColor = 'black'
  colorPalette.appendChild(black);
  for(let line = 0; line < 3; line += 1) {
    let btn = document.createElement('button');
    btn.classList.add('color');
    colorPalette.appendChild(btn);
  }
  let colorBtn = document.getElementsByClassName('color');
  for (let index = 1; index < colorBtn.length; index += 1) {
    let randonColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorBtn[index].style.backgroundColor = randonColor;
  }
}

window.onload = firstOrDefault(), defaultColors();

// Ação de pintar VAI MUDAR ESSA DESGRAÇA TBM!
function jetColor(clickPixel) {
  let chargedBrush = document.querySelector('.selected').style.backgroundColor;
  let selectedPixel = clickPixel.target;
  selectedPixel.style.backgroundColor = chargedBrush;
}

function paint() {
  let pixelEcran = document.getElementsByClassName('pixel');
  for(let index = 0; index < pixelEcran.length; index += 1) {
    pixelEcran[index].addEventListener('click', jetColor);
  }
}

// Gerar Quadro de Pixels
function genBoard() {
  let inputValue = document.getElementById('board-size').value;
  let table = document.getElementById('pixel-board');
  table.innerHTML = '';
  if(inputValue < 5 && inputValue > 0) {
    inputValue = 5;
  }
  else if(inputValue > 50) {
    inputValue = 50;
  }
  else if(inputValue < 0 || inputValue === '') {
    window.alert('Board inválido!');
    firstOrDefault()
  }
  for(let line = 0; line < inputValue; line += 1) {
    let tr = document.createElement('tr');
    for(let column = 0; column < inputValue; column += 1) {
      let td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  paint();
}

let btnGenBoard = document.getElementById('generate-board');
btnGenBoard.addEventListener('click', genBoard);

// Mudança na cor do pincel -- 1° desabilita seletor anterior 2° gera novo seletor
let colorPalette = document.getElementsByClassName('color');
function getColor(clickButton) {
  let buttonPressed = clickButton.target;
  buttonPressed.classList.add('selected');
}

function disableColor() {
  document.querySelector('.selected').classList.remove('selected');
}

for(let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', disableColor);
  colorPalette[index].addEventListener('click', getColor);
}

// Botão para limpar todos os pixels
let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);
function clearEcran() {
  let pixelEcran = document.getElementsByClassName('pixel')
  for(let index = 0; index < pixelEcran.length; index += 1) {
    pixelEcran[index].style.backgroundColor = 'white';
  }
}
