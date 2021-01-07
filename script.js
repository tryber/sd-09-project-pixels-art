// Seleciona a cor black ao carregar a pagina.
window.onload = function() {
    // Seleciona a cor preta ao iniciar e adiciona ao elemento.
    let selectedBlack = document.querySelector('.color.black');
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.addEventListener('click',function(event) {
        event.target.style.backgroundColor = getComputedStyle(selectedBlack).backgroundColor;
    })

    // Seleciona uma cor da paleta e adiciona ao elemento.
    // let colorPalette = document.querySelector('#color-palette')
    // let pixelBoard = document.querySelector('#pixel-board');
    // pixelBoard.addEventListener('click',function(event) {
    //     event.target.style.backgroundColor = getComputedStyle(colorPalette).backgroundColor;
    // })


}

// Seleciona a cor ao clicar.
// let selected = document.querySelector('#color-palette');
// selected.addEventListener('click', addColor);

// Função adicionar classe
// function addClass () {
//     selected.addClass = selected;
// }

// Função adicionar cor.
// function addColor (event) {
//     event.target.style.backgroundColor = selected.style.backgroundColor;
// }

// Adiciona a cor selecionada em line-board.
// let pixelBoard = document.querySelectorAll('.pixel');
// pixelBoard.addEventListener('click', addColor);
// for (let index = 0; index < pixelBoard.length; index += 1) {
//     selected.style.backgroundColor = pixelBoard[index];
// }
