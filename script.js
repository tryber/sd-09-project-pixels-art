function selectedSquareColorInitial() {
  const squareColorDefault = document.getElementsByClassName('color')[0];
  squareColorDefault.classList.add('selected');
  let color = squareColorDefault.attributes[0].value.split(' ', 2)[1];
  const colorEnd = '"' + color + '"';
  return colorEnd;
}

function selectedSquareColor() {
  const square = document.getElementsByClassName('color');

  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', function () {
      const selected = document.getElementsByClassName('selected');
      let color = square[index].attributes[0].value.split(' ', 2)[1];

      selected[0].classList.remove('selected');
      square[index].classList.add('selected');
      const colorEnd = '"' + color + '"';
      return colorEnd;
    });
  }
}

const pixelBoard = document.getElementById('pixel-board');

function paintSquareColor(event) {
  const currentColor = document.querySelector('.selected').classList[1];
  const oldColor = event.target.classList[1];
  event.target.classList.remove(oldColor);
  event.target.classList.add(currentColor);
}

pixelBoard.addEventListener('click', paintSquareColor);

function clearSquare() {
  const square = document.getElementsByTagName('td');
  for (i = 0; i < square.length; i++) {
    square[i].style.background = 'white';
  }
}

window.onload = function () {
  selectedSquareColorInitial();
  selectedSquareColor();
};
