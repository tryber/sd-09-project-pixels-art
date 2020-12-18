var selectedColor = document.querySelector('.selected');
const colors = document.getElementsByClassName('color');
const palette = document.getElementById('color-palette');
const list = document.getElementById('pixel-board');
const itens = list.getElementsByClassName('pixel')
const clearButton = document.getElementById('clear-board')

function transferSelected(originaryEvent) {
    for(let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected')
        if (originaryEvent.target === colors[i] && colors[i].classList[2] != 'selected') {
            document.getElementsByClassName('color')[i].className += ' selected';
            selectedColor = document.querySelector('.selected')
        }
    }
}

palette.addEventListener('click', transferSelected)

function paint(originaryEvent) {
    for(i = 0; i < itens.length; i += 1) {
        if (originaryEvent.target === itens[i]) {
            itens[i].style.backgroundColor = getComputedStyle(selectedColor).backgroundColor
        }
    }
}

list.addEventListener('click', paint)

function clear() {
    for(i = 0; i < itens.length; i += 1) {
        itens[i].style.backgroundColor = 'white'
    }
}
clearButton.addEventListener('click', clear)
