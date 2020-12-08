  const chngClr = document.querySelectorAll('.color');
  const paletteRed = document.querySelector('.red');
  function changeColorToRed() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 1) {
          chngClr[index].classList.remove('selected');
      } else {
          paletteRed.classList.add('selected');
        }
    }
  }
  const paletteBlue = document.querySelector('.blue');
  function changeColorToBlue() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 2) {
          chngClr[index].classList.remove('selected');
      } else {
          paletteBlue.classList.add('selected');
      }
    }
  }
  const paletteGreen = document.querySelector('.green');
  function changeColorToGreen() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 3) {
          chngClr[index].classList.remove('selected');
      } else {
          paletteGreen.classList.add('selected');
      }
    }
  }
  const paletteBlack = document.querySelector('.black');
  function changeColorToBlack() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 0) {
          chngClr[index].classList.remove('selected');
      } else {
          paletteBlack.classList.add('selected');
      }
    }
  }
  paletteRed.addEventListener('click', changeColorToRed);
  paletteBlue.addEventListener('click', changeColorToBlue);
  paletteGreen.addEventListener('click', changeColorToGreen);
  paletteBlack.addEventListener('click', changeColorToBlack);
