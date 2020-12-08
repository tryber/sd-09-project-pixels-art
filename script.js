window.onload = function start() {
    pixelBoard(5)
}

function pixelBoard(matrix) {
    for (index = 0; index < matrix; index += 1) {
        let pixelsLine = document.createElement('div');
        pixelsLine.className = 'pixel-line'
        document.getElementById('pixel-board').appendChild(pixelsLine);
        for (index2 = 0; index2 < matrix; index2 += 1) {
            let pixelsColumn = document.createElement('div');
            pixelsColumn.className = 'pixel';
            document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
        }
    }
}
