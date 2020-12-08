window.onload = teste (5, 5)

    function teste (width, height){
    let numberOfLines = width;
    let numberOfColumns = height;
    let getPixelBoard = document.getElementById('pixel-board');
    
    fillPixelBoard()

    //cria 1 pixel
    function createPixel (){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.width = '38px';
        pixel.style.height = '38px';
        pixel.style.background = 'white'
        return pixel 
    }

    // acrescentar o número de linhas no pixelboard
    function fillPixelBoard(){
        for (let index = 0; index < numberOfLines; index += 1){
            let lines = document.createElement('div');
            lines.className = 'lines';
            //acrescentar o número de colunas nas linhas 
            for(let index = 0; index < numberOfColumns; index += 1){
                let pixel = createPixel();
                lines.appendChild(pixel);
            };
            getPixelBoard.appendChild(lines);
        }
    }


}