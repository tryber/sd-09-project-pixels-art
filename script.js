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
boxPalletCollors()

//adiciona cor classe de cor fixa ao primeiro filho
function firstPalletBlack() {
    const firstCollor = document.querySelector('.color');
    firstCollor.style.backgroundColor = 'black';
}
firstPalletBlack()

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
randonColor()

//insere class ao box pixels
function pixelsBox() {
    let linePixels = document.querySelectorAll('tr')
    let colPixels = document.querySelectorAll('td')
    for (let index = 0; index < colPixels.length; index += 1) {
        let pixels = colPixels[index]
        pixels.className = 'pixel'
    }
}
pixelsBox()

//random color carregando a pagina
window.onload = function() {
    randonColor()
}
