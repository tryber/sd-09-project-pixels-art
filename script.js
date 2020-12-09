document.querySelector('#pixel-board').style.width = '260px';

for (let index = 1; index <= 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  div.style.margin = '0px 2px 0px 2px';
  document.querySelector('#pixel-board').appendChild(div);
}

document.querySelector('.black').classList.add('selected');

function selectedBlack() {
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
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
black.addEventListener('click', function () {
  selectedBlack();
});
red.addEventListener('click', function () {
  selectedRed();
});
green.addEventListener('click', function () {
  selectedGreen();
});
blue.addEventListener('click', function () {
  selectedBlue();
});

function changeBackgroundColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index2 = 0; index2 < pixel.length; index2 += 1) {
    pixel[index2].addEventListener('click', function (event) {
      const element = document.querySelector('.selected');
      const backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = backgroundColor;
    });
  }
}
window.onload = changeBackgroundColor();
