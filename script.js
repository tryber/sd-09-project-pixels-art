let pixelBoard = document.querySelector('#pixel-board');
let pxColumn = document.querySelector('.pixel-column');
function pxBoard(){
    for(let lineIndex = 0; lineIndex < 5; lineIndex += 1) {
        let lineContainer = document.createElement('div');
        lineContainer.className = 'pixel-line';
        for(let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
            let pxColumn = document.createElement('div');
            pxColumn.className = 'pixel';
            lineContainer.appendChild(pxColumn);
        }
        pixelBoard.appendChild(lineContainer);
    }
}
pxBoard();

function colorSelecter(event) {
    const selected = document.querySelector('.selected');
    const targetSelected = event.target;
    if(targetSelected !== selected) {
        selected.classList.remove('selected');
        targetSelected.classList.add('selected');
    }
}

function getSelecter() {
    for (let index = 0; index < 4; index += 1) {
        const paletteList = document.querySelectorAll('.color')[index];
        paletteList.addEventListener('click', colorSelecter);
    }
}

getSelecter();

function bgPaint(event) {
    let classSelector = document.querySelector('.selected');
    event.target.style.backgroundColor = classSelector.style.backgroundColor;
}



function paintClick() {
    const pxBoard = document.querySelector('#pixel-board');
    pxBoard.addEventListener('click', bgPaint);
}

paintClick();

let cleaner = document.querySelector('#clear-board');
let pxel = document.querySelectorAll('.pixel');

function clearboard() {
    for(let index = 0; index < pxel.length; index += 1) {
        pxel[index].style.backgroundColor = 'white';
    }
}

function btnClick() {
    cleaner.addEventListener('click', clearboard);
}

btnClick();