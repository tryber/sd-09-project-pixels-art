window.onload  = function(){
   let selecao = document.getElementById('black');
   selecao.className += ' selected';

}

let clickSelection = document.getElementById('color-palette');
clickSelection.addEventListener("click", changeColor);

function changeColor(eventoDeOrigem){
    let clickID = eventoDeOrigem.target.id;
    document.getElementById('black').className ='color';
    document.getElementById('green').className ='color';
    document.getElementById('blue').className ='color';
    document.getElementById('cyan').className ='color';
    
    if (clickID === 'black' || clickID === 'green' || clickID === 'blue' || clickID === 'cyan'){
        document.getElementById(clickID).className = 'color selected';
    }
}
