function generateColorPallete (){
  let palette = document.getElementsByClassName('color');
  palette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for(let index = 1; index < palette.length; index += 1) {
    let number1 = Math.floor(Math.random() * 256)
    let number2 = Math.floor(Math.random() * 256)
    let number3 = Math.floor(Math.random() * 256)
    palette[index].style.backgroundColor = 'rgb(' + number1 + ', ' + number2 + ', ' + number3 +')';
  }
}
generateColorPallete()
function removeSelect() {
  const colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    if (colorPalet[index].className === 'color selected') {
      colorPalet[index].classList.remove('selected');
    }
  }
}
var colored = 0
function setColor() {
  const colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    colorPalet[index].addEventListener('click', function (event) {
      removeSelect();
      event.target.classList.add('selected');
      colored = event.target.style.color;
    });
  }
}
setColor();

function applyColor() {
  let pix = document.getElementsByClassName('pixel');
  let color = document.getElementsByClassName('selected')[0].style.backgroundColor
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].addEventListener('click', function (event) {
      color = document.getElementsByClassName('selected')[0].style.backgroundColor
      pix[index].style.backgroundColor = color
    });
  }
}
applyColor()
