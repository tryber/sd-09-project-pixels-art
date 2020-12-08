let pixelBoard = document.getElementsByClassName('pixel');
    pixelBoard.addEventListener('click', selectColor);

function selectColor() {
    let selectedList = document.getElementsByClassName('selected');
    let colors = document.getElementsByClassName('color')

    colors.addEventListener('click', function(event) {
        if (selectedList.length === 1) {
            for (let index = 0; index < selectedList.length; index += 1) {
                selectedList[index].className = 'color';
            }

            event.target.className = 'color selected';
            console.log(event.target.className);
        } else {
            event.target.className = 'color'
            console.log(event.target.className);
        }
    })



}

selectColor();
