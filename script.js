window.onload = function() {
    let color = 'black';
    let selectionColor = document.querySelector('#color-palette');
    selectionColor.addEventListener('click', function (event) {
        let colorSelection = event.target.className
        for (let x = 6; x < colorSelection.length;  x += 1){
            if (x === 6){
                color = '';
            }
            color += colorSelection[x];
        }
    });    
    let pixels = document.querySelectorAll('.pixel');
    for (let x = 0; x < pixels.length; x += 1) {
        pixels[x].addEventListener('click', function (event) {
            event.target.style.backgroundColor = color; 
        });  
    }
}
