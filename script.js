let colors = document.querySelectorAll('.color');
let arrayOfColors = ['black','yellow','green','red']
for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = arrayOfColors[index];
}