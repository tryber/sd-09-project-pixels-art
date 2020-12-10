window.onload = function() {
  selectedBlack();
  selectedElement();
  colorSet();
  clearPixelBoard();
};
  
function selectedBlack() {
  const selectColor1 = document.getElementsByClassName('background-item1');
  selectColor1[0].className += ' selected';
}

function selectedElement() {
  const colors = document.getElementsByClassName('color');

  for(let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function(event) {
      for(let bindex = 0; bindex < colors.length; bindex += 1) {
        colors[bindex].classList.remove('selected');
        }
        event.target.classList.add('selected');
      })
    }
  }

function colorSet() {
  const pixels = document.getElementsByClassName('pixel');

  for(let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      let elementSelected = document.querySelector('.color.selected');
      let elementSelectedColor = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = elementSelectedColor;
    })
  }
}

function clearPixelBoard() {
  const pixelsWhite = document.getElementsByClassName('pixel');
  const buttonClear = document.getElementById('clear-board');

  buttonClear.addEventListener('click', function(){
    for(let index = 0; index < pixelsWhite.length; index += 1) {
      pixelsWhite[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  })
}

// function randomizeNumberPalette() {
//   let randomRgb = Math.round(Math.random()*255);
//   for(let index = 0; index < pixels.length; index += 0)
// }
