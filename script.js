window.onload = function () {
  const boardSize = 5;
  const colors = document.querySelectorAll('.color');

  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'green';
  colors[3].style.backgroundColor = 'blue';

  let colorPalette = document.querySelector('#color-palette');
  let selectedColor = document.querySelector('.selected').style.backgroundColor;

  colorPalette.addEventListener('click', function(event) {
    selectedColor = event.target.style.backgroundColor;
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

  function createBoard(entry) {
    for (let index = 1; index <= entry; index += 1) {
      const line = document.createElement('div');
      line.className = 'line';
      document.getElementById('pixel-board').appendChild(line);
      for (let indexPixel = 1; indexPixel <= entry; indexPixel += 1) {
        const box = document.createElement('div');
        box.className = 'pixel';
        document.getElementById('pixel-board').lastChild.appendChild(box);
      }
    }
  }

  createBoard(boardSize);
};

function clearBoard() {
  document.getElementsByClassName('pixel').style.backgroundColor = 'white';
};
