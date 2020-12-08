window.onload = function() {
    
    setEvents();
}

function setEvents() {
    setPaletteEvent();
    setBoardEvent();
}

function setBoardEvent() {
    let divElements = document.querySelector('#pixel-board');
    console.log(divElements);
    divElements.addEventListener("click", changeSelectedColor);
}

function setPaletteEvent() {
    let divElements = document.querySelector('#color-palette');
    divElements.addEventListener("click", changeSelectedColor);
}

function changeSelectedColor(event) {
    let divElements = document.querySelectorAll('#color-palette div');
    divElements = removeAllSelections(divElements);
    event.target.className = event.target.className + ' selected';
    console.log(event.target);
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