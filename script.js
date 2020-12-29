
const selectColor = document.querySelector('#color-palette');
selectColor.addEventListener('click', function (colorBase) {
  let prevSelectColor = document.querySelector('.selected');
  prevSelectColor.className = 'color';
  colorBase.target.className += ' selected';
});

const selectPixel = document.querySelector('#pixel-board');
selectPixel.addEventListener('click', function (pixelSelected) {
  const  currentColor = document.querySelector('.selected');
  pixelSelected.target.style.backgroundColor = currentColor.id;
});

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function (pressButton) {
  const clearPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixels.length; index += 1) {
    clearPixels[index].style.backgroundColor = 'white';
  }
});