function generatePixelFrame(size) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const row = document.createElement('div');
      row.className = 'pixel';
      pixelBoard.appendChild(row);
    }
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  const currentSelectedPixel = document.getElementsByClassName('selected');
  colorPalette.addEventListener('click', function (selectedPixel) {
    if (selectedPixel.target.className !== 'center') {
      currentSelectedPixel[0].classList.remove('selected');
      selectedPixel.target.classList.add('selected');
    }
  });
}

window.onload = function () {
  generatePixelFrame(5);
  selectColor();
};
