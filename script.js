window.onload = function() {
    
    setEvents();
}

function setEvents() {
    setPaletteEvent();
    setBoardEvent();
    let clearButton = document.querySelector('#clear-board');
    clearButton.addEventListener('click', clearBoardOfPixels);
}

function clearBoardOfPixels() {
    let mainColor = 'white';
    let classPosition = 1;
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].className = pixels[index].className.replace(pixels[index].classList[classPosition], mainColor);
    }
}

function setBoardEvent() {
    let divElements = document.querySelector('#pixel-board');
    divElements.addEventListener('click', changePixelColor);
}

function changePixelColor(event) {
    if (!(event.target.className === '' || event.target.className === null)) {
        let colorPosition = 1;
        let selected = document.querySelector('.selected');
        event.target.className = event.target.className.replace(event.target.classList[colorPosition], selected.classList[colorPosition]);
    }
}

function setPaletteEvent() {
    let divElements = document.querySelector('#color-palette');
    divElements.addEventListener('click', changeSelectedColor);
}

function changeSelectedColor(event) {
    let classSelected = 'selected';
    if (!(event.target.className === "" || event.target.className === null)) {
        let divElements = document.querySelectorAll('#color-palette div');
        divElements = removeAllSelections(divElements);
        event.target.className = event.target.className + ' ' + classSelected;
    }
}

function removeAllSelections(divElements) {
    let replacePosition = 2;
    let lengthOfClassList = 3;
    for (let index = 0; index < divElements.length; index += 1) {
        if (divElements[index].classList.length === lengthOfClassList) {
            divElements[index].classList.remove(divElements[index].classList[replacePosition])
        }
    }
    return divElements
}