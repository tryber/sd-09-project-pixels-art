window.onload = matrix (5, 5), paintPallete(), firstColor ()

function matrix (width, height){

    let getPixelBoard = document.getElementById('pixel-board');
    let pixelBoardWidth = document.createElement('div');
    pixelBoardWidth.className = 'pixel-board-width';


    function createPixel (){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.background = 'white';
        return pixel
    }

    for(let widthIndex = 0; widthIndex < width; widthIndex += 1){
        for (let heightIndex = 0; heightIndex < height; heightIndex += 1){
            pixelBoardWidth.className = 'pixel-board-width';
            let pixel = createPixel();
            pixelBoardWidth.appendChild(pixel)
        }

        getPixelBoard.appendChild(pixelBoardWidth)
        pixelBoardWidth = document.createElement('div');

    }
}

function paintPallete(){
    let getBlack = document.querySelector('.color.black')
    let getRed = document.querySelector('.color.red')
    let getGreen = document.querySelector('.color.green')
    let getBlue = document.querySelector('.color.blue')

    getBlack.style.backgroundColor = 'black'
    getRed.style.backgroundColor = 'red'
    getGreen.style.backgroundColor = 'green'
    getBlue.style.backgroundColor = 'blue'

}

function firstColor(){
    let getColorsPaletteElements = document.querySelectorAll('.color');
    for (let index = 0; index < getColorsPaletteElements.length; index += 1){
         let palleteColor = getColorsPaletteElements[index].style.backgroundColor;
            if(palleteColor=== 'black'){
                getColorsPaletteElements[index].className += 'selected'
        }
    }
}
    
let getColorsPaletteDiv = document.querySelector('#color-palette');

getColorsPaletteDiv.addEventListener('click', function (eventOrigin){

    if (eventOrigin.target.id !== 'color-palette'){

        let clickedColorClassNameString = String(eventOrigin.target.className);
        // let clickedColorClassName = eventOrigin.target.className;
        let clickedColor = eventOrigin.target.style.backgroundColor
        let getColorsPaletteElements = document.querySelectorAll('.color');
        


        if (clickedColorClassNameString.includes('selected')){
            let newClass = clickedColorClassNameString.replace('selected', '')
            eventOrigin.target.className = newClass
        } else {
            for (let index = 0; index < getColorsPaletteElements.length; index += 1){
                if (String(getColorsPaletteElements[index].className).includes('selected')) {
                   let newClass = String(getColorsPaletteElements[index].className.replace('selected', ''))
                   getColorsPaletteElements[index].className = newClass;
                }
            }
            eventOrigin.target.className += 'selected'
        }
           return clickedColor
    } 
})