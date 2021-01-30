function criarQuadro () {
    
        for (index = 0; index < 5; index += 1) {
            let coluna = document.createElement('div');
            coluna.className = 'coluna';
            document.getElementById('pixel-board').appendChild(coluna);
            for (index2 = 0; index2 < 5; index2 += 1) {
                let linha = document.createElement('div');
                linha.className = 'pixel';
                document.getElementById('pixel-board').appendChild(linha);
            }
        }
    }
    


criarQuadro();