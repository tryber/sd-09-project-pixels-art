// Step 2 & 3
function setPalletColors() {
  const color1 = document.querySelector('.color');
  const color2 = color1.nextElementSibling;
  const color3 = color2.nextElementSibling;
  const color4 = document.querySelector('#color-palette').lastElementChild;

  color1.style.background = 'black';
  color2.style.background = 'darkorange';
  color3.style.background = 'darkviolet';
  color4.style.background = 'deepskyblue';
}

setPalletColors();

// Step 4 & 5
// Steps done in index.html and style.css documents

// Step 6 & 7
function selectColor() {
  const myColors = document.querySelectorAll('.color');
  let colorSelected = myColors[0];
  for (const color of myColors) {
    color.addEventListener('click', (event) => {
      colorSelected.className = 'color';
      event.target.className = 'color selected';
      return (colorSelected = event.target);
    });
  }
}

selectColor();

// Step 8
function changePixelColor() {
  const myPixelArray = document.querySelectorAll('.pixel');
  for (const pixel of myPixelArray) {
    pixel.addEventListener('click', (event) => {
      const colorSelected = document.getElementsByClassName('color selected')[0].style.background;
      return (event.target.style.background = colorSelected);
    });
  }
}

changePixelColor();

// Step 9
function resetColors(pixelArray) {
  for (const pixel of pixelArray) {
    pixel.style.background = 'white';
  }
}

function resetButton() {
  const myButton = document.querySelector('#clear-board');
  const pixelArray = document.querySelectorAll('.pixel');
  myButton.addEventListener('click', () => {
    resetColors(pixelArray);
  });
}

resetButton();
