window.onload = firstSelectedFun;

//Quando a página carregar, executa os comandos abaixo:
function firstSelectedFun() {
  document.querySelector(".black").classList.add("selected");
  clickSelect();
}

//Recupera caminho das cores e adiciona classe "selected"
function clickSelect() {
  let localRed = document.querySelector(".red");
  let localBlue = document.querySelector(".blue");
  let localGreen = document.querySelector(".green");
  let localBlack = document.querySelector(".black");

  localRed.addEventListener("click", function () {
    localRed.classList.add("selected");

    if (localBlack.classList.contains ("selected") || (localBlue.classList.contains ("selected") || (localGreen.classList.contains ("selected")))){
        localBlack.classList.remove('selected')
        localBlue.classList.remove('selected')
        localGreen.classList.remove('selected')
    }
  });

  localBlue.addEventListener("click", function () {
    localBlue.classList.add("selected");

    if (localBlack.classList.contains ("selected") || (localRed.classList.contains ("selected") || (localGreen.classList.contains ("selected")))){
        localBlack.classList.remove('selected')
        localRed.classList.remove('selected')
        localGreen.classList.remove('selected')
    }
  });

  localGreen.addEventListener("click", function () {
    localGreen.classList.add("selected");

    if (localBlack.classList.contains ("selected") || (localBlue.classList.contains ("selected") || (localRed.classList.contains ("selected")))){
        localBlack.classList.remove('selected')
        localBlue.classList.remove('selected')
        localRed.classList.remove('selected')
    }
  });

  localBlack.addEventListener("click", function () {
    localBlack.classList.add("selected");

    if (localRed.classList.contains ("selected") || (localBlue.classList.contains ("selected") || (localGreen.classList.contains ("selected")))){
        localRed.classList.remove('selected')
        localBlue.classList.remove('selected')
        localGreen.classList.remove('selected')
    }
  });
}
