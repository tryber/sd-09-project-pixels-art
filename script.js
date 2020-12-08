// let pixelBoard = document.getElementsByClassName('pixel');
//     pixelBoard.addEventListener('click', selectColor);

function selectColor() {
    let selectedColor = document.getElementsByClassName('color selected');
    let colors = document.getElementsByClassName('color')

    for (let index = 0; index < colors.length; index += 1) {
        colors[index].addEventListener('click', function(event) {

            for (let index = 0; index < selectedColor.length; index +=1) {
                selectedColor[index].className = 'color';
            }

            event.target.className = 'color selected';
            console.log(event.target.className);
        })
    }
}

selectColor();
