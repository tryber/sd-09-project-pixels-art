window.onload = function () {
  const btn = document.querySelector('#clear-board');
  btn.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
      if (event.target === colors[index]) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });

  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      const color = document.querySelector('.selected');
      event.target.style.backgroundColor = color.classList[1];
    }
  });
};
