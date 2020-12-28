
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