
  let searchPalette = document.querySelector('#color-palette');
  let searchPixel = document.querySelector('#pixel-board');
  let line = document.querySelectorAll('.line');
  let paletteBox = 4;
  let linhas = 5;

  // cria todas as caixas da linha
  function createBoxes(number) {
    for (let index = 0; index < number; index++) {
      if (number === 4) {
        createBoxPalette(number[index]);
      } else {
        createBoxLine(number[index]);
      }
    } 
  }

  // cria uma caixa para palette
  function createBoxPalette() {
    let box = document.createElement('div');
    box.className = 'color box';

    searchPalette.appendChild(box);
    box.addEventListener('click', paintPixel);
    return box;
  }

  // criando uma caixa para linha
  function createBoxLine(pixelBoard) {
    let line = document.createElement('div');
    line.className = 'pixel'
    searchPixel.appendChild(line);

    for (let index = 0; index < 5; index++) {
      let box = document.createElement('div');
      box.className = 'line';
      line.appendChild(box);
      box.addEventListener('click', paintPixel);
    }
    return line;

  }

  // pinta as caixas da paleta
  function paintingPalette() {
    let palette = document.querySelectorAll('div.color');
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
  let targ = event.target;
  
  console.log(targ);
}