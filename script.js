window.onload = function() {
    let blackSquare = document.querySelector('.color');
    blackSquare.className = 'color selected';

    let palletColor = document.getElementsByClassName('color');
    palletColor[0].style.backgroundColor = 'black';

    //injects white background-color to .pixel div's
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }

    // injects random colors in .color div's
    for (let index = 1; index < palletColor.length; index += 1){
        palletColor[index].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    }
};

function removeColorSelection(){
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event){
        let colorSelected = document.querySelector('.selected');
        colorSelected.className = 'color';
    });
};

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


function coloringPixel() {
    const divs = document.querySelectorAll('.pixel');
    for(let index of divs){
        index.addEventListener('click' ,function(event){
            let color = document.querySelector('.selected');
            color = window.getComputedStyle(color, null);

            event.target.style.backgroundColor = color.backgroundColor;
        })
    }
}

coloringPixel();