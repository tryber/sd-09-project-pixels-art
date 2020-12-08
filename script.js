const colors = document.querySelectorAll('.color');
const arrayOfColors = ['black', 'yellow', 'green', 'red'];
for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = arrayOfColors[index];
}

let pixels = document.querySelectorAll('td');

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].className = 'pixel'; 
}