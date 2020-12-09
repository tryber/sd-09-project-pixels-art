window.onload = function() {
  let div_colorPalette = document.querySelector('#color-palette');
  let div_matriz = document.querySelector('#pixel-board');
  let paletteColors = ['black', 'red', 'green', 'blue'];
  let pincelColor = 'black';

  function createDivsRowsColumns(entrada) {
    let div_matriz = document.querySelector('#pixel-board');
    while (div_matriz.firstChild) {
      div_matriz.removeChild(div_matriz.lastChild);
    }
    let heighWidth = entrada * '42';
    div_matriz.style.width = heighWidth+'px';
    div_matriz.style.height = heighWidth+'px';
    for (let i = 1; i <= entrada; i += 1) {
      for (let j = 1; j <= entrada; j += 1) {
        let div = document.createElement('div');
        div.id = `${i}x${j}`;
        div.className = 'pixel';
        div.style.backgroundColor = 'white';
        div_matriz.appendChild(div);
      }
    }
  }

  let qntColors = paletteColors.length;
  function createPalettes(qntColors) {
    for (let i = 1; i <= qntColors; i += 1) {
      let div_palette = document.createElement('div');
      div_palette.id = `div${i}`;
      div_palette.className = 'color';
      div_palette.style.backgroundColor = paletteColors[i - 1];
      div_colorPalette.appendChild(div_palette);
    }
  }
  createPalettes(qntColors);

  let btn_clear = document.querySelector('#clear-board');
  let div_black = document.querySelector('#div1');
  div_black.className = 'color selected';
  btn_clear.addEventListener('click', white);
  div_colorPalette.addEventListener('click', colorCapture);
  div_matriz.addEventListener('click', colorize);

  function colorize(event) {
    let targ = event.target;
    targ.style.backgroundColor = pincelColor;
  }
  function white() {
    let clearDivs = div_matriz.children;
    for (let i = 0; i < clearDivs.length; i += 1) {
      clearDivs[i].style.backgroundColor = 'white';
    }
  }

  function colorCapture(event) {
    let capturedColor = event.target;
    let color = capturedColor.style.backgroundColor;
    pincelColor = color;
    let selected = document.querySelector('.selected');
    selected.className = 'color';
    capturedColor.className = 'color selected';
  }

  let btn_newMatriz = document.querySelector('#generate-board');
  btn_newMatriz.addEventListener('click', imputWidth);
  function imputWidth() {
    let num = document.querySelector('#board-size').value;
    createDivsRowsColumns(num);
  }

}
