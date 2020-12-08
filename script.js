window.onload = function () {
    let divFather = document.getElementById('pixel-board');
    for (let index = 0; index < 5; index += 1) {
        for (let j = 0; j < 5; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            divFather.appendChild(pixel);
        }
    }
}


let colorsPanel = document.getElementsByClassName('pixel');

addEventListener('click', function () {
    document.getElementsByClassName('pixel').style.backgroundColor = '#FF0F0F';

});