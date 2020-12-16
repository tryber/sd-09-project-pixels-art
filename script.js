const blackBox = document.querySelector('.black');
const redBox = document.querySelector('.red');
const blueBox = document.querySelector('.blue');
const greenBox = document.querySelector('.green');
const blankBox = document.getElementsByClassName('.pixel');
const selectedColor = document.querySelector('.selected');
const paleta = document.getElementsByClassName('color');

// var paletaFilhos = document.getElementsByClassName("color");

// for (let i = 0; i < paletaFilhos.length; i++) {
//     paletaFilhos[i].addEventListener('click', function(){
//         if(paletaFilhos[i].classList[2] != "selected") {
//             var selectedAtual = document.getElementsByClassName("selected");
//             selectedAtual[0].className = selectedAtual[0].className.replace("selected", "");
//             this.classList += " selected";
//         }
//     })
    
// }




function transferSelected(originaryEvent) {

    for(let i = 0; i < paleta.length; i += 1) {
        
        paleta[i].classList.remove('selected')
        if (originaryEvent.target === paleta[i] && paleta[i].classList[2] != 'selected') {
            document.getElementsByClassName('color')[i].className += ' selected';
        }
    }
}

blackBox.addEventListener('click', transferSelected)
redBox.addEventListener('click', transferSelected)
blueBox.addEventListener('click', transferSelected)
greenBox.addEventListener('click', transferSelected)

// function paint() {
//     blankBox.addEventListener('click', blankBox.style.backgroundColor = 'black')
// }

// function changeColor() {
//     blankBox.style.backgroundColor = 'black';
// }

// document.addEventListener('load', paint)
// blankBox.addEventListener('click', )
