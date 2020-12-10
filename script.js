  function createDiv(className) {
      const divBox = document.createElement('div');
      divBox.className = className;
      return divBox;
  }

  function createDivPixel() {
    const rowColumnTotal = 5;
    const divPixelBoard = document.getElementById('pixel-board');
    for (let indexDivPixel = 0; indexDivPixel < rowColumnTotal; indexDivPixel += 1) {
      for (let indexDivBoxPixel = 0; indexDivBoxPixel < rowColumnTotal; indexDivBoxPixel += 1) {
        const createBox = createDiv('pixel');
        divPixelBoard.appendChild(createBox);
      }
    }
  }

  function cycleColorPalet() {
    const selectColorPalette = document.getElementsByClassName('color');
    const searchSelected = document.getElementsByClassName('selected');
    for (let indexColor = 0; indexColor < selectColorPalette.length; indexColor += 1) {
      selectColorPalette[indexColor].addEventListener('click', function(origin) {
        for (let indexColor2 = 0; indexColor2 < searchSelected.length; indexColor += 1) {
          searchSelected[indexColor2].classList.remove('selected');
        };
        origin.target.classList.add('selected');
      });
    }
  }

   function addColors() {
    const clickPixel = document.getElementsByClassName('pixel');
    for (let indexClick = 0; indexClick < clickPixel.length; indexClick += 1){
        clickPixel[indexClick].addEventListener('click', function(event) {
            const returnColor = window.getComputedStyle(document.querySelector('.color.selected'));
            const colorPix = returnColor.backgroundColor;
            event.target.style.backgroundColor = colorPix;
          });
      }
  }

  function clearPixel() {
    let clearButton = document.querySelector('#clear-board');
    clearButton.addEventListener('click', function() {
        const boardPixel = document.querySelectorAll('.pixel');
        boardPixel.forEach((item)=>{
            item.style.backgroundColor = 'white'
        })
    })
  }
  window.onload = function () {
    createDivPixel();
    cycleColorPalet();
    addColors();
    clearPixel();
};
