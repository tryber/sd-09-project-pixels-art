window.onload = function() {
    let blackSquare = document.querySelector('.color');
    blackSquare.className = 'color selected';
}

function removeColorSelection(){
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event){
        let colorSelected = document.querySelector('.selected');
        colorSelected.className = 'color';
    });
}

removeColorSelection()

function selectColor(){
    let colorSelected = document.querySelector('.color', '.selected');
    colorSelected.className = 'color';
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event){
        let eventClass = event.target.className;
        if (eventClass !== ''){
            event.target.className = 'color selected';
        }        
    });
};

selectColor();