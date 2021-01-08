

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

//seleciona outra cor na paleta
function selectColor() {
  const color = document.querySelector('#color-palette');
  for (index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function (event) {
      select.classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
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
