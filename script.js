  const paletteBox = 4;
  const linhas = 5;

  // cria todas as caixas da linha
  function createBoxes(number) {
    for (let index = 0; index < number; index += 1) {
      if (number === 4) {
        createBoxPalette(number[index]);
      } else {
        createBoxLine(number[index]);
      }
    }
  }

  // cria uma caixa para palette
  function createBoxPalette() {
    const searchPalette = document.querySelector('#color-palette');
    const box = document.createElement('div');
    box.className = 'color box';

    searchPalette.appendChild(box);
    box.addEventListener('click', paintPixel);
    return box;
  }

  // criando uma caixa para linha
  function createBoxLine(pixelBoard) {
    const searchPixel = document.querySelector('#pixel-board');
    const line = document.createElement('tr');
    searchPixel.appendChild(line);
    for (let index = 0; index < 5; index += 1) {
      const box = document.createElement('td');
      box.className = 'pixel';
      line.appendChild(box);
      box.addEventListener('click', paintPixel);
    }
  }

  // pinta as caixas da paleta
  function paintingPalette() {
    const palette = document.querySelectorAll('div.color');
    let colorBlack = palette[0];
    colorBlack.style.backgroundColor = 'black';

    let colorGreen = palette[1];
    colorGreen.style.backgroundColor = 'green';

    let colorRed = palette[2];
    colorRed.style.backgroundColor = 'red';

    let colorBlue = palette[3];
    colorBlue.style.backgroundColor = 'blue';
  }

  createBoxes(paletteBox);
  createBoxes(linhas);
  paintingPalette();

  function paintPixel(event) {
    const targ = event.target;
    console.log(targ);
  }

  window.addEventListener('load', function (event) {
    const selected = document.querySelector('.color.box');
    /*selected.style.border = '3px solid black';
    selected.style.heigth = '60px';
    selected.style.width = '50px';*/
    return selected;
  });

  const deselected = document.querySelector('.color.box');

  function deselect() {
    deselected.style.border = '1px solid black';
    deselected.style.heigth = '40px';
    deselected.style.width = '40px';
    return deselected;
  }
  deselected.addEventListener('click', deselect);
