window.onload = function() {
    let randomColors = document.querySelectorAll('.color');
    for (let i = 1; i < randomColors.length; i++) {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        rgbColor = 'rgb(' + x + ' , ' + y + ' , ' + z + ')';
        randomColors[i].style.backgroundColor = rgbColor;
    }
    document.getElementsByClassName('color1')[0].classList.add('selected');
}

function changeSelected() {
    const selectedColor = document.getElementsByClassName('color');
    for (i = 0; i < selectedColor.length; i++) {
        selectedColor[i].addEventListener('click', function() {
            for (i2 = 0; i2 < i; i2++) {
                selectedColor[i2].classList.remove('selected')
            }
            this.classList.add('selected')
        })
    }
}
changeSelected();

function paintPixel() {
    let canvas = document.getElementById('pixel-board')
    canvas.addEventListener('click', function(event){
        let colorSelected = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
        if (event.target.style.backgroundColor !== colorSelected){
            event.target.style.backgroundColor = colorSelected
        }
    })
}
paintPixel();

document.querySelector('.button').addEventListener('click',function () {
    let btnClear = document.getElementById('clear-board');
    let canvas = document.querySelectorAll('.pixel');
    for (let i = 0; i < canvas.length; i++){
        canvas[i].style.backgroundColor = 'white'
    }
});

function randomPalette(){
    let randomColors = document.querySelectorAll('.color');
    for (let i = 1; i < randomColors.length; i++) {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        rgbColor = 'rgb(' + x + ' , ' + y + ' , ' + z + ')';
        randomColors[i].style.backgroundColor = rgbColor;
    }
}

document.querySelectorAll('.button')[1].addEventListener('click', randomPalette);
