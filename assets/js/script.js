window.onload = function() {
  createColor();
}
function createColor() {
  let colors = document.querySelectorAll('.color');
  for (let index = 1; index < colors.length; index += 1) {
    let randomColor = [];
    let rgbColors = 3;
    for (let index = 0; index < rgbColors; index += 1) {
      randomColor.push(Math.floor(Math.random()*254));
    }
    colors[index].style.backgroundColor = 'rgb('+randomColor+')';
  }
}