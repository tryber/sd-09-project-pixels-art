function removeSelectedClass() {
    let clickP = document.querySelectorAll('.color')

    for (let i = 0; i < clickP.length; i+= 1) {
        clickP[i].classList.remove('selected')
    }
}


function recebeClick(event) {
    // objeto evento
    event.target.classList.add('selected')
}


//adicionando evento para o pai
function listenToColors(){
    let clickP = document.querySelector('#color-palette');
    clickP.addEventListener('click', removeSelectedClass)
    clickP.addEventListener('click', recebeClick);
}
listenToColors();
// Criando a função recebe click
//Criando  evento para os 25 pixels
let clickQ = document.getElementById('pixel-board');
clickQ.addEventListener('click', recebeClicks);

function recebeClicks(Evento) {
    console.log('Eu sou vasco');
}

