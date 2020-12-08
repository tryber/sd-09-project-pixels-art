const getColorPalette = document.getElementById('color-palette');
window.onload = function() {
  const colorSelected = document.querySelector('.black');
  colorSelected.classList.add('selected');
}

const colors = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < colors.length; index += 1){
  let colorsPalette = document.createElement('div');
  colorsPalette.className = 'color ' + colors[index];
  getColorPalette.appendChild(colorsPalette);
}

function printPixelsFrame() {
  let getPixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < 5; line += 1) {
    let createDivLine = document.createElement('div');
    for (let column = 0; column < 5; column += 1) {
      let createDivColumns = document.createElement('div');
      createDivColumns.className = 'pixel';
      createDivLine.appendChild(createDivColumns);
    }
    getPixelBoard.appendChild(createDivLine);
  }

}
printPixelsFrame();
