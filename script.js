const blackBox = document.querySelector('.black');
const cyanBox = document.querySelector('.cyan');
const blueVioletBox = document.querySelector('.blueviolet');
const greenBox = document.querySelector('.green');

function changeColor() {
  cyanBox.addEventListener('click', function () {
    cyanBox.classList.toggle('selected');
    blackBox.classList.remove('selected');
    blueVioletBox.classList.remove('selected');
    greenBox.classList.remove('selected');
  });
  blackBox.addEventListener('click', function () {
    blackBox.classList.toggle('selected');
    cyanBox.classList.remove('selected');
    blueVioletBox.classList.remove('selected');
    greenBox.classList.remove('selected');
  });
  blueVioletBox.addEventListener('click', function () {
    blueVioletBox.classList.toggle('selected');
    cyanBox.classList.remove('selected');
    blackBox.classList.remove('selected');
    greenBox.classList.remove('selected');
  });
  greenBox.addEventListener('click', function () {
    greenBox.classList.toggle('selected');
    cyanBox.classList.remove('selected');
    blueVioletBox.classList.remove('selected');
    blackBox.classList.remove('selected');
  });
}
changeColor();
