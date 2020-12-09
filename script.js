window.onload = document.getElementsByClassName('color1')[0].classList.add('selected');

function changeSelected() {
    let selectedColor = document.getElementsByClassName('color');
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