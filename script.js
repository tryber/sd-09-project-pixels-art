window.onload = function() {
  let classPixel = document.getElementsByClassName('pixel');

  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].style.backgroundColor = 'white';
  }
}

function addPixels(size) {
  for (let index = 1; index <= size; index += 1) {
    const divPrincipal = document.createElement('div');
    const pixelBoard = document.getElementById('pixel-board');
    divPrincipal.className = 'pixel';
    pixelBoard.appendChild(divPrincipal);
    for (let j = 1; j <= size; j += 1) {
      const divFilha = document.createElement('div');
      divFilha.className = 'pixel';
      divPrincipal.appendChild(divFilha);
    }
  }
}

addPixels(5);

function defineBoardDimensions(tamanho) {
  document.getElementById('pixel-board').style.width = `${tamanho * 40} px`;
  document.getElementById('pixel-board').style.height = `${tamanho * 40} px`;
}

defineBoardDimensions(5);
