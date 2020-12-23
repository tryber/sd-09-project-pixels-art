window.onload = function() {
  const classPixel = document.getElementsByClassName('pixel');

  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].style.backgroundColor = 'white';
  }

  const colorBlack = document.getElementsByClassName('color black')[0];
  colorBlack.className = 'color black selected';

};

function addPixels(size) {
  for (let index = 1; index <= size; index += 1) {
    const divPrincipal = document.createElement('div');
    const pixelBoard = document.getElementsByClassName('pixel-board')[0];
    pixelBoard.appendChild(divPrincipal);
    for (let j = 1; j <= size; j += 1) {
      const divFilha = document.createElement('div');
      divFilha.className = 'pixel';
      divPrincipal.appendChild(divFilha);
    }
  }
}

addPixels(5);
