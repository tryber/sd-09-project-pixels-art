window.onload = function start() {
  function pixelBoard(matrix) {
    for (let index = 0; index < matrix; index += 1) {
      const pixelsLine = document.createElement('div');
      pixelsLine.className = 'pixel-line';
      document.getElementById('pixel-board').appendChild(pixelsLine);
      for (let index2 = 0; index2 < matrix; index2 += 1) {
        const pixelsColumn = document.createElement('div');
        pixelsColumn.className = 'pixel';
        document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
      }
    }
  }

pixelBoard(5);
}
