const tabela = document.querySelector('#pixel-board');

function pixelTable(linha) {
    for(let i = 0; i < 5; i += 1){
        const quadrado = document.createElement('div');
        quadrado.className = 'pixel';
        linha.appendChild(quadrado);

    }

}

function fiveTimesLine() {
    for(let i = 0; i < 5; i += 1) {
        const linha = document.createElement('div');
        linha.className = 'LinesPixel'
        pixelTable(linha)
        tabela.appendChild(linha)
    }
}
fiveTimesLine()