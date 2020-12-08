window.onload = function() {

  createPaletteColor();
  function createPaletteColor() {
    let colorPalette = document.getElementById('color-palette');
    let colorsId = ['black','red','yellow','green'];
    console.log(colorsId);

    for (let index = 0; index < colorsId.length; index += 1) {
      let colorBox = document.createElement('div');
      colorBox.className = 'color';
      colorBox.id = colorsId[index];
      colorPalette.appendChild(colorBox);
    }
  }

}
