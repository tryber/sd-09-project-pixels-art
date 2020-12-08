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
    
    function createdPixelLine() {
        for (let index = 0; index < 25; index += 1) {
            let createdElement = document.createElement('div')
            if (index < 5) {
            createdElement.classList = 'pixel line'
            } else {
                createdElement.classList = 'pixel column'
            }
            pixelBoard.appendChild(createdElement)
            }
        }
        createdPixelLine();
        
}
    
