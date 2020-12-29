//cria paleta das 4 opcoes ou mais de cores
function opcoesCores(param) {
  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < param; key += 1) {
    const colunaPallete = document.createElement('button');
    colunaPallete.className = 'color';
    if ([key] == 0) {
      colunaPallete.style.backgroundColor = 'black';

      colunaPallete.id = 'black';
    } else {
      let cor = 'rgb(' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ')';
      if (cor !== 'rgb(255,255,255') {
        colunaPallete.style.backgroundColor = `${cor}`;
        colunaPallete.id = `${cor}`;
      }
    }

    colorPallette.appendChild(colunaPallete);
  }
}
opcoesCores(4);


//cria os pixels
function criarTR(tamanho = 5) {
  let paletta = document.querySelector('#pixel-board');


  for (let i = 0; i < tamanho; i += 1) {

    let linhaPaleta = document.createElement('tr');
    linhaPaleta.className = 'linha';
    paletta.appendChild(linhaPaleta);
    for (let i = 0; i < tamanho; i += 1) {
      let linhaPaleta1 = document.createElement('button');
      linhaPaleta1.className = 'pixel';

      linhaPaleta1.style.backgroundColor = 'green';
      paletta.appendChild(linhaPaleta1);
    }
  }
}
criarTR();

//limpa os pixels para branco
let pixelClear = document.getElementById('clear-board');
let pixels = document.querySelectorAll('.pixel');
pixelClear.addEventListener('click', clear);

function clear() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

//muda os tamanhos do box
let tamanhoLinha = document.getElementById('board-size');
let newBoard = document.getElementById('generate-board');
let linha = document.querySelectorAll('.linha');
let pixel = document.querySelectorAll('.pixel');
newBoard.addEventListener('click', refazer);

function refazer() {
  let tamanho;
  for (let i = 0; i < pixel.length; i += 1) {
    linha[i].remove();
    pixel[i].remove();

    if (tamanhoLinha.value < 5) {
      tamanho = 5;

      criarTR(tamanho);
    } else if (tamanhoLinha.value > 50) {
      tamanho = 50;
      criarTR(tamanho);
    } else {
      tamanho = tamanhoLinha.value;

      criarTR(tamanho);
    }
  }
}


let selecaoCor = document.querySelector('.tableColor');
selecaoCor.addEventListener('click', select);

function select(event) {
  if (event.target.className !== 'selected') {
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');

  }
}


let col = document.querySelector('.pixel');
col.addEventListener('click', pintar);

function pintar(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}