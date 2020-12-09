let pixelBoard = document.querySelector('#pixel-board');
let pxColumn = document.querySelector('.pixel-column');

function pxBoard(){
    let line;
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