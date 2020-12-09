function loadSelected (){
    document.getElementsByClassName('color1')[0].classList.add('selected')
}

window.onload(loadSelected());

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
