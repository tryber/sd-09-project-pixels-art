// Requisito 6
let firstColor = document.querySelector('.color-1');

function callback(){
  firstColor.classList.add('selected');
}
window.addEventListener('load', callback);

