  const paletteBox = 4;

  // cria as caixas de paletas
  function createColumnPalette(number) {
    for (let index = 0; index < number; index += 1) {
      createBoxPalette(number[index]);

    }
  }
  // cria uma caixa para palette
  function createBoxPalette() {
    const searchPalette = document.querySelector('#color-palette');
    const box = document.createElement('div');
    box.className = 'color box';

    searchPalette.appendChild(box);
    // box.addEventListener('click', paintPixel);
    return box;
  }

  function buttonClean() {
    let newButton = document.querySelector('#clear-board');
    newButton.id = 'clear-board';
    newButton.innerHTML = 'Limpar';
    newButton.style.margin = '0 0 3px 0';
  }
  buttonClean();

  const searchPixel = document.querySelector('#pixel-board');
  // criando linhas para o quadro
  for (let lines = 0; lines < 5; lines++) {
    let line = document.createElement('tr');
    searchPixel.appendChild(line);
  // criando colunas para as linhas
    for (let columns = 0; columns < 5; columns++) {
      let column = document.createElement('td');
      column.className = 'pixel';
      line.appendChild(column);
      // line.addEventListener('click', paintPixel);
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

  createColumnPalette(paletteBox);
  paintingPalette();

  window.addEventListener('load', function (event) {
    const selected = document.querySelector('.color.box');
    selected.className = 'color box selected';
    return selected;
  });

  function selectedBoxColor() {
    let colorBox = document.querySelector('#color-palette').childNodes;
    for (let index = 0; index < colorBox.length; index++) {
      const elemento = colorBox[index];
      elemento.addEventListener('click', function(event){
        pegaItem()
        event.target.classList.toggle('selected');
      });
    }
  }
  selectedBoxColor();
  
  function pegaItem() {
    let colorBox = document.querySelector('#color-palette').childNodes;
    for (let index = 0; index < colorBox.length; index++) {
      const elemento = colorBox[index];
      if (elemento.classList.contains('selected')) {
        
        elemento.classList.remove('selected');
      }
    }
  }
  
  function painterBox() {
    let colorBox = document.querySelector('#color-palette').childNodes;
    let box = document.querySelectorAll('.pixel');
    console.log(box);

    for (let index = 0; index < colorBox.length; index++) {
      const elementoPalete = colorBox[index];

      for (let index = 0; index < box.length; index++) {
        const elementoBox = box[index];
        elementoBox.addEventListener('click', function(event) {
          if (elementoPalete.classList.contains('selected')) {
            elementoBox.style.backgroundColor = elementoPalete.style.backgroundColor;
          }
        });
      }
    }
  }
  painterBox();

  let newButtonClean = document.querySelector('#clear-board');
  function cleanBoard() {
    let box = document.querySelectorAll('.pixel');

    for (let index = 0; index < box.length; index++) {
      const elementoBox = box[index];
      if (elementoBox.style.backgroundColor !== 'white') {
        elementoBox.style.backgroundColor = 'white';
      }
    }
  }
  newButtonClean.addEventListener('click', cleanBoard);
