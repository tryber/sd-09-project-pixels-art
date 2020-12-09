window.onload = function () {
  const colorsId = ['black', 'red', 'yellow', 'green'];

  function selectColor (event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    const currentColor = event.target;
    currentColor.classList.add('selected');
  }
  
  function createPaletteColor () {
    const colorPalette = document.getElementById('color-palette');

    for (let index = 0; index < colorsId.length; index += 1) {
      let colorBox = document.createElement('div');
      if (index === 0) {
        colorBox.classList.add('box', 'color', 'selected');
      } else {
        colorBox.classList.add('box', 'color');
      }
      colorBox.id = colorsId[index];
      colorBox.addEventListener('click', selectColor);
      colorPalette.appendChild(colorBox);
    }
  }

  function createPixelBoard () {
    const boardSize = 5;
    const colorPalette = document.getElementById('pixel-board');

    for (let index = 0; index < boardSize; index += 1) {
      const row = document.createElement('div');
      row.className = 'row';
      colorPalette.appendChild(row);
    }

    const boardRow = document.getElementsByClassName('row');

    for (let indexWidth = 0; indexWidth < boardRow.length; indexWidth += 1) {
      for (let indexHeight = 0; indexHeight < boardRow.length; indexHeight += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('box', 'pixel');
        boardRow[indexWidth].appendChild(pixel);
      }
    }
  }

  createPaletteColor();
  createPixelBoard();
};
