window.onload = function() {
    //Referencia Random Color:
    // https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    function createBox(number) {
        const boxDiv = document.querySelector('#color-palette');
        const boxColor = document.createElement('div');
            boxColor.className = 'color';
            boxColor.style.backgroundColor = 'rgb(0, 0, 0)';
            boxDiv.appendChild(boxColor);
        for (let index = 0; index < number; index += 1){
            const boxColor = document.createElement('div');
            boxColor.className = 'color';
            boxColor.style.backgroundColor = getRandomColor();
            boxDiv.appendChild(boxColor);
        }
    }
    createBox(3);
}