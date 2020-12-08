window.onload = function() {
    let divPai = document.querySelector('#pixel-board');

    function addTabela(){
        for (let index = 1; index <= 5; index += 1 ){
            let lineDiv = document.createElement('div');
            for (let seconIndex = 1; seconIndex <= 5; seconIndex += 1){
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                lineDiv.appendChild(pixel)
            }
            divPai.appendChild(lineDiv)
        }
    }
    addTabela()
    
}