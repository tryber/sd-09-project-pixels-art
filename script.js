const tabela = document.querySelector('#pixel-board');

function pixelTable(linha) {
    for(let i = 0; i < 5; i += 1){
        const quadrado = document.createElement('div');
        quadrado.className = 'pixel';
        linha.appendChild(quadrado);

    }

}

function fiveTimesLine() {
    for(let i = 0; i < 5; i += 1) {
        const linha = document.createElement('div');
        linha.className = 'LinesPixel'
        pixelTable(linha)
        tabela.appendChild(linha)
    }
}
fiveTimesLine()

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
    for(let i = 0; i < getNewAccess.length; i += 1) {
        getNewAccess[i].style.backgroundColor = 'white'
    }
}

acessClearButton.addEventListener('click', buttonClear);