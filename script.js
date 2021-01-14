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

window.onload = firstOrDefault();

// Ação de pintar
function singlePixel(clickPixel) {
  let chargedBrush = document.querySelector('.selected').classList[1];
  let selectedPixel = clickPixel.target;
  selectedPixel.style.backgroundColor = chargedBrush;
}

function paint() {
  let pixelEcran = document.getElementsByClassName('pixel');
  for(let index = 0; index < pixelEcran.length; index += 1) {
    pixelEcran[index].addEventListener('click', singlePixel);
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
let colorPallete = document.getElementsByClassName('color');
function getColor(clickButton) {
  let buttonPressed = clickButton.target;
  buttonPressed.classList.add('selected');
}

function disableColor() {
  document.querySelector('.selected').classList.remove('selected');
}

for(let index = 0; index < colorPallete.length; index += 1) {
  colorPallete[index].addEventListener('click', disableColor);
  colorPallete[index].addEventListener('click', getColor);
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
