listenToColorPaletteSection();

function listenToColorPaletteSection () {
    const colorPaletteSection = document.querySelector('#color-palette')

    colorPaletteSection.addEventListener('click', toggleSelectedClass)
}

function toggleSelectedClass (event) {
    const colorDivsNodeList = document.querySelectorAll('.color')

    for (let i = 0; i < colorDivsNodeList.length; i++) {
        colorDivsNodeList[i].classList.remove('selected')
    }
    
    event.target.classList.add('selected')
}