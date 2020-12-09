window.onload = function() {
  let div_colorPalette = document.querySelector('#color-palette');
  let div_matriz = document.querySelector('#pixel-board');
  let paletteColors = ['black', 'red', 'green', 'blue'];
  let pincelColor = 'black';
  let entrada = 5;

  function createDivsRowsColumns(entrada) {
    if(entrada >= 2 && entrada <= 10) {
      let heighWidth = entrada * '42';
      let div_matriz = document.querySelector('#pixel-board');
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
    } else {
      return console.log('Valor pode ser de 2 a 10 apenas');
    }
  }
  createDivsRowsColumns(entrada)

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

  let div_black = document.querySelector('#div1');
  div_black.className = 'color selected';
  div_colorPalette.addEventListener('click', colorCapture);
  div_matriz.addEventListener('click', colorize);

  function colorize(event) {
    let targ = event.target;
    targ.style.backgroundColor = pincelColor;
  }

  function colorCapture(event) {
    let capturedColor = event.target;
    let color = capturedColor.style.backgroundColor;
    pincelColor = color;
    let selected = document.querySelector('.selected');
    selected.className = 'color';
    capturedColor.className = 'color selected';
  }
}
