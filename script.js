window.onload = function(){
  function createPixelsBoard() {
    const pixelBoard = document.querySelector('#pixel-board');
    const pixelColumn = 5;
    
    for (let indexLine = 0; indexLine < pixelColumn; indexLine += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.classList.add('pixel-line');
      
      for (let indexColumn = 0; indexColumn < pixelColumn; indexColumn += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelLine.appendChild(pixel);
      }
      pixelBoard.appendChild(pixelLine);
    }
  }
  createPixelsBoard();
}
