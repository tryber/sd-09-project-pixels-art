// selecionar a cor preta ao abrir o app
let a = addEventListener(`onload`, colorOnLoad)

function colorOnLoad() {
  let colorSelected = document.querySelector('.black');

  return colorSelected;
}
window.onload = function() {
  document.querySelector('.black').className += ' selected';
}
