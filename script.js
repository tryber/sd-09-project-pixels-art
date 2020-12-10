sessionStorage.selectedColor = '#000000';

// funcão utilizada para modificar o bgcolor de todos os pixel para white
function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < allPixels.length; idx += 1) {
    allPixels[idx].style.backgroundColor = 'white';
  }
}

// associa a função acima co botão VQV
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function (target) {
  clearBoard(target);
});

// para evitar apenas adicionar elementos na linha da board, essa função limpa as divs filhas
function destructBoard() {
  const linhas = document.querySelectorAll('.linha');
  for (let index = linhas.length - 1; index >= 0; index -= 1) {
    linhas[index].parentNode.removeChild(linhas[index]);
  }
}

// funcão de colorir os pixels e sua associação
function colorPixel(self) {
  self.target.style.backgroundColor = sessionStorage.selectedColor;
}
function assignPixels() {
  const myPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < myPixels.length; idx += 1) {
    myPixels[idx].addEventListener('click', function (target) {
      colorPixel(target);
    });
  }
}

// constói a board primeiro por linha depois adiciona o numero de pixels em cada linha
// por ultimo associa a função de click (acima) em cada pixel
function constructBoard(baseDoQuadro) {
  destructBoard();
  for (let idx = 0; idx < baseDoQuadro; idx += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'linha';
    newLine.style.height = '40px';
    newLine.style.width = `${baseDoQuadro * 42}px`;
    document.querySelector('#pixel-board').appendChild(newLine);
  }
  const myLines = document.querySelectorAll('.linha');
  for (let idx = 0; idx < baseDoQuadro; idx += 1) {
    for (let idx2 = 0; idx2 < baseDoQuadro; idx2 += 1) {
      const newPixel = document.createElement('div');
      newPixel.style.backgroundColor = 'white';
      newPixel.className = 'pixel';
      myLines[idx].appendChild(newPixel);
    }
  }
  assignPixels();
}

// verifica se o max e o min
function verificaNovaBase(number) {
  if (number >= 50) {
    return 50;
  } else if (number <= 5) {
    return 5;
  }
  return number;
}

// funcao e evento de criar uma nova board usando o botão
function mudaBoardPeloBotao() {
  const fieldValue = document.querySelector('.input').value;
  if (fieldValue === '' || fieldValue < 0) {
    document.querySelector('.input').value = '';
    alert('Board inválido!');
  }
  const answer = verificaNovaBase(fieldValue);
  constructBoard(answer);
  document.querySelector('.input').value = '';
}

document.querySelector('.confirmButton').addEventListener('click', mudaBoardPeloBotao);
