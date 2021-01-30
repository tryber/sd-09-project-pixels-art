function criarQuadro () {
    for (index = 0 ; index < 5 ; index += 1) {
        let linha = document.createElement('tr');
        linha.className = 'pixel';
        let pixelBoard = document.getElementById('pixels-board');
        pixelBoard.appendChild(linha);
        for (index2 = 0; index2 < 5; index2 += 1) {
            let coluna = document.createElement('td');
            coluna.className = 'pixel';
            document.getElementById('pixels-board').appendChild(coluna);
        }

    }
    
}

criarQuadro();