function createPalete () {
  let palete = [1,2,3,4];
    for (let index of palete) {
    let squareColor = document.createElement('div');
    
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor)
    
  }
}
  
function createBoardLine () {
  let base = 5
  for (let line = 0; line < base; line += 1) {
    let div = document.createElement('div');
    for (let colum = 0; colum < base; colum += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);      
    }
    document.getElementById('pixel-board').appendChild(div)
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
  document.querySelector('#color-palette').firstElementChild.classList.add('selected')
  createBoardLine()
  getRandomRgb()
  paleteColor()
}