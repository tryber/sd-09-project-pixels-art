function colorOnload() {
  let colorSelected = document.querySelector('#black');

  return colorSelected;
}

colorOnload();

function colorSumary() {
  const colorPallete = document.querySelectorAll('.color');
  colorPallete[0].style.backgroundColor = 'black'
  for (let index = 1; index < colorPallete.length; index += 1) {
    const colorOne = parseInt(Math.random() * 255, 10);
    const colorTwo = parseInt(Math.random() * 255, 10);
    const colorThree = parseInt(Math.random() * 255, 10);
    colorPallete[index].style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
  }
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
