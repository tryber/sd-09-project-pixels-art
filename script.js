window.onload = function () {
  // let boardSize = 5;
  const colors = document.querySelectorAll('.color');

  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'green';
  colors[3].style.backgroundColor = 'blue';

  // function createBoard() {

  // }

  function clearBoard() {
    document.getElementsByClassName('pixel')style.backgroundColor = 'white';
  }
};
