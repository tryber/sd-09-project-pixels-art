window.onload = function() {
  let div_colorPalette = document.querySelector('#color-palette');
  let div_matriz = document.querySelector('#pixel-board');
  let paletteColors = ['black', 'red', 'green', 'blue'];
  let pincelColor = 'black';
  let entrada = 5;
  // div_matriz.style.width = (entrada*40);
  function createDivsRowsColumns(entrada) {
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
  createDivsRowsColumns(entrada)
  // console.log(div_colorPalette);
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

  console.log(div_colorPalette);
  console.log(div_matriz);

  div_matriz.addEventListener('click', colorize);

  function colorize(event) {
    let targ = event.target;
    targ.style.backgroundColor = pincelColor;
    // console.log(targ.style.backgroundColor);
  }

  div_colorPalette.addEventListener('click', colorCapture);

  function colorCapture(event) {
    let capturedColor = event.target;
    let color = capturedColor.style.backgroundColor;
    pincelColor = color;
    // pincelColor.style.backgroundColor = capturedColor.style.backgroundColor;
    console.log(color);
  }


}

// div.addEventListener('click', colorize(i,j));


