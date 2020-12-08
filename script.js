window.onload = function () {
    let currentColorSelected = 'black';
    let colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', setColorToPaint);

    function setColorToPaint (evt) {
        let colorSelected = evt.target.id;
        currentColorSelected = colorSelected;
    }
}