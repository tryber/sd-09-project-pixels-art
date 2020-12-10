window.onload = function() {
  let div_colorPalette = document.querySelector('#color-palette');
  let div_matriz = document.querySelector('#pixel-board');
  let rgbRandom = randomColorRGB()
  let paletteColors = ['black', rgbRandom[0] , rgbRandom[1] , rgbRandom[2]];
  let pincelColor = 'black';

  function randomColorRGB() {
    let rgbArray = [];
    for (let rgb = 0; rgb < 3; rgb += 1) {
      let rgbNum = [];
      for (let i = 0; i < 3; i += 1) {
        rgbNum.push(Math.ceil(Math.random() * 256));
      }
      rgbArray.push([`rgb(${rgbNum[0]} , ${rgbNum[1]} , ${rgbNum[2]})`]);
    }
    return rgbArray;
  }

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
  createDivsRowsColumns(5);

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
    if (num === '') {
      alert('Board inválido!')
    }
    if (num < 5) {
      num = 5;
    }
    if (num > 50) {
      num = 50;
    }
    createDivsRowsColumns(num);
  }
}
