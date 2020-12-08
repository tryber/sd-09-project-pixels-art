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

    // function createBox(number) {
    //     const divFather = document.querySelector('#color-palette');
    //     const boxColor = document.createElement('div');
    //         boxColor.className = 'color';
    //         boxColor.style.backgroundColor = 'rgb(0, 0, 0)';
    //         divFather.appendChild(boxColor);
    //     for (let index = 0; index < number; index += 1){
    //         const boxColor = document.createElement('div');
    //         boxColor.className = 'color';
    //         boxColor.style.backgroundColor = getRandomColor();
    //         divFather.appendChild(boxColor);
    //     }
    // }
    // createBox(3);

    function createBox(classN, color, father, number) {
        for (let index = 0; index < number; index += 1){
            const boxColor = document.createElement('div');
            boxColor.className = classN;
            boxColor.style.backgroundColor = color;
            father.appendChild(boxColor);
        }
        
    }
    function palette(number){
        const divFather = document.querySelector('#color-palette');
        createBox('color selected','rgb(0, 0, 0)', divFather, 1)
        for (let index = 0; index < number; index += 1) {
            createBox('color', getRandomColor(), divFather, 1)
        }
    }
    palette(3);

    function createBoard(height, width) {
        const divFather = document.querySelector('#pixel-board');
        for (let indexS = 0; indexS < height; indexS += 1){
            const board = document.createElement('section');
            board.className = 'line'
            divFather.appendChild(board);
            const fatherBox = document.querySelectorAll('.line')
            for (let index = 0; index < width; index += 1) {
                createBox('pixel', 'white', fatherBox[indexS], 1)
            }
        }
    }
    createBoard(5, 5);

}