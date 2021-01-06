// cria paleta das 4 opcoes ou mais de cores
function opcoesCores(param) {
  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < param; key += 1) {
    let colunaPallete = document.createElement('button');
    colunaPallete.className = 'color';
    if ([key] == 0) {
      colunaPallete.style.backgroundColor = 'black';
      colunaPallete.id = 'black';
      colunaPallete.className = 'color selected';
    } else {
      const cor = 'rgb(' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ')';
      if (cor !== 'rgb(255,255,255') {
        colunaPallete.style.backgroundColor = `${cor}`;
        colunaPallete.id = `${cor}`;
      }
    }
    colorPallette.appendChild(colunaPallete);
  }
}
opcoesCores(4);

// cria os pixels
function criarTR(tamanho) {
  const paletta = document.querySelector('#pixel-board');
  for (let i = 0; i < tamanho; i += 1) {
    const linhaPaleta = document.createElement('tr');
    linhaPaleta.className = 'linha';
    paletta.appendChild(linhaPaleta);
    for (let z = 0; z < tamanho; z += 1) {
      const linhaPaleta1 = document.createElement('button');
      if (tamanho > 10) {
        linhaPaleta1.className = 'pixel1';
        paletta.id = "pixel-board1"
      } else {
        linhaPaleta1.className = 'pixel';
        paletta.id = "pixel-board"
      }
      linhaPaleta1.style.backgroundColor = 'white';
      paletta.appendChild(linhaPaleta1);

    }
  }
}
criarTR(5);

// limpa os pixels para branco
function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
limpar();
// muda os tamanhos do box

const newBoard = document.getElementById('generate-board');
newBoard.addEventListener('click', refazer);

function refazer() {
  const tamanhoLinha = document.getElementById('board-size');

  let tamanho;
  if (tamanhoLinha.value == '') {
    alert('Board inválido!');
  } else if (tamanhoLinha.value < 5) {
    tamanho = 5;

  } else if (tamanhoLinha.value > 50) {
    tamanho = 50;

  } else {
    tamanho = tamanhoLinha.value;
  }
  document.querySelector('#pixel-board').innerHTML = '';

  criarTR(tamanho);

}

function selectedElement() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function() {
      for (let index2 = 0; index2 < colors.length; index2 += 1) {
        colors[index2].classList.remove('selected');
      }
      this.classList.add('selected');
    });
  }
}
selectedElement();

const col = document.querySelector('#pixel-board');
col.addEventListener('click', pintar);

function pintar(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}