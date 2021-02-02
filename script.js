let pixelMatriz = 5;
window.onload = function () {
  const colorSelected = document.querySelector('#black');
  colorSelected.classList.add('selected');
}

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
        console.log(select[index]);
      }
    }
  });
};
 selectColor();

function selectSquare() {
  let pixels = document.getElementsByClassName('pixel');
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      let selectedColor = document.querySelector('.selected');
      event.target.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
    });
  };
}
selectSquare();

function validateUserInput() {
  const vqvButton = document.querySelector('#generate-board');
  vqvButton.addEventListener('click', function (event) {
    let queryInput = document.querySelector('#board-size').value;
    if (queryInput === '') {
      alert('Board inválido!');
    } else if (queryInput < 5) {
      queryInput = 5;
    } else if (queryInput > 50) {
      queryInput = 50;
    }
    pixelMatriz = queryInput;
    customBoard();
  });
}
validateUserInput();

function customBoard() {
  const userBoard = document.getElementById('pixel-board');
  userBoard.innerHTML = '';
  for (let line = 0; line < pixelMatriz; line += 1) {
    const div = document.createElement('div');
    for (let colum = 0; colum < pixelMatriz; colum += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);
    }
    userBoard.appendChild(div);
  }
}
customBoard();
