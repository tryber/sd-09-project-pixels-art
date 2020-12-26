function generateColorPallete() {
  const palette = document.getElementsByClassName('color');
  palette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let index = 1; index < palette.length; index += 1) {
    const number1 = Math.floor(Math.random() * 256);
    const number2 = Math.floor(Math.random() * 256);
    const number3 = Math.floor(Math.random() * 256);
    palette[index].style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
  }
}
generateColorPallete();
function removeSelect() {
  const colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    if (colorPalet[index].className === 'color selected') {
      colorPalet[index].classList.remove('selected');
    }
  }
}
function setColor() {
  const colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    colorPalet[index].addEventListener('click', function (event) {
      removeSelect();
      event.target.classList.add('selected');
    });
  }
}
setColor();

function applyColor() {
  const pix = document.getElementsByClassName('pixel');
  let color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].addEventListener('click', function (event) {
      color = document.getElementsByClassName('selected')[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    });
  }
}
applyColor();
