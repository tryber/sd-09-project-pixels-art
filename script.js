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
        pixel.style.display = 'inline-block';
        return pixel
    }

    for(let widthIndex = 0; widthIndex < width; widthIndex += 1){
        for (let heightIndex = 0; heightIndex < height; heightIndex += 1){
            pixelBoardWidth.className = 'pixel-board-width';
            pixelBoardWidth.style.lineHeight = '0'
            let pixel = createPixel();
            pixelBoardWidth.appendChild(pixel)
        }

        getPixelBoard.appendChild(pixelBoardWidth)
        pixelBoardWidth = document.createElement('div');

    }
}

function paintPallete(){
    let getColorsPaletteElements = document.querySelectorAll('.color')
    for (let index = 0; index < getColorsPaletteElements.length; index += 1){
        if (index === 0){
            getColorsPaletteElements[index].style.backgroundColor = 'black'
        } else if (index === 1){
            getColorsPaletteElements[index].style.backgroundColor = '#049CD8'
        } else if (index === 2){
            getColorsPaletteElements[index].style.backgroundColor = 'white'
        } else if (index === 3){
            getColorsPaletteElements[index].style.backgroundColor = '#FBD000'
        } else if (index === 4){
            getColorsPaletteElements[index].style.backgroundColor = '#E52521'
        } else if (index === 5){
            getColorsPaletteElements[index].style.backgroundColor = '#0066cc'
        } else if (index === 6){
            getColorsPaletteElements[index].style.backgroundColor = '#43B047'
        } else if (index === 7){
            getColorsPaletteElements[index].style.backgroundColor = '#f6c883'
        } else if (index === 8){
            getColorsPaletteElements[index].style.backgroundColor = '#854f2b'
        } else if (index === 9){
            getColorsPaletteElements[index].style.backgroundColor = '#00c0c0'
        } 
    }
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
getColorsPaletteDiv.addEventListener('click', selectColor)

function selectColor (colorOrigin){

    if (colorOrigin.target.id !== 'color-palette'){

        let clickedColorClassNameString = String(colorOrigin.target.className);
        let getColorsPaletteElements = document.querySelectorAll('.color');
        
        if (!clickedColorClassNameString.includes('selected')) {
            for (let index = 0; index < getColorsPaletteElements.length; index += 1){
                if (String(getColorsPaletteElements[index].className).includes('selected')) {
                   let newClass = String(getColorsPaletteElements[index].className.replace('selected', ''))
                   getColorsPaletteElements[index].className = newClass;
                }
            }
            colorOrigin.target.className += 'selected'
        }
    } 
}

let getPixelBoard = document.querySelector('#pixel-board')
getPixelBoard.addEventListener('click', paintPixel)

function paintPixel (pixelOrigin){
    let getPixel = pixelOrigin.target 
    if (getPixel.className === 'pixel'){
        let getColorSelected = document.querySelector('.selected').style.backgroundColor
        getPixel.style.backgroundColor = getColorSelected
    }
}

let getClearButton = document.querySelector('#clear-board');
getClearButton.addEventListener('click', clear)

function clear (){
    let getPixel = document.getElementsByClassName('pixel')
    for (let index in getPixel){
        getPixel[index].style.backgroundColor = 'white'
    }
}

let getGoButton = document.querySelector('#go-button');
getGoButton.addEventListener('click', go)

function go (){
    let numberOfColumns = document.getElementById('colunas').value
    let numberOfLines = document.getElementById('linhas').value
    let pixelBoard = document.getElementById('pixel-board')
    pixelBoard.innerHTML = ''
    matrix(numberOfLines, numberOfColumns)
}
