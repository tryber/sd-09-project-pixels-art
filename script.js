window.onload = function () {
  function selectedSquareColor() {
    const square = document.getElementsByClassName('color')[0];
    square.classList.add('selected');
  }
  selectedSquareColor();
};
