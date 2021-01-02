window.onload = function () {
  function selectedSquareColor() {
    const square = document.getElementsByClassName('color')[0];
    square.style.border = '1px solid pink';
    square.classList.add('selected');
  }
  selectedSquareColor();
};
