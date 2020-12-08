createColorPaletteElements();


function createColorPaletteElements(){
    let colors = ['rgb(0,0,0)','rgb(46, 204, 113)', 'rgb(41, 128, 185)', 'rgb(231, 76, 60)'];
    let colorPallete = document.querySelector('#color-palette');
    for(let color of colors){
        let colorElement = document.createElement('div');
        colorElement.className = 'color';
        colorElement.style.backgroundColor = color;
        colorPallete.appendChild(colorElement);
    }
}