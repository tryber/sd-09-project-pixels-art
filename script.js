function addPixels(size) {
  for (let index = 1; index <= size; index += 1) {
    const pixelBoard = document.getElementById('pixel-board');
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div)
  }
}

addPixels(25);
