// Cria paleta com quatro cores distintas
function paletteColor() {
  const palette = document.querySelector('#color-palette');
  const color = ['black', 'blue', 'yellow', 'red'];
  for (let index = 0; index < color.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    divColor.classList.add(color[index]);
    palette.appendChild(divColor);
  }
}
paletteColor();

// Cria quadro com 25 pixels
function pixelFrame() {
  const container = document.querySelector('.container');
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.classList.add('pixel-board');
  for (let index = 1; index < 26; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
  container.appendChild(pixelBoard);
}
pixelFrame();

// Seleciona a cor
function selectColor(classElement) {
  const color = `.${classElement}`;
  const select = document.querySelector(color);
  select.classList.add('selected');
  select.style.borderRadius = '8px';
}

// Tira a seleção da cor
function stripSelection() {
  const unselect = document.querySelectorAll('.color');
  for (let index = 0; index < unselect.length; index += 1) {
    unselect[index].classList.remove('selected');
    unselect[index].style.borderRadius = '0';
  }
}

// Seleciona a cor ao clicar
function clicSelectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const colorSelect = event.target.classList;
    const cor = colorSelect[1];
    stripSelection();
    selectColor(cor);
  });
}
clicSelectColor();

// Preenche cor
function preenchimentoCor() {
  const pixelArt = document.querySelector('#pixel-board');
  pixelArt.addEventListener('click', function (event) {
    const pixelSelect = event.target.classList;
    const colorPixel = document.querySelector('.selected').classList[1];
    if(pixelSelect[1] === undefined) {
      pixelSelect.add(colorPixel);
      console.log(pixelSelect[1]);
    } else {
      pixelSelect.remove(pixelSelect[1]);
      pixelSelect.add(colorPixel);
      console.log(pixelSelect[1]);
    }
  });
}
preenchimentoCor();

// Seleciona cor inicial da paleta de cores
window.onload = function () {
  selectColor('black');
};
