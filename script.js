function coloringTheColorPalette() {
    let colorsPalette = document.querySelectorAll('.color');
        colorsPalette[0].style.backgroundColor = 'black';
        colorsPalette[1].style.backgroundColor = 'yellow';
        colorsPalette[2].style.backgroundColor = 'hotpink';
        colorsPalette[3].style.backgroundColor = 'green';
}

function designingTheColorPalette() {
    let designsPalette = document.querySelectorAll('.color');
    for (let index = 0; index < designsPalette.length; index += 1) {
        designsPalette[index].style.display = 'inline-block';
        designsPalette[index].style.borderColor = 'black';
        designsPalette[index].style.borderStyle = 'solid';
        designsPalette[index].style.height = '60px';
        designsPalette[index].style.width = '60px';
        designsPalette[index].style.borderRadius = '10px';
        designsPalette[index].style.margin = 'auto';
    }
}

coloringTheColorPalette();
designingTheColorPalette();