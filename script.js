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

function createColorBlocks() {
  let numberOfColors = 4;
  for (let index = 0; index < numberOfColors; index += 1) {
    let colorBlock = document.createElement('div');
    colorBlock.className = 'color';
    let palette = document.querySelector('#color-palette');
    palette.appendChild(colorBlock);
  }
}

function colorPick(index) {
  if (index === 0) {
    colorBlock.style.backgroundColor = 'black';
  } else {
    switch (index) {
      case 1:
        colorBlock.style.backgroundColor = 'salmon';
        break;
      case 2:
        colorBlock.style.backgroundColor = 'coral';
        break;
      case 3:
        colorBlock.style.backgroundColor = 'crimson';
    }
     
  }
}

window.onload = function() {
  createHeader();
  createMain();
  createPalette();
  createColorBlocks();
}
