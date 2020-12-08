window.onload = function () {
  const paletteColor = document.querySelector('#color-palette');
  const colorsArray = ['black', 'blue', 'green', 'red'];

  function createDivs() {
    const div = document.createElement('div');
    return div;
  }

  function addColorSquare(palette, colors) {
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].style.backgroundColor = colors[index];
    }
  }

  function createColorsPalette(palette) {
    const palleteArray = [];
    for (let index = 0; index < 4; index += 1) {
      const paletteSquare = palette.appendChild(createDivs());
      paletteSquare.className = 'color';
      palleteArray.push(paletteSquare);
    }
    addColorSquare(palleteArray, colorsArray);
  }

  createColorsPalette(paletteColor);

};