const boxPallet = document.querySelector('#color-palette');
const divPixels = document.querySelector('#pixel-boards')

//cria a caixa tabela da paleta
const palletColors = 4;
function boxPalletCollors() {
    for (let index = 0; index < palletColors; index += 1) {
        const boxCollors = document.createElement('div');
        boxCollors.className = 'box color';
        boxPallet.appendChild(boxCollors);
    }
}
//adiciona cor classe de cor fixa ao primeiro filho
function firstPallet() {
    const firstCollor = document.querySelector('.color');
    firstCollor.style.backgroundColor = 'black';
}


boxPalletCollors()
firstPallet()