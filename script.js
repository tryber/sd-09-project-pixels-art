window.onload = function start() {
  function pixelBoard(matrix) {
    for (let index = 0; index < matrix; index += 1) {
      const pixelsLine = document.createElement('div');
      pixelsLine.className = 'pixel-line';
      document.getElementById('pixel-board').appendChild(pixelsLine);
      for (let index2 = 0; index2 < matrix; index2 += 1) {
        const pixelsColumn = document.createElement('div');
        pixelsColumn.className = 'pixel';
        document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
      }
    }
  }

  let color = 'rgb(0 , 0 , 0)';
  let color1 = document.getElementsByClassName('color')[0];
  let color2 = document.getElementsByClassName('color')[1];
  let color3 = document.getElementsByClassName('color')[2];
  let color4 = document.getElementsByClassName('color')[3];
  color1.addEventListener('click', setColor);
  color2.addEventListener('click', setColor);
  color3.addEventListener('click', setColor);
  color4.addEventListener('click', setColor);

  pixelBoard(5);
};
