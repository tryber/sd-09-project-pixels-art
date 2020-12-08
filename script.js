let pixelBoard = document.getElementById('pixel-board');
console.log(pixelBoard);

function makeLinePixels() {
  for (let index = 0; index < 25; index += 1) {
    let pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
    console.log(index);
  }
}
makeLinePixels();

