function selectColor(event) {
  const deselect = document.querySelector('.color.selected');
  deselect.className = 'color';
  event.target.className = 'color selected';
}

function paintSquare(event) {
  const paletteColor = document.querySelector('.color.selected');
  event.target.style.backgroundColor = paletteColor.style.backgroundColor;
}

function clearPixelBoard() {
  const pixelSquare = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = 'white';
  }
}

function randomRGB() {
  const Red = Math.floor(Math.random() * 255);
  const Green = Math.floor(Math.random() * 255);
  const Blue = Math.floor(Math.random() * 255);
  return `rgb(${Red}, ${Green}, ${Blue})`;
}

function drawColorPallets() {
  const colorPalette = document.querySelector('#color-palette');
  const stdColors = ['black'];
  stdColors.push(randomRGB());
  stdColors.push(randomRGB());
  stdColors.push(randomRGB());
  colorPalette.addEventListener("click", selectColor);
  for (let index = 0; index < stdColors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.border = '1px black solid';
    if (index === 0) {
      color.className = 'color selected';
    }
    color.style.backgroundColor = stdColors[index];
    color.style.display = 'inline-block';
    color.style.margin = '1px';
    color.style.width = '36px';
    color.style.height = '36px';
    colorPalette.appendChild(color);
  }
}
