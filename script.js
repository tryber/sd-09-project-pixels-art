function createHeader() {
  let header = document.createElement('header');
  let title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(header);
  header.appendChild(title);
}

function createMain() {
  let main = document.createElement('main');
  document.body.appendChild(main);
}

function createPalette() {
  let palette = document.createElement('div');
  palette.id = 'color-palette';
  let main = document.querySelector('main')
  main.appendChild(palette);
}

function createColorBlock() {
  let colorBlock = document.createElement('div');
  colorBlock.className = 'color';
  let palette = document.querySelector('#color-palette');
  palette.appendChild(colorBlock);
}
window.onload = function() {
  createHeader();
  createMain();
  createPalette();
  createColorBlock();
}
