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
  pink.style.backgroundColor = getRandomRgb();
  purple.style.backgroundColor = getRandomRgb();
  green.style.backgroundColor = getRandomRgb();
  if(pink = purple || green || rgb(255, 255, 255) ) {
    pink = getRandomRgb();
  }
  if(purple = green || rgb(255, 255, 255)){
  purple = getRandomRgb()
  }  
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 8;
  var g = num >> 8 & 250;
  var b = num & 250;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

window.onload = function(){
  createPalete()
  createBoardLine()
  getRandomRgb()
  paleteColor()
}