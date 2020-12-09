const colorOne = document.querySelectorAll('.color')[0];
const colorTwo = document.querySelectorAll('.color')[1];
const colorThree = document.querySelectorAll('.color')[2];
const colorFour = document.querySelectorAll('.color')[3];

function colorGenerator() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += hex[Math.floor(Math.random() * 16)];
    if (color === '#FFFFFF' || color === '#000000') {
      color = '#CCCCCC';
    }
  }
  return color;
}

colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = colorGenerator();
colorThree.style.backgroundColor = colorGenerator();
colorFour.style.backgroundColor = colorGenerator();

sessionStorage.setItem('color', 'black');

function selectColorPalette() {
  let colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      let element = colors[0];
      while (element) {
        if(element.className === 'color selected') {
          element.classList.remove('selected');
        }
        element = element.nextElementSibling;
      }
      event.target.classList.add('selected');
    })
  }
}
selectColorPalette()
