window.onload = function() {

    blackColor.classList.add('selected')
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains ('pixel')) {
            let pixel = event.target
            pixel.style.backgroundColor = 'black'
        }
    }, false);
   
    let divColor = document.querySelectorAll('.color')        
    for(i = 1; i < divColor.length; i += 1) {
    let randomColor = 'rgb('+ Math.random() * 256 + ',' + Math.random()*256 + ',' + Math.random()*256 + ')';
    divColor[i].style.backgroundColor = randomColor
    }
}

const blackColor = document.getElementsByClassName('color')[0]
blackColor.style.backgroundColor = 'black'

function createBorderPixels() {
    for( i = 1; i <= 5; i ++ ) {
        let divLinha = document.createElement('div');
        divLinha.className = 'linha'
        document.getElementById('pixel-board').appendChild(divLinha)
        let br = document.createElement('br')
        document.querySelector('.linha').appendChild(br)
        for(k = 1; k <= 5; k ++) {
            let divColuna = document.createElement('div')
            divColuna.className = 'pixel'
            document.querySelector('.linha').appendChild(divColuna)
        }
    }   
   
}
createBorderPixels();

let selectorPalletColor = document.querySelector('#color-palette');
selectorPalletColor.addEventListener('click', handlePalletItemEvent);

function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected')
    let currentSelectedDiv = event.target;
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    let mudaCor = currentSelectedDiv.style.backgroundColor

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains ('pixel')) {
            let pixel = event.target
            pixel.style.backgroundColor = mudaCor
        }
    }, false);
};

let divButton = document.querySelector('.button')
let buttonClear = document.createElement('button');
buttonClear.id = 'clear-board'
let textButton = document.createTextNode('Limpar'); 
buttonClear.appendChild(textButton)
divButton.appendChild(buttonClear)

buttonClear.addEventListener('click', limpaTudo)
function limpaTudo(){
    let clearPixelBoard = document.getElementsByClassName('pixel');
    for( i = 0; i <= clearPixelBoard.length - 1; i ++) {
        clearPixelBoard[i].style.backgroundColor = 'white'
    }
};

document.querySelector('#generate-board').addEventListener('click', clearPixelBoard);
document.querySelector('#generate-board').addEventListener('click', userCreateBoard);
 
function clearPixelBoard() {
    let boardPixel = document.querySelector('#pixel-board')
    let itemPixel = boardPixel.querySelectorAll('.linha')
    for(i = 0; i <itemPixel.length; i += 1) {
        boardPixel.removeChild(itemPixel[i])
    }
}   

function userCreateBoard() {
    let boardSize = document.querySelector('#board-size').value;
    if(boardSize == '') {
        alert('Board inválido!');
    } else if(boardSize < 5) {
        boardSize = 5;
    } else if(boardSize > 50) {
        boardSize = 50
    }
    
    for(i = 1; i <= boardSize; i ++) {
        let divLinha = document.createElement('div');
        divLinha.className = 'linha';
        document.getElementById('pixel-board').appendChild(divLinha);
        let br = document.createElement('br');
        document.querySelector('.linha').appendChild(br)
        for(k = 1; k <= boardSize; k++) {
            let divColuna = document.createElement('div')
            divColuna.className = 'pixel'
            document.querySelector('.linha').appendChild(divColuna)
        }
    }
}