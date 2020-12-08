window.onload = function() {
    function colorPalette() {
        let color = document.querySelectorAll('.color')
        color[0].style.backgroundColor = 'black'
        color[1].style.backgroundColor = 'steelblue'
        color[2].style.backgroundColor = 'red'
        color[3].style.backgroundColor = 'yellow'
    }
    colorPalette();

    function createdPixelLine() {
        let pixelBoard = document.querySelector('#pixel-board')
        for (let index = 0; index < 5; index += 1) {
            let createdElement = document.createElement('div')
            pixelBoard.appendChild(createdElement)
            createdElement.className = 'pixel line'
            }
        }
        createdPixelLine()

        function createdPixelColumn() {
            let pixelBoard = document.querySelectorAll('.pixel.line')
            for (let index = 0; index < pixelBoard.length; index += 1) {
                for (let indexTwo = 0; indexTwo < 5; indexTwo += 1) {
                let createdElement = document.createElement('div')
                pixelBoard[index].appendChild(createdElement)
                createdElement.className = 'pixel column'
                }
                }
            }
            createdPixelColumn()
}
