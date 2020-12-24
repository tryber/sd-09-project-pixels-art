function removeSelect() {
  let colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    if (colorPalet[index].className === 'color selected') {
      colorPalet[index].className = 'color';
    }
  }
}
function setColor () {
  let colorPalet = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalet.length; index += 1) {
    colorPalet[index].addEventListener('click', function(event) {
      removeSelect();
      event.target.className = 'color selected';
    });
  }
}
setColor();

