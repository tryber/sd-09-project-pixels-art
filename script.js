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
  const PaletaDeCores = document.querySelector('#clear-board')
  const createButton = document.createElement('button');
  PaletaDeCores.appendChild(createButton);
  createButton.innerText = 'Limpar'
  createButton.id = 'clear-board'
  const PixelBoard = document.querySelectorAll('.pixel')
  let clearButton = document.querySelector('#clear-board')
  clearButton.addEventListener('click', function() {
    for (let index = 0; index < PixelBoard.length; index += 1) {
      PixelBoard[index].style.backgroundColor = 'white'
    }
  })
  console.log(document.querySelectorAll('.pixel'))
}
cleanPixelBoard ();