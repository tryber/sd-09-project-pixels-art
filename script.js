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
let palette = document.querySelector('tbody')
let cleanButton = document.createElement('button');
cleanButton.id= 'clear-board';
document.querySelector('body').appendChild(cleanButton);
cleanButton.innerHTML = 'Limpar'

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
palette.addEventListener('click', function(event) { 
    let colors = document.querySelectorAll('.color');
    let indexOfSelectedClass = 1;
    for (let index = 0; index < colors.length; index += 1) { 
        if (colors[index].classList[indexOfSelectedClass] === 'selected') {
            event.target.style.backgroundColor = colors[index].style.backgroundColor
        }
    }
});

cleanButton.addEventListener('click', function(event) { 
    let pixelsOfTheBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsOfTheBoard.length; index +=1) {
        pixelsOfTheBoard[index].style.backgroundColor = 'white';
    }
});
}