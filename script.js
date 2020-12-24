const boxPallet = document.querySelector('#color-palette');

//cria a caixa tabela da paleta

const palletColors = 4;
function boxPalletCollors() {
    for (let index = 0; index < palletColors; index += 1) {
        const boxCollors = document.createElement('div');
        boxCollors.className = 'color';
        boxPallet.appendChild(boxCollors);
    }
    const firstColor = document.querySelector('.color');
    firstColor.className = 'color color1 selected';
}
boxPalletCollors();

//coloca cores aleatorias as paletas

function randonColor() {
  const colorDaClasse = document.querySelectorAll('.color');
  colorDaClasse[0].style.backgroundColor = 'black'
  for (let index = 1; index < colorDaClasse.length; index += 1) {
    const randonFirstColor = parseInt(Math.random() * 255, 10);
    const randonSecondColor = parseInt(Math.random() * 255, 10);
    const randonThirdColor = parseInt(Math.random() * 255, 10);
    colorDaClasse[index].style.backgroundColor = `rgb(${randonFirstColor}, ${randonSecondColor}, ${randonThirdColor})`;
  }
}
randonColor() 

//criar a tablec
function table() {
    let numLines = [1, 2, 3, 4, 5];
    let tabela = document.createElement('table');
    tabela.id = 'pixel-board';
    let boardPixel = document.querySelector('section');
    boardPixel.appendChild(tabela);
    for (let index = 0; index < numLines.length; index++) {
        let lines = document.createElement('tr');
        tabela.appendChild(lines)
        for (let index = 0; index < numLines.length; index++) {
            let col = document.createElement('td');
            col.className = 'pixel';
            lines.appendChild(col);
        }
    }
}
table();

function clear() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index++) {
        pixels[index].style.backgroundColor = 'white';
    }
}

function buttonClear() {
    let pixels = document.querySelectorAll('.pixel')
    let cleanButton = document.querySelector('#clear-board');
    cleanButton.addEventListener('click',function () {
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
        }
    })
}
buttonClear();

function selectedColor() {
    let divColors = document.querySelectorAll('.color')
    let colorSelected = divColors[0];
    for (let index = 0; index < divColors.length; index += 1) {
        divColors[index].addEventListener('click', function (event) {
            colorSelected.className = 'color';
            event.target.className = 'color selected';
            return colorSelected = event.target;
        })
    }
}
selectedColor();

function paintPixel() {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index++) {
        pixels[index].addEventListener('click', function (event) {
            let selectColor = window.getComputedStyle(document.querySelector('.selected'));
            let background = selectColor.backgroundColor;
            event.target.style.backgroundColor = background;
        })
    }
}
paintPixel();

//random color carregando a pagina
window.onload = function() {
    coresRandon();
    clear();
}
