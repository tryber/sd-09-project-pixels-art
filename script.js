function createPalete () {
  let palete = [1,2,3,4];
    for (let index of palete) {
    let squareColor = document.createElement('div');
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor)
    let colorSelector = document.querySelectorAll(".color")[0].classList.add('color-selected');
  }
}
  
function createBoardLine () {
  let base = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,,1,2,3,4,2,3,4,5]
  for (let index of base) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    document.getElementById('pixel-board').appendChild(pixel)
  }
}

function paleteColor() {
  let pink = document.querySelectorAll('.color')[1];
  let purple = document.querySelectorAll('.color')[2];
  let green = document.querySelectorAll('.color')[3];
  pink.style.backgroundColor = 'rgb(255, 192, 203)';
  purple.style.backgroundColor = 'rgb(128, 0, 128)';
  green.style.backgroundColor = 'rgb(15, 192, 50)';
}


window.onload = function(){
  createPalete()
  createBoardLine()
  paleteColor()
}