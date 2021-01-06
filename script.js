function selectedSquareColorInitial() {
  const squareColorDefault = document.getElementsByClassName('color')[0];
  squareColorDefault.classList.add('selected');
  const color = squareColorDefault.attributes[0].value.split(' ', 2)[1];
  const colorEnd = `"${color}"`;
  return colorEnd;
}

function selectedSquareColor() {
  const square = document.getElementsByClassName('color');

  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', function () {
      const selected = document.getElementsByClassName('selected');
      const color = square[index].attributes[0].value.split(' ', 2)[1];

      selected[0].classList.remove('selected');
      square[index].classList.add('selected');
      const colorEnd = `"${color}"`;
      return colorEnd;
    });
  }
}

function squarePaint() {
  const selected = document.getElementsByClassName('selected');
  const square = document.getElementsByTagName('td');
  for (let i = 0; i < square.length; i += 1) {
    square[i].addEventListener('click', function () {
      square[i].style.backgroundColor = selected[0].attributes[0].value.split(' ', 2)[1];
    });
  }
}

function clearSquare() {
  const square = document.getElementsByTagName('td');
  for (let i = 0; i < square.length; i += 1) {
    square[i].style.backgroundColor = 'white';
  }
}

window.onload = function () {
  selectedSquareColorInitial();
  selectedSquareColor();
  squarePaint();
  clearSquare();
};
