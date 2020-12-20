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

//adiciona cor classe de cor fixa ao primeiro filho
function firstPalletBlack() {
    const firstCollor = document.querySelector('.color');
    firstCollor.style.backgroundColor = 'black';
}
firstPalletBlack();

//coloca cores aleatorias as paletas
const colorDaClasse = document.querySelectorAll('.color');
function randonColor() {
    for (let index = 1; index < colorDaClasse.length; index += 1) {
        const randonFirstColor = parseInt(Math.random() * 255, 10);
        const randonSecondColor = parseInt(Math.random() * 255, 10);
        const randonThirdColor = parseInt(Math.random() * 255, 10);
        colorDaClasse[index].style.backgroundColor = `rgb(${randonFirstColor}, ${randonSecondColor}, ${randonThirdColor})`;
    }
}
randonColor();

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

//random color carregando a pagina
window.onload = function() {
    randonColor();
}

//
