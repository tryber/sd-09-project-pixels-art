window.onload = function () {
    let DivDad = document.querySelector('#pixel-board');
  function addlines () {
      for (let index = 1; index <= 5; index += 1) {
          let divLine = document.createElement('div');
          for (let columnindex =1; columnindex <= 4; columnindex += 1) {
              let pixel = document.createElement('div');
              pixel.className = 'pixel';
              divLine.appendChild(pixel);
          }
          DivDad.appendChild(divLine)
          
      }
  }
  addlines()
}
let blackPixel = document.querySelector('.black')
let pixel = document.querySelector('.pixel');

function changePixelToBlack () {
    pixel.style.backgroundColor = 'black';
}

blackPixel.addEventListener('click',)
pixel.addEventListener('click', changePixelToBlack)