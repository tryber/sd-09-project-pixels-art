
function box() {
    const numberOfColumns = 5;
    const numberOfLine = 5;
    for (let index = 0; index < numberOfLine; index+=1){
        let pixelBoard = document.querySelector('#pixel-board');
        let createLine = document.createElement('div');
        for(indexTwo = 0; indexTwo < numberOfColumns; indexTwo += 1){
            let createColumn = document.createElement('div');
            createColumn.className = 'pixel';
            createLine.appendChild(createColumn);
        }
        pixelBoard.appendChild(createLine);
    }
}
box()