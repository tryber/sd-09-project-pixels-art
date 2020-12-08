const getColorPalette = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < colors.length; index += 1){
  let colorsPalette = document.createElement('div');
  colorsPalette.className = 'color ' + colors[index];
  getColorPalette.appendChild(colorsPalette);
}
