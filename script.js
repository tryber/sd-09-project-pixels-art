document.addEventListener('click', function (event) {
    
    var corAtual = document.getElementsByClassName('selected').item(0).classList[1];

    if ( event.target.classList.contains('color') ) {
        document.getElementsByClassName('selected').item(0).classList.remove('selected');
        event.target.classList.toggle('selected')
    }

    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = corAtual;
    }
}, false);

function limparTabela(){
    var limpar = document.querySelectorAll('.pixel')
    limpar.forEach(element => {
        element.style.backgroundColor = 'white'
    });
}