window.onload = function () {
  let corPreta = document.getElementById('color1');
  corPreta.className += ' selected';
}

function criarQuadro () {
  for (index = 0 ; index < 5 ; index += 1) {
    let linha = document.createElement('tr');
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(linha);
    for (index2 = 0; index2 < 5; index2 += 1) {
      let coluna = document.createElement('td');
      coluna.className = 'pixel';
      document.getElementById('pixel-board').appendChild(coluna);
    }
  }
}

function selectedColorChoise () {
  let paletaDeCores = document.getElementById('color-palette');
  paletaDeCores.addEventListener ('click', function (event) {
    let divsCores = document.getElementsByClassName('color');
    for (index = 0; index < divsCores.length; index += 1) {
      divsCores[index].classList.remove('selected');
    }
    event.target.className += ' selected';
  })
}

selectedColorChoise();
criarQuadro();
