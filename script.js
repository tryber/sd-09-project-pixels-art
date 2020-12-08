window.onload = function() {
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event) {
        let colors = document.querySelectorAll('.color')
        for(let index in colors) {
            if (event.target === colors[index]) {
                let selected = document.querySelector('.selected');
                selected.classList.remove('selected');
                event.target.classList.add('selected');
            }
        }
    });
    
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.addEventListener('click', function(event) {
        if (event.target.className === 'pixel') {
            let color = document.querySelector('.selected');
            event.target.style.backgroundColor = color.classList[1];
        }
    });
}