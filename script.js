window.onload  = function(){
   let selecao = document.getElementById('black');
   selecao.className += ' selected';

}

let clickSelection = document.getElementById('color-palette');
clickSelection.addEventListener('click', selectColor);

function selectColor(eventoDeOrigem){
    let clickID = eventoDeOrigem.target.id;
    document.getElementById('black').className ='color';
    document.getElementById('green').className ='color';
    document.getElementById('blue').className ='color';
    document.getElementById('cyan').className ='color';
    
    if (clickID === 'black' || clickID === 'green' || clickID === 'blue' || clickID === 'cyan'){
        document.getElementById(clickID).className = 'color selected';
    }
}

let targetColor = document.getElementById('pixel-board')
targetColor.addEventListener('click', changeColor)

function changeColor(eventCreu){
    let paint = document.querySelector('.selected').id;
    eventCreu.target.style.backgroundColor = paint;
}

let clickClearButon = document.getElementById('clear-board');
clickClearButon.addEventListener('click', clearMan)

function clearMan(){
   let rexona = document.querySelectorAll('.pixel')
   for (let index = 0; index < rexona.length; index += 1) {
       rexona[index].style.backgroundColor = 'white';       
   }
   console.log(rexona)
}