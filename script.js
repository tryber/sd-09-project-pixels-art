function selectColor() {
  const selectedColors = document.getElementsByClassName('color selected');
  const colors = document.getElementsByClassName('color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function(event) {
      for (let index2 = 0; index2 < selectedColors.length; index2 += 1) {
        selectedColors[index2].classList.remove('selected');
      }

      event.target.classList.add('selected')
      console.log(event.target.id);
    });
  }
}

function colorPixel() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      const selectedColor = window.getComputedStyle(document.querySelector('.color.selected'));
      const bgColor = selectedColor.backgroundColor;
      event.target.style.backgroundColor = bgColor;
    });
  }
}

function createBtn() {
  const btnSection = document.querySelector('#button-section');
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  btnSection.appendChild(clearBtn);
}

function clearBoard() {
  const clearBtn = document.querySelector('#clear-board');
  clearBtn.addEventListener('click', function() {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })
}

window.onload = function () {
  selectColor();
  colorPixel();
  createBtn();
  clearBoard();
}
