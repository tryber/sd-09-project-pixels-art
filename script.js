const boardPixel = document.querySelector('#pixel-board')
let qtPixels = 0;

function colorselected(event) {
  const selectColor = document.querySelectorAll('.selected');
  selectColor.classList.remove('.selected');
  event.target.classList.add('.selected');
}

function coloringBoard(event) {
  const selectedColor = document.querySelector('.selected');
  const fillColor = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = fillColor;
}


