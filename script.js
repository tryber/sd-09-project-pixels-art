function makePixelDiv() {
    let div = document.createElement('div');
    div.className = 'pixel';
    return div;
}

function makePixelRow(numOfDivs) {
    let row = document.createElement('div');
    row.className = 'pixel-row';
    for (let i = 0; i < numOfDivs; i += 1) {
        div = makePixelDiv();
        row.appendChild(div);
    }
    return row;
}

function makePixelBoard(numOfRows, numOfColumns) {
    let board = document.querySelector('#pixel-board');
    for (let i = 0; i < numOfRows; i += 1) {
        row = makePixelRow(numOfColumns);
        board.appendChild(row);
    }
}

makePixelBoard(5,5);
