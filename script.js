function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(header);
  header.appendChild(title);
}

function createMain() {
  const main = document.createElement('main');
  document.body.appendChild(main);
}

function createPalette() {
  const palette = document.createElement('div');
  palette.id = 'color-palette';
  const main = document.querySelector('main');
  main.appendChild(palette);
}

function createColorBlocks() {
  const numberOfColors = 4;
  for (let index = 0; index < numberOfColors; index += 1) {
    const colorBlock = document.createElement('div');
    const palette = document.querySelector('#color-palette');
    colorBlock.className = 'color';
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
              break;
            default:
              // do nothing
          }
        }
    palette.appendChild(colorBlock);
  }
}

window.onload = function () {
  createHeader();
  createMain();
  createPalette();
  createColorBlocks();
};
