window.onload = function() {
  let paletteColors = document.querySelectorAll('.color');
  let colorsArray = ['black', 'blue', 'green', 'red'];

  addColorsPalette(paletteColors, colorsArray);

  function addColorsPalette(paletteColors, colorsArray) {
    for (let index = 0; index < paletteColors.length; index += 1) {
      paletteColors[index].style.backgroundColor = colorsArray[index];
    }
  }

}