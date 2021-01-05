window.onload = function () {
  const boardSize = 5;
  const colors = document.querySelectorAll('.color');

  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'green';
  colors[3].style.backgroundColor = 'blue';

  createBoard(boardSize);

  function createBoard(entry) {
    for (let index = 1; index <= entry; index += 1) {
      let line = document.createElement('div');
      line.className = 'line';
      document.getElementById('pixel-board').appendChild(line);
      for (let indexPixel = 1; indexPixel <= entry; indexPixel += 1) {
        let box = document.createElement('div');
        box.className = 'pixel';
        document.getElementById('pixel-board').lastChild.appendChild(box);
      }
    }
  }
};

function clearBoard() {
  document.getElementsByClassName('pixel').style.backgroundColor = 'white';
}
