function colorOnload() {
  let colorSelected = document.querySelector('#black');

  return colorSelected;
}

colorOnload();

function colorSumary() {
  const black = document.getElementById('black');
  const red = document.getElementById('red');
  const blue = document.getElementById('blue');
  const green = document.getElementById('green');
	black.style.backgroundColor = 'black';
	red.style.backgroundColor = 'red';
	blue.style.backgroundColor = 'blue';
  green.style.backgroundColor = 'green';
}
colorSumary();

//limpa o board
function resetBoard() {
  let clear = document.getElementById('clear-board');
  clear.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for (index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })
};
resetBoard();

//seleciona outra cor na paleta
function selectColor() {
  const color = document.querySelector('#color-palette');
  const select = document.getElementsByClassName('color');
  color.addEventListener('click', function (event) {
    for (index = 0; index < select.length; index += 1) {
      if (select[index].classList.contains('selected')) {
        select[index].classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });
};
 selectColor();

 
function selectSquare() {
	let pixels = document.querySelectorAll('.tr');
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      const selectedColor = document.querySelector('.selected');
      let pixelBg = selectedColor.style.backgroundColor;
      event.target.style.backgroundColor = pixelBg;

    });
  };
}
selectSquare();
