window.onload = function () {
  createEventColorBox();
  clear()
}

function createEventColorBox() {
  let box = document.querySelector('#pixel-board');
  let color = document.querySelectorAll('.color');

  function boxColor(event) {
    event.target.style.backgroundColor = 'gray';
  }
  box.addEventListener('click', boxColor);
}

function clear() {
  let button = document.querySelector('#clear-board')
  console.log(button);
  let pixel = document.querySelectorAll('div .pixel')

  button.addEventListener('click', colored)
  function colored(){
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].style.backgroundColor = 'white'
    }
  }
}
