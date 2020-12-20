const boxPallet = document.querySelector('#color-palette');


//cria a caixa tabela da paleta
const palletColors = 4;
function boxPalletCollors() {
    for (let index = 0; index < palletColors; index += 1) {
        const boxCollors = document.createElement('div');
        boxCollors.className = 'box color';
        boxPallet.appendChild(boxCollors);
    }
}
boxPalletCollors();

//coloca cores aleatorias as paletas
function randonColor() {
    const randonFirstColor = parseInt(Math.random() * 255, 10);
    const randonSecondColor = parseInt(Math.random() * 255, 10);
    const randonThirdColor = parseInt(Math.random() * 255, 10);
    return `rgb(${randonFirstColor}, ${randonSecondColor}, ${randonThirdColor})`
}

function coresRandon() {
    let color1 = document.querySelectorAll('.color')[0].classList.add('color1');
    let color2 = document.querySelectorAll('.color')[1].classList.add('color2');
    let color3 = document.querySelectorAll('.color')[2].classList.add('color3');
    let color4 = document.querySelectorAll('.color')[3].classList.add('color4');
    document.querySelector('.color1').style.backgroundColor = 'black';
    document.querySelector('.color2').style.backgroundColor = randonColor();
    document.querySelector('.color3').style.backgroundColor = randonColor();
    document.querySelector('.color4').style.backgroundColor = randonColor();
}

//criar a tablec
function table() {
    let numLines = [1, 2, 3, 4, 5];
    let tabela = document.createElement('table');
    let boardPixel = document.querySelector('#pixel-board');
    boardPixel.appendChild(tabela);
    for (let index = 0; index < numLines.length; index++) {
        let lines = document.createElement('tr')
        tabela.appendChild(lines)
        for (let index = 0; index < numLines.length; index++) {
            let col = document.createElement('td')
            col.className = 'pixel'
            lines.appendChild(col)
        }
    }
}
table();

//escutador de eventos
function listerner(evnt) {
    
}

function clear() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.style.backgroundColor = 'white';
}

//random color carregando a pagina
window.onload = function() {
    coresRandon();
    clear();
}

//
