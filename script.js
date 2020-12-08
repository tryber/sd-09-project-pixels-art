function createDivColors(color) {
  if (color !== 'white') {
    let divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = color;

    let palette = document.querySelector('#color-palette');
    palette.appendChild(divColor);
  }
}
createDivColors('black');
createDivColors('orange');
createDivColors('green');
createDivColors('blue');



