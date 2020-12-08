let pixelBoard = document.querySelector('.pixel-board');
let pxColumn = document.querySelector('.pixel-column');
function pixelLine(){
    let line;
    for(let lineIndex = 0; lineIndex < 5; lineIndex += 1) {
        let lineContainer = document.createElement('div');
        for(let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
            let pxColumn = document.createElement('div');
            pxColumn.className = 'pixel';
            lineContainer.appendChild(pxColumn);
        }
        pixelBoard.appendChild(lineContainer);
    }
}
pixelLine();
