window.onload = function () {
    document.getElementById('pixel-board').style.backgroundColor = 'white';
    let divFather = document.getElementById('pixel-board');
    for (let index = 0; index < 5; index += 1) {
        for (let j = 0; j < 5; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            divFather.appendChild(pixel);
        }
    }
    function changeColor (event) {
        let initialPixelStyle = document.getElementsByClassName('pixel').style.backgroundColor;
        
    }   
}
function selected(event) {
    let selectedItem = document.getElementsByClassName('selected')[0];
    selectedItem.className = 'color';
    event.target.className = 'color selected';
}
function clickColorPalette () {
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', selected);
}
clickColorPalette()


