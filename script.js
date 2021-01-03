window.onload = function() {
    selectedColor()
    paintPixel ()
    clearBoardButton()
};
 
function selectedColor () {
    let cColor = document.getElementsByClassName('color');
    let cSelectedColor = document.getElementsByClassName('selected color');

 for ( let count = 0 ; count < cColor.length ; count +=1) {
    cColor[count].addEventListener ('click' , function(event) {
        for ( let cnt = 0 ; cnt < cSelectedColor.length ; cnt += 1 ) {
            cSelectedColor[cnt].classList.remove('selected');
            console.log('Oi');
        }

        event.target.classList.add ('selected');
    });
 }
}

function paintPixel () {
     let cPixel = document.getElementsByClassName('pixel');

     for ( let count = 0 ; count < cPixel.length ; count +=1 ) {
         cPixel[count].addEventListener ('click' , function (event) {
            let styleSelectedColor = window.getComputedStyle(document.querySelector('.selected.color'));
            let selectedColorBGC = styleSelectedColor.backgroundColor;

             event.target.style.backgroundColor = selectedColorBGC;

         })
     }
 }

function clearBoardButton() {
    let clearButton = document.getElementById('clear-board');

    clearButton.addEventListener('click' , function(event) {
        
        let pixels = document.
        getElementsByClassName('pixel')

        for ( let counter = 0 ; counter < pixels.length ; counter += 1 ) {
            pixels[counter].style.backgroundColor = 'white';
        }

    })

}
