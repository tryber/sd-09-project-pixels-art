window.onload = function start() {
  let color = 'rgb(0 , 0 , 0)';

  function aleatoryColor() {
    let newColor = 'rgb(';
    newColor += `${Math.round(Math.random() * 255)} , `;
    newColor += `${Math.round(Math.random() * 255)} , `;
    newColor += `${Math.round(Math.random() * 255)})`;
    return newColor;
  }

  function createPalette(numberOfColors) {
    for (let index = 0; index < numberOfColors; index += 1) {
      const paletteColor = document.createElement('div');
      paletteColor.className = 'color';
      document.getElementsByClassName('color-palette')[0].appendChild(paletteColor);
      const allPaletColors = document.querySelectorAll('.color');
      if (index === 0) {
        allPaletColors[0].style.backgroundColor = color;
        allPaletColors[0].className += ' selected';
      } else {
        allPaletColors[index].style.backgroundColor = aleatoryColor();
      }
    }
  }

  createPalette(4);

  function pixelBoard(matrix) {
    for (let index = 0; index < matrix; index += 1) {
      const pixelsLine = document.createElement('div');
      pixelsLine.className = 'pixel-line';
      document.getElementsByClassName('pixel-board-inside')[0].appendChild(pixelsLine);
      for (let index2 = 0; index2 < matrix; index2 += 1) {
        const pixelsColumn = document.createElement('div');
        pixelsColumn.className = 'pixel';
        document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
      }
    }
  }

  pixelBoard(5);

  function paint(coloring) {
    coloring.target.style.backgroundColor = color;
  }

  const onclick = document.getElementsByClassName('pixel-board-inside')[0];
  onclick.addEventListener('click', paint);
};
