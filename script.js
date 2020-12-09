window.onload = function () {
    const colorSelected = document.querySelector('.black');
    colorSelected.classList.add('selected')
}

function grid(){
    const gridBase = document.querySelector("#pixel-board");
    const gridN = 5;

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
const paletteRed = document.getElementsByClassName('red')[0]
const paletteGreen = document.getElementsByClassName('green')[0]
const paletteBlue = document.getElementsByClassName('blue')[0]
paletteBlack.addEventListener('click', colorPaletteSelector)
paletteRed.addEventListener('click', colorPaletteSelector)
paletteGreen.addEventListener('click', colorPaletteSelector)
paletteBlue.addEventListener('click', colorPaletteSelector)

function colorPaletteSelector(chosenColor) {
    const chosenPaletteColor = chosenColor.target;
    const previousColorSelected = document.querySelector('.selected');
    previousColorSelected.classList.remove('selected');
    chosenPaletteColor.classList.add('selected');
}
function pixelColoring(chosenPixel) {
    const pixelSelected = chosenPixel.target;
    const chosenPaletteColor = document.querySelector('.selected').classList[1];
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