function randColor() {
    let setOfColors = [];
    setOfColors[0] = 'rgb(0 , 0 , 0)';
    for(let index = 1; index < 4;) {
        let r = Math.floor(Math.random() * 255 + 1);
        let g = Math.floor(Math.random() * 255 + 1);
        let b = Math.floor(Math.random() * 255 + 1);
        if ((r+g+b) < 720 && (r+g+b) > 75) {
            setOfColors[index] = `rgb(${r} , ${g} , ${b})`;
            if (setOfColors[index] !== (setOfColors[index-1] && setOfColors[index-2] && setOfColors[index-3])) {
                index += 1;
            }
        }
    }
    return setOfColors;
}

function paletteGen() {
    for(let index = 0; index < 4; index += 1) {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'color';
        document.body.querySelector('#color-palette').appendChild(makeDiv);
    }
}

function setColors(){
    let boxNoColor = document.querySelectorAll('div .color');
    for (let index = 0; index < boxNoColor.length; index += 1){
        document.querySelectorAll('div .color')[index].style.backgroundColor = randColor()[index];
    }
}

function paintingFrame(){
    for(let index = 0; index < 25; index +=1) {
        let emptyBox = document.createElement('div');
        emptyBox.className = 'pixel';
        document.body.querySelector('#pixel-board').appendChild(emptyBox);
    }
    
}

paletteGen();
setColors();
paintingFrame();