//Removendo o selected do anterior e passando para o proximo
function removeSelectedClass() {
    //Recebe todos os elementos com a classe .color
    let recuperandoAClasseColor = document.querySelectorAll('.color')

    for (let i = 0; i < recuperandoAClasseColor.length; i+= 1) {
        recuperandoAClasseColor[i].classList.remove('selected')
    }
}
// Adicionando selected
function adicionandoSelected(event) {
    event.target.classList.add('selected')
    
    
}

//adicionando evento de adicionar selected  e remover para o pai
function listenToColors(){
    let adicionandoEventoBoxPai = document.querySelector('#color-palette');
    adicionandoEventoBoxPai.addEventListener('click', removeSelectedClass);
    adicionandoEventoBoxPai.addEventListener('click', adicionandoSelected);
}
listenToColors();

// 2 parte do problema
function paintPixel(event) {
  const selectedElement = document.querySelector('.selected');
  const cor = selectedElement.style.backgroundColor;
  event.target.style.backgroundColor = cor;
   
}


// Evento para a tabela
function eventoDaTabela(){

    let clickQ = document.querySelector('#pixel-board')
    clickQ.addEventListener('click', paintPixel)
}

eventoDaTabela();


