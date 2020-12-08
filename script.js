window.onload = function () {
  //const paletteColors = document.querySelectorAll('.color');
  const paletteColor = document.querySelector('#color-palette')
  const colorsArray = ['black', 'blue', 'green', 'red'];

  function createDivs() {
    let div = document.createElement('div');
    return div;
  };

  function createColorsPalette(palette) {
    let palleteArray = [];
    for (let index = 0; index < 4; index += 1){
      let paletteSquare = palette.appendChild(createDivs());
      paletteSquare.className = 'color';
      palleteArray.push(paletteSquare);
    }
    addColorSquare(palleteArray, colorsArray);
  };

  function addColorSquare(palette, colors) {
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].style.backgroundColor = colors[index];
    }
  };

  createColorsPalette(paletteColor);
  //addColorSquare(paletteColors, colorsArray);

};
