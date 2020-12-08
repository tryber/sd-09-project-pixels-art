let colors = document.querySelectorAll('.color');
let pixelBoard = document.querySelector('#pixel-board');

function rgbRandom() {
  let r = Math.ceil(Math.random() * 256);
  let g = Math.ceil(Math.random() * 256);
  let b = Math.ceil(Math.random() * 256);

  let rgb = `rgb(${r} , ${g} , ${b})`;

  return rgb;
}

function colorizePalette() {
  for (color of colors) {
    color.style.backgroundColor = rgbRandom();
    colors[0].style.backgroundColor = 'black';
  }
}
colorizePalette();