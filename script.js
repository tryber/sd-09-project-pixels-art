// Requisito 6
let firstColor = document.querySelector('.color-1');

function callback(){
  firstColor.classList.add('selected');
}
window.addEventListener('load', callback);

// Requisito 7
function exchange(event){
  colors.forEach(element => {
    element.classList.remove('selected');
  })
  event.currentTarget.classList.add('selected');
}

let colors = document.querySelectorAll('.color');
colors.forEach(element => {
  element.addEventListener('click', exchange);
});

