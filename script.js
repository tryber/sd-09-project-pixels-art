window.onload = teste (5, 5)

    function teste (width, height){
    let numberOfLines = width;
    let numberOfColumns = height;
    let getPixelBoard = document.getElementById('pixel-board');
    
    fillPixelBoard()

    //cria 1 pixel
    function createPixel (){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.background = 'white';
        return pixel
    }

    // acrescentar o número de linhas no pixelboard
    function fillPixelBoard(){
        for (let index = 0; index < numberOfLines; index += 1){
            let lines = document.createElement('div');
            lines.className = 'lines';
            //acrescentar o número de colunas nas linhas 
            for(let index = 0; index < numberOfColumns; index += 1){
                let pixel = createPixel();
                lines.appendChild(pixel);
            };
            getPixelBoard.appendChild(lines);
        }
    }


}

addEventListener(window.onload, selectedColor('black')) ;

function selectedColor(colorName){
    let getColorsPalette = document.querySelectorAll('.color');
    for (let index in getColorsPalette){
        if (String(getColorsPalette[index].className).includes(colorName)){
            getColorsPalette[index].className += 'selected'
        }
    }

}    

let getColorsPalette = document.getElementById('color-palette');

getColorsPalette.addEventListener('click', recebeclick)

function recebeclick(eventOrigin){

    if (eventOrigin.target.id !== 'color-palette'){
    let clickedColorClassNameString = String(eventOrigin.target.className);
    let clickedColorClassName = eventOrigin.target.className;
    let getColorsPaletteElements = document.querySelectorAll('.color');

    if (clickedColorClassNameString.includes('selected')){
        let newClass = String(clickedColorClassName.replace('selected', ''));
        eventOrigin.target.className = newClass
    } else {        
        for (let index in getColorsPaletteElements){
            if (String(getColorsPaletteElements[index].className).includes('selected')){
            let newClass = String(getColorsPaletteElements[index].className.replace('selected', ''));
            getColorsPaletteElements[index].className = newClass 
            }
        }
        eventOrigin.target.className += 'selected'
        }
    } 
}
