const tabela = document.querySelector('#pixel-board');
let getInput = document.querySelector('#board-size');
let getButton = document.querySelector('#generate-board');


function pixelTable(linha, boardSize) {
    for(let i = 0; i < boardSize; i += 1){
        const quadrado = document.createElement('div');
        quadrado.className = 'pixel';
        linha.appendChild(quadrado);

    }

}

function fiveTimesLine(boardSize) {
    for(let i = 0; i < boardSize; i += 1) {
        const linha = document.createElement('div');
        linha.className = 'LinesPixel';
        pixelTable(linha, boardSize);
        tabela.appendChild(linha);

    }
}
fiveTimesLine(5)

let getPalet1 = document.querySelector('#color-palette')


function selecPalet(evento) {
    let getAllPalet = document.querySelector('.selected')
    getAllPalet.className = 'color'
    evento.target.className = 'color selected'

}

getPalet1.addEventListener('click', selecPalet)


let allPixel = document.querySelector('#pixel-board')

function changeBlocks(eventoOne) {
    let getColorSelected = document.querySelector('.color.selected')
    let getColorStyle = getColorSelected.style.backgroundColor;
    eventoOne.target.style.backgroundColor = getColorStyle;

}

allPixel.addEventListener('click', changeBlocks)

let acessClearButton = document.querySelector('#clear-board');


function buttonClear() {
    let getNewAccess = document.querySelectorAll('.pixel');
    for(let i = 0;  i < getNewAccess.length; i += 1) {
        getNewAccess[i].style.backgroundColor = 'white'
    }
}

acessClearButton.addEventListener('click', buttonClear);



function alerta() {
  if(getInput.value === '') {
     alert('Board inválido!');
  }if(getInput.value < 5){
    getInput.value = 5;
    tabela.innerHTML = '';
    fiveTimesLine(getInput.value);
  }if(getInput.value > 50) {
    getInput.value = 50;
    tabela.innerHTML = '';
    fiveTimesLine(getInput.value);
  }
  tabela.innerHTML = '';
  fiveTimesLine(getInput.value);
}


getButton.addEventListener('click', alerta);


function creatNewColors() {
  let red = Math.ceil(Math.random() * 255)
  let green = Math.ceil(Math.random() * 255)
  let blue = Math.ceil(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`

}
console.log(creatNewColors());

function creatPallet() {
  for(i = 0; i <= 3; i += 1 ) {
     let div = document.createElement('div');

    if(i === 0){
      div.style.backgroundColor = 'black';
      div.classList.add('selected')
    }else{
      div.style.backgroundColor = creatNewColors()
    }

    div.classList.add('color')

    getPalet1.appendChild(div);
  }
}
creatPallet();