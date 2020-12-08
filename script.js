window.onload = function () {
  button();
}

function button(){
  let button = document.createElement('button')
  let pBoard = document.querySelector('#pixel-board')
  pBoard.appendChild = button
}


let color = document.querySelector('#color-palette');
color.addEventListener('click', clickColor);

function clickColor(event) {
 event.target.color = console.log('ok')
}
