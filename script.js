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

// Requisito 8
let divs = document.querySelectorAll('.pixel');
for(let index of divs){
  index.addEventListener('click' ,function(event){
    let color = document.querySelector('.selected');
    color = window.getComputedStyle(color, null);
    event.target.style.backgroundColor = color.backgroundColor;
    console.log(color.backgroundColor);
  })
}
