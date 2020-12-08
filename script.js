const colorOne = document.querySelectorAll('.color')[0];
const colorTwo = document.querySelectorAll('.color')[1];
const colorThree = document.querySelectorAll('.color')[2];
const colorFour = document.querySelectorAll('.color')[3];

function colorGenerator () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color = color + hex[Math.floor(Math.random() * 16)];
    console.log(color)
  }
  return color;
}

colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = colorGenerator();
colorThree.style.backgroundColor = colorGenerator();
colorFour.style.backgroundColor = colorGenerator();