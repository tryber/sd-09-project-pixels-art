function generatePixelFrame(size) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < size; i += 1) {
    for (let i = 0; i < size; i += 1) {
      const row = document.createElement('div');
      row.className = 'pixel';
      pixelBoard.appendChild(row);
    }
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}

window.onload = function () {
  generatePixelFrame(5);
}
