function paletteColor () {
  const palette = document.querySelector('#color-palette');
  const color = ['black', 'blue', 'yellow', 'red'];
  for (let index = 0; index < color.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    divColor.classList.add(color[index]);
    palette.appendChild(divColor);
  }
}
paletteColor();
