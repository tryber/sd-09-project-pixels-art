window.onload = function() {
    function colorPalette() {
        let color = document.querySelectorAll('.color')
        color[0].style.backgroundColor = 'black'
        color[1].style.backgroundColor = 'steelblue'
        color[2].style.backgroundColor = 'red'
        color[3].style.backgroundColor = 'yellow'
    }
    colorPalette();
    
    let pixelBoard = document.querySelector('#pixel-board')

    function createdPixelLine(line) {
        for (let index = 0; index < 5; index += 1) {
            let createdElement = document.createElement('div')
            createdElement.className = 'pixel'
            line.appendChild(createdElement)
        }
    }

        function createdPixelColumn() {
            for (let index = 0; index < 5; index += 1) {
                let line = document.createElement('div')
                line.className = 'line'
                pixelBoard.appendChild(line)
                createdPixelLine(line)
            }
        }
        createdPixelColumn();
}
    
