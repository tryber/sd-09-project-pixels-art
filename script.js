document.querySelector('#pixel-board').style.width = '260px';

for (let index = 1; index <= 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  div.id = '' + index + '';
  div.style.margin = '0px 2px 0px 2px';
  document.querySelector('#pixel-board').appendChild(div);
}


window.onload = changeBackgroundColor();

document.querySelector('.black').classList.add('selected');

function selectedBlack(){
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.black').classList.add('selected');
}

function selectedRed() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.red').classList.add('selected');
}

function selectedGreen() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.green').classList.add('selected');
}

function selectedBlue() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.blue').classList.add('selected');
}
let black = document.querySelector('.black');
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
black.addEventListener('click', function (event) {
  selectedBlack();
});
red.addEventListener('click', function (event) {
  selectedRed();
});
green.addEventListener('click', function (event) {
  selectedGreen();
});
blue.addEventListener('click', function (event) {
  selectedBlue();
});

function changeBackgroundColor() {
  let pixel = document.querySelectorAll('.pixel');
  for (let index2 = 0; index2 < pixel.length; index2 +=1){
    pixel[index2].addEventListener('click', function (event) {
      let element = document.querySelector('.selected');
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = backgroundColor;
    })
  }
  
}
