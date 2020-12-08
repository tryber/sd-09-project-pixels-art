function addPaletteColor() {
    let elementHolder = document.querySelector('div.color-palette');
    let colors = {
        black: 'rgb(0, 0, 0)',
        brown: 'rgb(114, 87, 87)',
        pink: 'rgb(219, 86, 219)',
        dodgerblue: 'rgb(30, 144, 255)',
    }
    for (let item in colors) {
        let newElement = document.createElement('div');
        newElement.className = 'color box';
        newElement.style.backgroundColor = colors[item];
        elementHolder.appendChild(newElement);
    }
    
}
addPaletteColor();

