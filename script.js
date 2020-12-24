function removeSelect(){
  let colorPalet = document.querySelectorAll('.color');
  for (let index in colorPalet){
    if (colorPalet[index].className === 'color selected'){
      colorPalet[index].className = 'color';
    }
  }
}
function setColor (){
  let colorPalet = document.querySelectorAll('.color');
  for (let index in colorPalet){
    colorPalet[index].addEventListener('click', function(event) {
      removeSelect();
      event.target.className = 'color selected';
    });
  }
}
setColor();
