//selecionado.classList.remove('selected')

const paleta = document.getElementsByClassName('color');

//console.log(pixel);

function addListener(objeto){
    let objFunc = objeto;

    for(let index = 0; index < objeto.length; index += 1){
        objFunc[index].addEventListener("click", changeClassSelected);
    }
}

function changeClassSelected(event){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

addListener(paleta);