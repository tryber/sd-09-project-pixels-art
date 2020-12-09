window.onload = function () {
  const rowColumnTotal = 5;
  const divPixelBoard = document.getElementById('pixel-board');
  const selectColorPalette = document.getElementsByClassName('color')
  const searchSelected = document.getElementsByClassName('selected')   

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
  createDivPixel();

  function cycleColorPalet(){
    for(let indexColor = 0; indexColor < selectColorPalette.length; indexColor += 1){
        selectColorPalette[indexColor].addEventListener('click', function(origin){
            for (let indexColor2 = 0; indexColor2 < searchSelected.length; indexColor += 1){
                searchSelected[indexColor2].classList.remove('selected')
            }                   
            origin.target.classList.add('selected');  
        });
        
    }
  }
  cycleColorPalet();
};
