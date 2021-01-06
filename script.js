window.onload = function () {
    const colorSelected = document.querySelector('.black');
    colorSelected.classList.add('selected')
    const randomPalette = document.querySelectorAll('.random');
    for (let index = 0; index<randomPalette.length; index++) {
        let randomColor = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
        randomPalette[index].style.backgroundColor = randomColor;
        console.log(randomColor)
    }
    randomPalette[0].style.backgroundColor = "black";

}
function grid(gridN = 5){
    const gridBase = document.querySelector("#pixel-board");
    for (let index = 0; index < gridN; index++){
        const rowPixel = document.createElement("div");
        gridBase.appendChild(rowPixel)
        rowPixel.className += "row-pixel"
        for (let nIndex = 0; nIndex < gridN; nIndex++){
            const pixelCell =document.createElement("div");
            rowPixel.appendChild(pixelCell)
            pixelCell.className += "pixel"
            pixelCell.addEventListener('click', pixelColoring)
        }
    }

}
grid()
const paletteBlack = document.getElementsByClassName('black')[0]
const paletteSecond = document.getElementsByClassName('second')[0]
const paletteThird = document.getElementsByClassName('third')[0]
const paletteFourth = document.getElementsByClassName('fourth')[0]
paletteBlack.addEventListener('click', colorPaletteSelector)
paletteSecond.addEventListener('click', colorPaletteSelector)
paletteThird.addEventListener('click', colorPaletteSelector)
paletteFourth.addEventListener('click', colorPaletteSelector)

function colorPaletteSelector(chosenColor) {
    const chosenPaletteColor = chosenColor.target;
    const previousColorSelected = document.querySelector('.selected');
    previousColorSelected.classList.remove('selected');
    chosenPaletteColor.classList.add('selected');
}
function pixelColoring(chosenPixel) {
    const pixelSelected = chosenPixel.target;
    const chosenPaletteColor = document.querySelector('.selected').style.backgroundColor;
    pixelSelected.style.backgroundColor = chosenPaletteColor;
}

const buttonClear = document.getElementById('clear-board')
buttonClear.addEventListener('click', clearPixelBoard)

function clearPixelBoard () {
    // const gridN = 5
    // for (let index = 0; index<gridN; index++){
    //     for (let pixelIndex = 0; pixelIndex<gridN; pixelIndex++){

    //     }
    // }
    const pixelList = document.getElementsByClassName("pixel")
    for (let index = 0; index<pixelList.length; index++){
        pixelList[index].style.backgroundColor = 'white'
    }
}

const inputSize = document.getElementById('board-size');
// inputSize.addEventListener('change', inputSizeBoard);
const generateBoardButton = document.getElementById('generate-board');
generateBoardButton.addEventListener('click', generateBoard)
function generateBoard() {
    if ( inputSize.value>0 ){
        if (inputSize.value < 5) {
            inputSize.value = 5;
        }
        else if (inputSize.value > 50) {
            inputSize.value = 50;
        }
        const pixelItems = document.querySelectorAll('.pixel')
        for (let index = 0; index<pixelItems.length; index++){
                pixelItems[index].remove()
            }
        grid(inputSize.value);
        
    } else if (inputSize.value !== null){
        alert('Board inválido!');
    }
    inputSize.value = null;
}
