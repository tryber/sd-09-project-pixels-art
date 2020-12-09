window.onload = matrix (5, 5), paintPallete(), firstColor ()

function matrix (width, height){
    
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
            getPixelBoard.appendChild(lines);


            for(let index = 0; index < numberOfColumns; index += 1){
            let pixel = createPixel()
            let columns = document.createElement('div');
            columns.className = 'columns';
            columns.appendChild(pixel)
            lines.appendChild(columns);
            };
        }

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

getColorsPaletteDiv.addEventListener('click', recebeclick)

function recebeclick(eventOrigin){

    if (eventOrigin.target.id !== 'color-palette'){

        let clickedColorClassNameString = String(eventOrigin.target.className);
        let clickedColorClassName = eventOrigin.target.className;
        let clickedColor = eventOrigin.target.style.backgroundColor
        let getColorsPaletteElements = document.querySelectorAll('.color');

        if (clickedColorClassNameString.includes('selected')){
            let newClass = String(clickedColorClassName.replace('selected', ''));
            eventOrigin.target.className = newClass
        } else {        
            for (let index = 0; index < getColorsPaletteElements.length; index += 1){
                if (String(getColorsPaletteElements[index].className).includes('selected')){
                    let newClass = String(getColorsPaletteElements[index].className.replace('selected', ''));
                    getColorsPaletteElements[index].className = newClass 
                    }
            }
            eventOrigin.target.className += 'selected'
            }
        
    } 
    return eventOrigin.target.style.backgroundColor
}
