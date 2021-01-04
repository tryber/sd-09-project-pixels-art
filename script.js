let selectedPixel;
let selectedColor = 'black';

// Pegando a cor
const colors = document.querySelectorAll('.color');

colors.forEach((color) => {
  color.addEventListener('click', (e) => {
  // Deixando classe selected apenas a cor selecionada
    colors.forEach((clr) => {
      clr.classList.remove('selected');
    });
    selectedColor = e.target.classList[1];
    e.target.classList.add('selected');
  });
});

// Selecionando o pixel
const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
  pixel.addEventListener('click', (e) => {
    selectedPixel = pixels[e.target.id - 1];
    // Adicionando a classe ao pixel selecionado
    selectedPixel.classList.remove('black', 'green', 'red', 'yellow');
    selectedPixel.classList.add(selectedColor);
  });
});

// Botão para limpar
document.querySelector('#clear-board').addEventListener('click', () => {
    pixels.forEach((pixel) => {
      pixel.classList.remove('black', 'green', 'red', 'yellow');
    });
});
