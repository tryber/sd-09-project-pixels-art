let colorClick = document.querySelector('#color-palette');

function clickPalette (event) {
    let getPalette = document.querySelector('.selected');
    getPalette.className = 'color';
    event.target.className = 'color selected';
}
    colorClick.addEventListener('click', clickPalette);

let selectPBoard = document.querySelector('#pixel-board');

function changeColor (evento) {
    let getColor = document.querySelector('.color.selected');
    let getBackCol = getColor.style.backgroundColor;
    evento.target.style.backgroundColor = getBackCol;
    }
    selectPBoard.addEventListener('click', changeColor);