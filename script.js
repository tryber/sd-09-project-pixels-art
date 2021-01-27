//Click
let clickP = document.getElementById('color-palette');
clickP.addEventListener('click', recebeClick);
// Criando a função recebe click
function recebeClick(eventoDeOrigem) {
    // objeto evento
    console.log('Eu sou preto');
}
//Criando  evento para os 25 pixels
let clickQ = document.getElementById('pixel-board');
clickQ.addEventListener('click', recebeClicks);

function recebeClicks(Evento) {
    console.log('Eu sou vasco');
}

