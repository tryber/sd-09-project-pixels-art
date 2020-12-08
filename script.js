const colorBlack = document.querySelectorAll('.color')[0];



function selectedColor() {
    let allColors = document.querySelectorAll('.color');
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener('click', () => {

            switch (allColors[i].className) {
                case 'color':
                    allColors[i].classList.add('selected')
                    break;
            
                default:
                    allColors[i].className = 'color';
                    break;
            }
        })
    }
}





selectedColor();
