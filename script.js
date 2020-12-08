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
        }
    }

}
grid()
const paletteBlack = document.getElementsByClassName('black')[0]
const paletteRed = document.getElementsByClassName('red')[0]
const paletteGreen = document.getElementsByClassName('green')[0]
const paletteBlue = document.getElementsByClassName('blue')[0]
paletteBlack.addEventListener('click', colorSelector)
paletteRed.addEventListener('click', colorSelector)
paletteGreen.addEventListener('click', colorSelector)
paletteBlue.addEventListener('click', colorSelector)
function colorSelector(chosenColor) {
    const chosenPaletteColor = chosenColor.target;
    const previousColorSelected = document.querySelector('.selected');
    previousColorSelected.classList.remove('selected');
    chosenPaletteColor.classList.add('selected');
    



}