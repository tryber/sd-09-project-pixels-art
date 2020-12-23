// 02 | 03- Cria paleta com quatro cores distintas iniciando com 'preto'
function paletteColor() {
  const palette = document.querySelector('#color-palette');
  palette.classList.add('color-palette')
  const color = ['black', 'blue', 'yellow', 'red'];
  for (let index = 0; index < color.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    divColor.classList.add(color[index]);
    palette.appendChild(divColor);
  }
}

// 04- Cria quadro com 25 pixels
function pixelFrame(size) {
  let select = parseInt(size);
  if (select < 5) {
    select = 5;
  }
  if (select > 50) {
    select = 50;
  }
  /* if (select > 23) {
    select = 23;
  } */
  // const square = Math.trunc(Math.sqrt(select));
  const container = document.querySelector('.container');
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.classList.add('pixel-board');
  for (let index = 0; index < select; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let index = 0; index < select; index += 1) {
      const divPixel = document.createElement('div');
      divPixel.classList.add('pixel');
      switch (select) {
        case 5:
          divPixel.style.width = '40px';
          divPixel.style.height = '40px';
          break;
        case 6:
          divPixel.style.width = '20px';
          divPixel.style.height = '20px';
          break;
        case 7:
          divPixel.style.width = '10px';
          divPixel.style.height = '10px';
          break;
        default:
          divPixel.style.width = '3px';
          divPixel.style.height = '3px';
          break;
      }
      line.appendChild(divPixel);
    }
  }
  container.appendChild(pixelBoard);
}

  // 07- Tira a seleção da cor
function stripSelection() {
  const unselect = document.querySelectorAll('.color');
  for (let index = 0; index < unselect.length; index += 1) {
    unselect[index].classList.remove('selected');
  }
}

// 07- Seleciona a cor
function selectColor(classElement) {
  const color = `.${classElement}`;
  const select = document.querySelector(color);
  select.classList.add('selected');
}

// 07- Seleciona a cor ao clicar
function clicSelectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const colorSelect = event.target.classList;
    const cor = colorSelect[1];
    stripSelection();
    selectColor(cor);
  });
}

// 08- Preenche cor
function colorFill() {
  const pixelArt = document.querySelector('#pixel-board');
  pixelArt.addEventListener('click', function (event) {
    const pixelSelect = event.target.classList;
    console.log(pixelSelect[0]);
    const colorPixel = document.querySelector('.selected').classList[1];
    if (pixelSelect[0] === 'pixel' && pixelSelect[1] === undefined) {
      pixelSelect.add(colorPixel);
    }
    if (pixelSelect[0] === 'pixel') {
      pixelSelect.remove(pixelSelect[1]);
      pixelSelect.add(colorPixel);
    }
  });
}

// 09- Apaga quadro
function clearBoard() {
  const buttonClear = document.querySelector('.clear-board');
  buttonClear.addEventListener('click', function (event) {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].className = 'pixel white';
    }
  });
}

// 10- Redimenciona o quadro de pixels
/* function inputResize() {
  const div = document.querySelector('#controls');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.classList.add('board-size');
  input.type = 'submit';
  input.type = 'number';
  input.min = '1';
  input.max = '50';
  // input.value = '';
  div.appendChild(input);
  input.addEventListener('input', function (event) {
    let aux = event.target;
    if (aux.value === '') {
      console.log('tá passando no inputResize 131');
      // alert('Board inválido!');
    }
    if (aux.value > parseInt(aux.getAttribute('max'))) {
      aux.value = aux.getAttribute('max');
    }
    if (aux.value < parseInt(aux.getAttribute("min"))) {
      console.log('Tá passando no auxiliar 138');
      // alert('Board inválido!');
      aux.value = 1;
    }
  });
} */



function resizeBoard() {
  const botao = document.querySelector('#generate-board');
  botao.addEventListener('click', function () {
    const valor = document.querySelector('#board-size').value;
    const board = document.querySelector('#pixel-board');
    if(valor === '' || valor < 1) {
      console.log('log 153 = ""');
      alert('Board inválido!');
    } else {
      board.remove();
      pixelFrame(valor);
      colorFill();
    }
  });
}

// Função para criar botão
function criarBotao(descricao, identificador, pai) {
  const elementoPai = document.getElementById(pai);
  const botao = document.createElement('button');
  botao.innerText = descricao;
  botao.id = identificador;
  botao.classList.add('botao', identificador);
  elementoPai.appendChild(botao);
}

// Adiciona um círculo à página
function criarCirculo() {
  const corpo = document.querySelector('body');
  const circulo = document.createElement('div');
  circulo.id = 'circulo';
  circulo.classList.add('circulo');
  corpo.appendChild(circulo);
}

// Adiciona rodapé à página
function createFooter() {
  const corpo = document.querySelector('body');
  const rodape = document.createElement('footer');
  rodape.id = 'rodape';
  rodape.classList.add('rodape');
  rodape.innerText = 'Pixels Arts - Project - Bloco 5 - Trybe 🚀 - Criado por: Cleber Lopes Teixeira - Turma 09 - 2020 ©️';
  corpo.appendChild(rodape);
}

window.onload = function () {
  paletteColor();
  selectColor('black');
  // inputResize();
  criarBotao('VQV', 'generate-board', 'controls');
  criarBotao('Limpar', 'clear-board', 'controls');
  pixelFrame(5);
  resizeBoard();
  colorFill();
  clearBoard();
  clicSelectColor();
  createFooter();
  criarCirculo()
};
