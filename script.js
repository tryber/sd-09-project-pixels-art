function coloringTheColorPalette() {
    let colorsPalette = document.getElementsByClassName('color');
    for (let index = 0; index < colorsPalette.length; index += 1) {
        if (colorsPalette[index] === colorsPalette[0]) {
        colorsPalette.style.backgroundColor = 'blue';
        }
        if (colorsPalette[index] === colorsPalette[1]) {
            colorsPalette.style.backgroundColor = 'red';
        }
        if (colorsPalette[index] === colorsPalette[2]) {
            colorsPalette.style.backgroundColor = 'yellow';
        }
        if (colorsPalette[index] === colorsPalette[3]) {
            colorsPalette.style.backgroundColor = 'green';
        }
    }
}
coloringTheColorPalette();