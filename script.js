const colorBlack = document.querySelectorAll('.color')[0];
colorBlack.classList.add('selected');
const allPixels = document.querySelectorAll('.pixel');



function selectedColor() {
    let allColors = document.querySelectorAll('.color');
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener('click', (event) => {
            for (let i = 0; i < allColors.length; i++) {
                allColors[i].className = 'color'
            }
            switch (allColors[i].className) {
                case 'color':
                    allColors[i].classList.add('selected')
                    break;
            
            }
        })
    }
}

function coloredPixels() {
    let pixels = document.querySelectorAll('.pixel')
    let selectedColor = document.querySelector('.selected');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', () => {
            let colorContainer = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue("background-color");
        pixels[i].style.backgroundColor = colorContainer;
        console.log(colorContainer)

    })
}
}


function clearColor() {
    let clearButton = document.querySelector('#clear-board');


    clearButton.addEventListener('click', ()=> {
        let pixels = document.querySelectorAll('.pixel');
        for(let i = 0; i < pixels.length; i++) {
            document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
        }
    })

}




coloredPixels();
selectedColor();
clearColor();