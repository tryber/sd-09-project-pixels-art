// Selecionar Cor
function colorSelected() {
  const colorOfpalette = document.querySelector('#color-palette');

  colorOfpalette.addEventListener('click', function (event) {
    // Remover ".selected" anterior
    const initialColor = document.querySelector('.selected');
    initialColor.classList.remove('selected');

    // Colocar o ".selected" na cor clicada
    const newSelected = event.target;
    newSelected.classList.add('selected');
  });
}
colorSelected();

// Pintar Pixel
function paintPixel() {
  const selectedPixel = document.querySelector('#pixel-board');

  selectedPixel.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected').classList[1];

    const pixel = event.target;
    pixel.className = `pixel ${selectedColor}`;
  });
}
paintPixel();

// Limpar Painel
function clear() {
  const buttonClear = document.querySelector('#clear-board');

  buttonClear.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');

    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].className = '.pixel .white';
    }
  });
}
clear();
