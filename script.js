function selectedSquareColorInitial() {
  const squareColorDefault = document.getElementsByClassName('color')[0];
  squareColorDefault.classList.add('selected');
  const color = squareColorDefault.attributes[0].value.split(' ', 2)[1];
  const colorEnd = `'${color}'`;
  return colorEnd;
}

function selectedSquareColor() {
  const square = document.getElementsByClassName('color');

  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', function (event) {
      const selected = document.getElementsByClassName('selected');
      const color = square[index].attributes[0].value.split(' ', 2)[1];

      selected[0].classList.remove('selected');
      square[index].classList.add('selected');
      const colorEnd = `'${color}'`;
      return colorEnd;
    });
  }
}

function paintSquareColor() {
  const table = document.querySelectorAll('td');
  for (let index = 0; index < table.length; index += 1) {
    table[index].addEventListener('click', function () {
      table[index].style.backgroundColor = selectedSquareColor();
    });
  }
}

function clearSquare() {
  square = document.getElementsByTagName("td");
  for (i = 0; i < square.length; i++) {
    square[i].style.background = 'white';
  }
}

window.onload = function () {
  selectedSquareColorInitial();
  paintSquareColor();
};
