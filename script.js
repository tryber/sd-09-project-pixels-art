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
    function adicionaEventos(){
        let divsPixels = document.querySelectorAll('.pixel');
        let elementoBlack = document.querySelector('.black');
        elementoBlack.className += ' selected'

        for (let index = 0; index < divsPixels.length; index += 1){
            divsPixels[index].addEventListener('click', function(){
                divsPixels[index].className += ' fistBG';
            });
        }
    }
    adicionaEventos()
    let corSelected = '';
    function escolheACor(){
        let color = document.querySelectorAll('.color');
        for (let index = 0; index < color.length; index += 1){
            color[index].addEventListener('click', function(event){
                for(let second = 0; second < color.length; second += 1){
                    color[second].classList.remove('selected')
                }
                color[index].classList.toggle('selected');
                corSelected = event.target.id;
            })
        }
        
    }
   escolheACor()

   let pixel = document.querySelectorAll('.pixel');
   function pintaOPixel(){
       for(let index = 0; index < pixel.length; index += 1){
            pixel[index].addEventListener('click', function(){
                pixel[index].style.backgroundColor = corSelected;
            })
       }
   }
   pintaOPixel()

   function clearBoard() {
       let botaoClear = document.querySelector('#clear-board');
       botaoClear.addEventListener('click', function(){
        for(let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white'
        }
       })      
   }
   clearBoard()
}

