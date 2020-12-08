function grid(){
    const gridBase = document.querySelector("#pixel-board");
    const gridN = 5;

    for (let index = 0; index < gridN; index++){
        const rowPixel = document.createElement("div");
        gridBase.appendChild(rowPixel)
        for (let nIndex = 0; nIndex < gridN; nIndex++){
            const pixelCell =document.createElement("div");
            rowPixel.appendChild(pixelCell)
            pixelCell.className += "pixel"
        }
    }

}
grid()