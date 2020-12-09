function paletteGenerator() {
    for (let index = 0; index < 4; index += 1) {
        const makeDiv = document.createElement('div');
        makeDiv.className = 'color';
        document.body.querySelector('#color-palette').appendChild(makeDiv);
    }
}

function putColor() {
    let numberOfColors = 4;
    let colorsOfPalette = [];
    colorsOfPalette.push('rgb(0 , 0 , 0)');
    for (let index = 1; index < numberOfColors; index += 1) {
        colorsOfPalette[index] = rgbGenerator();
        if (index === (numberOfColors - 1)) {
            if (repeatTest(colorsOfPalette) === false) {
                index += 1;
            } else {
                index = 0;
            }
        }
    }
    return colorsOfPalette;

    function rgbGenerator() {
        let rgb = [0, 0, 0];
        for (let index = 0; index < 3; index += 1) {
            rgb[index] = (Math.floor(Math.random() * 255 + 1));
            if (index === 2) {
                let colorValue = rgb.reduce((total, currentElement) => total + currentElement);
                if (colorValue > 150 && colorValue < 700) { // Verifica se a cor é é muito clara ou muito escura
                    index += 1;
                } else {
                    index = 0;
                }
            }
        }
        return `rgb(${rgb[2]} , ${rgb[1]} , ${rgb[0]})`;
    }

    function repeatTest(cores) {
        cores.sort();
        let repeat = false;
        for (let i = 0; i < cores.length; i += 1) {
            if (cores[i] === cores[i + 1]) {
                repeat = true;
            }
        }
        return repeat;
    }
}

function setColors() {
    let boxNoColor = document.querySelectorAll('div .color');
    for (let index = 0; index < boxNoColor.length; index += 1) {
        document.querySelectorAll('div .color')[index].style.backgroundColor = putColor()[index];
    }
}

function paintingFrame() {
    for (let index = 0; index < 25; index += 1) {
        let emptyBox = document.createElement('div');
        emptyBox.className = 'pixel';
        document.body.querySelector('#pixel-board').appendChild(emptyBox);
    }
}

paletteGenerator();
setColors();
paintingFrame();