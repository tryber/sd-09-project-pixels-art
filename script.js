let inputValue = 5;
generateBoard()

function fillColorPalette() {
  const divColor = document.getElementsByClassName('color');
  divColor[0].style.backgroundColor = 'black';
  for (let index = 1; index < divColor.length; index += 1) {
    const randoRgbNumber = Math.ceil(Math.random() * 255);
    const randoRgbNumber1 = Math.ceil(Math.random() * 255);
    const randoRgbNumber2 = Math.ceil(Math.random() * 255);
    const rgb = 'rgb( '+ randoRgbNumber + ' , ' + randoRgbNumber1 + ' , ' + randoRgbNumber2 + ' )';
    divColor[index].style.backgroundColor = rgb;
  }
}
fillColorPalette();


function generateBoard() {
  for (let index = 0; index < inputValue; index += 1) {
    const divPai = document.querySelector('#pixel-board');
    const divColuna = document.createElement('div');
    divPai.appendChild(divColuna);
    divColuna.classList = 'coluna';
    for (let index2 = 0; index2 < inputValue; index2 += 1) {
      const divPixel = document.createElement('div')
      divColuna.appendChild(divPixel)
      divPixel.classList = 'pixel'
    }
  }
}

function readPixelBoardDimension() {
  const input = document.querySelector('#board-size');
  const generatorButton = document.querySelector('#generate-board');
  generatorButton.addEventListener('click', function () {
    generateBoard();
    inputValue = input.value;
    if (inputValue === '') {
      alert('Board inválido!');
    }
    generateBoard();
    cleanPixelBoard ();
  });
}
readPixelBoardDimension();

const colorPalette = document.querySelector('#color-palette');
function selectedAssigns() {
  colorPalette.addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    selected.className = 'color';
    event.target.className = 'color selected';
  })
}
selectedAssigns();

function paintDiv() {
  const pixel = document.querySelector('.linhaColunaContainer')
  pixel.addEventListener('click', function(event) {
    const selectedDiv = document.querySelector('.color.selected');
    let color = selectedDiv.style.backgroundColor;
    event.target.style.background = color;
    console.log(selectedDiv)
  })
}
paintDiv();

function cleanPixelBoard () {
  const PixelBoard = document.querySelectorAll('.pixel');
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', function() {
    for (let index = 0; index < PixelBoard.length; index += 1) {
      PixelBoard[index].style.backgroundColor = 'white';
    }
  })
}
cleanPixelBoard ()

