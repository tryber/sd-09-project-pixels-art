let colorClick = document.querySelector('#color-palette');

function clickPalette (event) {
    let getPalette = document.querySelector('.selected');
    getPalette.className = 'color';
    event.target.className = 'color selected';
}
    colorClick.addEventListener('click', clickPalette);
