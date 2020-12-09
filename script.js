window.onload = function () {
  const rowColumnTotal = 5;
  const divPixelBoard = document.getElementById('pixel-board');
  createDivPixel();

  function createDiv(className) {
    const divBox = document.createElement('div');
    divBox.className = className;
    return divBox;
  }

  function createDivPixel() {
    for (let indexDivPixel = 0; indexDivPixel < rowColumnTotal; indexDivPixel += 1) {
      for (let indexDivBoxPixel = 0; indexDivBoxPixel < rowColumnTotal; indexDivBoxPixel += 1) {
        const createBox = createDiv('pixel');
        const pixelFrame = divPixelBoard.appendChild(createBox);
      }
    }
  }
};
