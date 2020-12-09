const colors = document.querySelectorAll('.color');
const arrayOfColors = ['black', 'yellow', 'green', 'red'];
for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = arrayOfColors[index];
}

let pixels = document.querySelectorAll('td');

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].className = 'pixel'; 
}

let initialColorOfPincel = document.querySelectorAll('.color');
for (let index = 0; index < initialColorOfPincel.length; index += 1) { 
    if (initialColorOfPincel[index].style.backgroundColor === "black") {
        initialColorOfPincel[index].className += ' selected';
    }
}

let selectColorOfPalet = document.querySelector('#color-palette');

window.onload = function() {
    selectColorOfPalet.addEventListener('click', function(event) { 
        let colors = document.querySelectorAll('.color');
        let indexOfSelectedClass = 1;
        for (let index = 0; index < colors.length; index += 1) { 
            if (colors[index].classList[indexOfSelectedClass] === 'selected') {
                colors[index].classList.remove('selected');
            }
        }

        event.target.className += ' selected';
    
    });
 }